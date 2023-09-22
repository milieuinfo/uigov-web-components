import { CSSResult, PropertyDeclarations, TemplateResult, html, PropertyValues } from 'lit';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import { customElement } from 'lit/decorators.js';
import FloatingController from './vl-floating-ui.controller';
import popoverUigStyle from './vl-popover.uig-css';
import popoverLinkedListStyle from './vl-popover.linked-list.css';
import type { Placement } from '@floating-ui/dom';

@customElement('vl-popover')
export class VlPopoverComponent extends BaseLitElement {
    private popup!: FloatingController;
    public for = ''; // html id van het referentie-element
    public trigger = 'click';
    public placement: Placement = 'bottom';
    public distance = 0; // afstand van referentie-element in px
    public minimumArrowDistance = 10; // minimum afstand in px van referentie-element wanneer er een pijl is
    public open = false;
    public hideArrow = false;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, popoverUigStyle, popoverLinkedListStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            for: { type: String, attribute: 'data-vl-for', reflect: true },
            open: { type: Boolean, attribute: 'data-vl-open', reflect: true },
            trigger: { type: String, attribute: 'data-vl-trigger', reflect: true },
            placement: { type: String, attribute: 'data-vl-placement', reflect: true },
            distance: { type: Number, attribute: 'data-vl-distance', reflect: true },
            hideArrow: { type: Boolean, attribute: 'data-vl-hide-arrow', reflect: true },
        };
    }

    protected async firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
        this.hidden = !this.open;
        if (!this.hideArrow && this.distance < this.minimumArrowDistance) {
            this.distance = this.minimumArrowDistance;
        }
        this.popup = new FloatingController(this, this.popupOptions());

        if (this.open) {
            await this.popup.updatePosition();
        }
    }

    render(): TemplateResult {
        return html`
            <div part="content" class="popover-content">
                <slot></slot>
                ${!this.hideArrow ? html`<i id="popover-arrow" part="arrow" role="presentation"></i>` : null}
            </div>
        `;
    }

    async updated(changedProperties: PropertyValues<this>) {
        if (changedProperties.has('open')) {
            await this.handleOpenChange();
        } else {
            this.popup.setOptions(this.popupOptions());
            await this.popup.updatePosition();
        }
    }

    async handleOpenChange() {
        if (this.open) {
            this.popup.updatePosition();
            this.hidden = false;
        } else {
            this.hidden = true;
        }
        this.popup.referenceElement.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }

    show = () => {
        this.open = true;
    };

    hide = () => {
        this.open = false;
    };

    toggle() {
        if (this.open) {
            this.hide();
        } else {
            this.show();
        }
    }

    popupOptions() {
        return {
            reference: this.for,
            trigger: this.trigger,
            distance: this.distance,
            placement: this.placement,
            showDelay: 0,
            hideDelay: 0,
        };
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover': VlPopoverComponent;
    }
}
