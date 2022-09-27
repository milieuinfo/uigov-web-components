import { html, css, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import 'reflect-metadata';
import styles from './style/vl-progress-bar.scss';
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import ProgressBar from '@govflanders-v14/vl-ui-progress-bar/src/js/progress-bar.js';
import '../tooltip/vl-tooltip.component';
import { customElement } from 'lit/decorators.js';

@customElement('vl-progress-bar')
export class VlProgressBarComponent extends LitElement {
    private numeric = false;
    private focusOnChange = false;
    private activeStep = 1;
    private progressBar = new ProgressBar();
    private steps = [];

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return {
            numeric: { type: Boolean, attribute: 'data-vl-numeric', reflect: true },
            activeStep: {
                type: Number,
                attribute: 'data-vl-active-step',
                reflect: true,
            },
            focusOnChange: {
                type: Boolean,
                attribute: 'data-vl-focus-on-change',
                reflect: true,
            },
            steps: { type: Array },
        };
    }

    constructor() {
        super();
        this.numeric = false;
        this.focusOnChange = false;
        this.activeStep = 1;
        this.progressBar = new ProgressBar();
        this.steps = [];
    }

    updated() {
        this.progressBar.updateStep(this.shadowRoot, this.activeStep, this.focusOnChange);
    }

    render() {
        const classes = {
            'vl-progress-bar': true,
            'vl-progress-bar--numeric': this.numeric,
            'vl-progress-bar--data-vl-numeric': this.numeric,
        };
        return html`<div class=${classMap(classes)}>
            ${this.steps.map(
                (step, index) => html`<div class="vl-progress-bar__step">
                    <button
                        @click=${() =>
                            this.dispatchEvent(
                                new CustomEvent('vl-click-step', {
                                    bubbles: true,
                                    composed: true,
                                    detail: { step, number: index + 1 },
                                })
                            )}
                        class="vl-progress-bar__bullet"
                        aria-label=${step}
                    >
                        <vl-tooltip placement="top">${step}</vl-tooltip>
                        <span class="vl-u-visually-hidden">${step}</span>
                    </button>
                </div>`
            )}
        </div>`;
    }
}
