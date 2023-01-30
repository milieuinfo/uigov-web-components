import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-description-data.scss';

@customElement('vl-description-data-item')
export class VlDescriptionDataItem extends LitElement {
    private label = '';
    private value = '';

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return {
            label: { type: String, attribute: 'data-vl-label', reflect: true },
            value: { type: String, attribute: 'data-vl-value', reflect: true },
        };
    }

    hasSlot(name: string) {
        return [...Array.from(this.children)].find((child) => child.getAttribute('slot') === name);
    }

    render() {
        const labelClass = 'vl-description-data__label';
        const valueClass = 'vl-description-data__value';
        return html`
            ${this.hasSlot('label')
                ? html`<slot name="label" class=${labelClass}></slot>`
                : html`<span class=${labelClass}>${this.label}</span>`}
            ${this.hasSlot('value')
                ? html`<slot name="value" class=${valueClass}></span>`
                : html`<span class=${valueClass}>${this.value}</span>`}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-description-data-item': VlDescriptionDataItem;
    }
}
