import { wizardStyle } from '@domg/govflanders-style/component';
import { resetStyle } from '@domg/govflanders-style/common';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../progress-bar/vl-progress-bar.component';
import './vl-wizard-pane.component';

@customElement('vl-wizard')
export class VlWizard extends LitElement {
    private panes: any[];
    public activeStep: number;

    static get styles() {
        return [resetStyle, wizardStyle];
    }

    static get properties() {
        return {
            panes: { type: Array },
            activeStep: {
                type: Number,
                attribute: 'data-vl-active-step',
                reflect: true,
            },
        };
    }

    constructor() {
        super();
        this.panes = [];
        this.activeStep = 1;
    }

    onSlotChange() {
        this.panes = [...Array(this.querySelectorAll('vl-wizard-pane'))];
    }

    updated() {
        this.panes.forEach((pane, index) => {
            pane.isActive = this.activeStep === index + 1;
        });
    }

    render() {
        return html`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    .steps=${this.panes.map((pane) => pane.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-wizard': VlWizard;
    }
}
