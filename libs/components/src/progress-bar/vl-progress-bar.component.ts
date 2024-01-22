import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { accessibilityStyle, resetStyle } from '@domg/govflanders-style/common';
import { progressBarStyle } from '@domg/govflanders-style/component';
import ProgressBar from '@govflanders/vl-ui-progress-bar/src/js/progress-bar.js';
import '@govflanders/vl-ui-util/dist/js/util.js';
import { type PropertyDeclarations, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import 'reflect-metadata';
import { VlPopoverComponent } from '../popover/vl-popover.component';
import progressBarUigStyle from './vl-progress-bar.uig-css';

@customElement('vl-progress-bar')
export class VlProgressBarComponent extends BaseLitElement {
    private activeStep = 1;
    private focusOnChange = false;
    private numeric = false;
    private progressBar = new ProgressBar();
    private steps = [];
    private showSteps = false;

    static {
        registerWebComponents([VlPopoverComponent]);
    }

    static get styles() {
        return [resetStyle, progressBarStyle, progressBarUigStyle, accessibilityStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
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
            numeric: { type: Boolean, attribute: 'data-vl-numeric', reflect: true },
            steps: { type: Array },
            showSteps: { type: Boolean, attribute: 'data-vl-show-steps', reflect: true },
        };
    }

    constructor() {
        super();
        this.numeric = false;
        this.focusOnChange = false;
        this.activeStep = 1;
        this.progressBar = new ProgressBar();
        this.steps = [];
        this.showSteps = false;
    }

    updated() {
        this.progressBar.updateStep(this.shadowRoot, this.activeStep, this.focusOnChange);
    }

    render() {
        const progressBarClasses = {
            'vl-progress-bar': true,
            'vl-progress-bar--numeric': this.numeric,
            'vl-progress-bar--data-vl-numeric': this.numeric,
        };

        return html` <div class=${classMap(progressBarClasses)}>
            ${this.steps.map((step, index) => this.renderStep(step, index))}
        </div>`;
    }

    private renderStep = (step: string, index: number) => {
        const isPopOverActive = !this.showSteps;

        const stepClasses = {
            'vl-progress-bar__step': true,
            'vl-progress-bar__step--active': this.activeStep === index + 1,
        };

        return html` <div class=${classMap(stepClasses)}>
            <button
                @click=${() => this.handleStepClick(step, index + 1)}
                class="vl-progress-bar__bullet"
                aria-label=${step}
                id="step-${index + 1}"
            >
        
                <vl-popover for="step-${index + 1}" placement="top" trigger=${isPopOverActive
                    ? 'focus hover'
                    : undefined}>${isPopOverActive ? step : undefined}</vl-popover>

                ${this.showSteps ? html`<span class="vl-progress-bar__bullet__text" title=${step}>${step}</span>` : ''}
            </button>
        </div>`;
    };

    private handleStepClick(step: string, stepNumber: number) {
        this.dispatchEvent(
            new CustomEvent('vl-click-step', {
                bubbles: true,
                composed: true,
                detail: { step, number: stepNumber },
            })
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-progress-bar': VlProgressBarComponent;
    }
}
