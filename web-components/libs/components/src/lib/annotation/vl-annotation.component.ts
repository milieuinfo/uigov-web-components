import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-annotation.scss';

@customElement('vl-annotation')
export class VlAnnotation extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    private small = false;

    static get properties() {
        return {
            small: {
                type: Boolean,
                attribute: 'data-vl-small',
                reflect: true,
            },
        };
    }

    render() {
        return html`<span class="vl-annotation ${this.small ? 'vl-annotation--small' : ''}"><slot></slot></span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-annotation': VlAnnotation;
    }
}
