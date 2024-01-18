import { BaseLitElement } from '@domg-wc/common-utilities';
import { html, nothing, PropertyDeclarations } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-wizard-pane')
export class VlWizardPane extends BaseLitElement {
    isActive = false;
    name = '';

    static get properties(): PropertyDeclarations {
        return {
            isActive: { type: Boolean },
            name: { type: String, attribute: 'data-vl-name', reflect: true },
        };
    }

    updated(changed: any) {
        [...changed].forEach(([prop]) => prop === 'name' && this.parentElement?.onslotchange?.(prop));
    }

    render() {
        return html`${this.isActive ? html` <slot></slot>` : nothing}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-wizard-pane': VlWizardPane;
    }
}
