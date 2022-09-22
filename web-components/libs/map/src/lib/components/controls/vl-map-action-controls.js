import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './vl-map-controls.scss';

export class VlMapActionControls extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    render() {
        return html` <div>
            <slot></slot>
        </div>`;
    }
}

customElements.define('vl-map-action-controls', VlMapActionControls);
