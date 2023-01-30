import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './style/vl-share-buttons.scss';
import './vl-share-button.component';

@customElement('vl-share-buttons')
export class VlShareButtonsComponent extends LitElement {
    private alt = '';

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return { alt: { type: Boolean, attribute: 'data-vl-alt', reflect: true } };
    }

    render() {
        return html`<div class=${classMap({ 'vl-share-buttons': true, 'vl-share-buttons--alt': this.alt })}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-share-buttons': VlShareButtonsComponent;
    }
}
