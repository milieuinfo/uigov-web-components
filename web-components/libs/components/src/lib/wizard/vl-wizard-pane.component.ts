import { html, LitElement, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-wizard-pane')
export class VlWizardPane extends LitElement {
    private isActive = false;
    private name = '';

    static get properties() {
        return {
            isActive: { type: Boolean },
            name: { type: String, attribute: 'data-vl-name', reflect: true },
        };
    }

    updated(changed: any) {
        [...changed].forEach(([prop]) => prop === 'name' && this.parentElement?.onslotchange?.(prop));
    }

    render() {
        return html`${this.isActive ? html`<slot></slot>` : nothing}`;
    }
}
