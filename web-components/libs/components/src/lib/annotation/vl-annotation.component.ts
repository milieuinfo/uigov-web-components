import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './style/vl-annotation.scss';

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

window.customElements.define('vl-annotation', VlAnnotation);
