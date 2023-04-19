import { VlMap } from '../../../vl-map';
import { css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('vl-map-loading-action')
export class VlMapLoadingAction extends LitElement {
    static styles = css`
        @keyframes progress {
            0% {
                left: 0;
                width: 0;
            }
            50% {
                width: 100%;
            }
            100% {
                right: 0;
                width: 0;
            }
        }

        :host(.loading) {
            visibility: visible;
            position: absolute;
            height: 3px;
            background: rgba(0, 0, 255, 0.6);
            animation: progress 3s infinite ease-in-out;
            z-index: 2;
        }
    `;

    connectedCallback() {
        this.map.on('loadstart', () => {
            this.toggleLoadingClass(true);
        });
        this.map.on('loadend', () => {
            this.toggleLoadingClass(false);
        });
        super.connectedCallback();
    }

    private toggleLoadingClass(loading: boolean) {
        if (loading) {
            this.classList.add('loading');
        } else {
            this.classList.remove('loading');
        }
    }
    get map(): VlMap {
        return this.closest('vl-map');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-loading-action': VlMapLoadingAction;
    }
}
