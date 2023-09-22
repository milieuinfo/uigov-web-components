import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { BaseLitElement } from '@domg-wc/common-utilities';
import { resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import { customElement } from 'lit/decorators.js';
import popoverActionListUigStyle from './vl-popover-action-list.uig-css';

@customElement('vl-popover-action-list')
export class VlPopoverActionListComponent extends BaseLitElement {
    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, vlElementsStyle, popoverActionListUigStyle];
    }

    protected render(): TemplateResult {
        return html` <slot></slot> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-popover-action-list': VlPopoverActionListComponent;
    }
}
