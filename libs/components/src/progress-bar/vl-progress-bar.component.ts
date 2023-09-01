import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { accessibilityStyle, resetStyle } from '@domg/govflanders-style/common';
import { progressBarStyle } from '@domg/govflanders-style/component';
import ProgressBar from '@govflanders/vl-ui-progress-bar/src/js/progress-bar.js';
import '@govflanders/vl-ui-util/dist/js/util.js';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import 'reflect-metadata';
import { VlTooltipComponent } from '../tooltip/vl-tooltip.component';
import progressBarUigStyle from './vl-progress-bar.uig-css';

@customElement('vl-progress-bar')
export class VlProgressBarComponent extends BaseLitElement {
    private numeric = false;
    private focusOnChange = false;
    private activeStep = 1;
    private progressBar = new ProgressBar();
    private steps = [];

    static {
        registerWebComponents([VlTooltipComponent]);
    }

    static get styles() {
        return [resetStyle, progressBarStyle, progressBarUigStyle, accessibilityStyle];
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
        return html` <div class=${classMap(classes)}>
            ${this.steps.map(
                (step, index) => html` <div class="vl-progress-bar__step">
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-progress-bar': VlProgressBarComponent;
    }
}
