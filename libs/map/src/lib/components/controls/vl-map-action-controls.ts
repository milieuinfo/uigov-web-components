import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './vl-map-controls.scss';

@customElement('vl-map-action-controls')
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-action-controls': VlMapActionControls;
    }
}
