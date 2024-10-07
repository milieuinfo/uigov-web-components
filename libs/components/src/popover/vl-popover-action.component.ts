import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { BaseLitElement } from '@domg-wc/common';
import { resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import { customElement } from 'lit/decorators.js';
import popoverActionUigStyle from './vl-popover-action.uig-css';

@customElement('vl-popover-action')
export class VlPopoverActionComponent extends BaseLitElement {
    private icon = '';

    // placeholder to store any data related to this action
    action?: unknown;
    selected = false;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, popoverActionUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            icon: { type: String, reflect: true },
            action: { type: String },
            selected: { type: Boolean },
        };
    }

    protected render(): TemplateResult {
        return html`
            ${this.icon && this.icon !== '' ? html`<span is="vl-icon" data-vl-icon=${this.icon}></span>` : nothing}
            <slot></slot>
        `;
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('selected')) {
            if (this.selected) {
                this.setAttribute('aria-selected', 'true');
            } else {
                this.removeAttribute('aria-selected');
            }
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-action': VlPopoverActionComponent;
    }
}
