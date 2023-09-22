import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import { customElement } from 'lit/decorators.js';
import popoverActionUigStyle from './vl-popover-action.uig-css';

@customElement('vl-popover-action')
export class VlPopoverActionComponent extends BaseLitElement {
    private icon = '';

    // placeholder to store any data related to this action
    action?: unknown;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, popoverActionUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            icon: { type: String, attribute: 'icon', reflect: true },
            action: { type: String, attribute: 'action' },
        };
    }

    protected render(): TemplateResult {
        return html`
            ${this.icon && this.icon !== '' ? html`<span is="vl-icon" data-vl-icon=${this.icon}></span>` : nothing}
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-action': VlPopoverActionComponent;
    }
}
