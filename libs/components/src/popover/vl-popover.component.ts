import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import { resetStyle } from '@domg/govflanders-style/common';
import type { Placement } from '@floating-ui/dom';
import { CSSResult, html, PropertyDeclarations, PropertyValues, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import FloatingController from './vl-floating-ui.controller';
import { VlPopoverActionListComponent } from './vl-popover-action-list.component';
import { VlPopoverActionComponent } from './vl-popover-action.component';
import popoverUigStyle from './vl-popover.uig-css';

@customElement('vl-popover')
export class VlPopoverComponent extends BaseLitElement {
    private popup!: FloatingController;
    private for = ''; // html id van het referentie-element
    private trigger = 'click';
    private placement: Placement = 'bottom';
    private distance = 10; // afstand van referentie-element in px
    open = false;
    private hideArrow = false;
    private contentPadding: 'none' | 'small' | 'medium' | 'large' = 'small';
    private hideOnClick = false;

    static {
        registerWebComponents([VlPopoverActionComponent, VlPopoverActionListComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, popoverUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            for: { type: String, attribute: 'for', reflect: true },
            contentPadding: { type: String, attribute: 'content-padding', reflect: true },
            open: { type: Boolean, attribute: 'open', reflect: true },
            trigger: { type: String, attribute: 'trigger', reflect: true },
            placement: { type: String, attribute: 'placement', reflect: true },
            distance: { type: Number, attribute: 'distance', reflect: true },
            hideArrow: { type: Boolean, attribute: 'hide-arrow', reflect: true },
            hideOnClick: { type: Boolean, attribute: 'hide-on-click', reflect: true },
        };
    }

    protected firstUpdated() {
        this.hidden = !this.open;
        this.popup = new FloatingController(this, this.popupOptions());

        if (this.open) {
            this.popup.updatePosition();
        }
    }

    protected render(): TemplateResult {
        const classes = { 'popover-content': true, [`padding-${this.contentPadding}`]: true };
        return html`
            <div class=${classMap(classes)}>
                <slot role="content"></slot>
                ${!this.hideArrow ? html`<i id="popover-arrow" role="presentation"></i>` : null}
            </div>
        `;
    }

    protected updated(changedProperties: PropertyValues<this>) {
        if (changedProperties.has('open')) {
            this.handleOpenChange();
        } else {
            this.popup.setOptions(this.popupOptions());
            this.popup.updatePosition();
        }
    }

    private handleOpenChange() {
        if (this.open) {
            this.popup.updatePosition();
            this.hidden = false;
        } else {
            this.hidden = true;
        }
        this.popup.getReferenceElement()?.setAttribute('aria-expanded', this.open ? 'true' : 'false');
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

    private popupOptions() {
        return {
            reference: this.for,
            trigger: this.trigger,
            distance: this.distance,
            placement: this.placement,
            showDelay: 0,
            hideDelay: 0,
            hideOnClick: this.hideOnClick,
        };
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover': VlPopoverComponent;
    }
}
