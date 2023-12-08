import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-wizard-pane.component';
import '../vl-wizard.component';
import { wizardArgs, wizardArgTypes } from './vl-wizard.stories-arg';
import { getWizard } from './vl-wizard.stories-util';
import wizardDoc from './vl-wizard.stories-doc.mdx';

const meta: Meta = {
    title: 'Components/wizard/wizard',
    component: 'vl-wizard - default',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: {
            page: wizardDoc,
        },
    },
    args: wizardArgs,
    argTypes: wizardArgTypes,
};

export default meta;
type Story = StoryObj<typeof wizardArgs>;

export const WizardDefault: Story = {
    name: 'vl-wizard - default',
    render: ({ activeStepSlider, title, header, onClickStep }) => html` <div style="max-width: 780px;">
        <vl-wizard
            data-vl-active-step=${activeStepSlider}
            @vl-click-step=${(event: any) => {
                onClickStep(event.detail);
                getWizard().activeStep = event.detail.number;
            }}
        >
            <h2 slot="title" is="vl-h2">${title}</h2>
            <p slot="header">${header}</p>
            <vl-wizard-pane data-vl-name="Stap 1">
                <h3 is="vl-h3">Stap 1</h3>
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="12">
                        <div is="vl-form-grid" data-vl-is-stacked>
                            <div is="vl-form-column" data-vl-size="12">
                                <label is="vl-form-label" for="naam" data-vl-block> Naam </label>
                                <input id="naam" is="vl-input-field" data-vl-block />
                            </div>
                        </div>
                    </div>
                    <div is="vl-column">
                        <button @click=${() => (getWizard().activeStep += 1)} is="vl-button" type="button">
                            Volgende
                        </button>
                    </div>
                </div>
            </vl-wizard-pane>
            <vl-wizard-pane data-vl-name="Stap 2">
                <h3 is="vl-h3">Stap 2</h3>
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="12">
                        <div is="vl-form-grid" data-vl-is-stacked>
                            <div is="vl-form-column" data-vl-size="12">
                                <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>
                                <input id="years" is="vl-input-field" data-vl-block />
                            </div>
                        </div>
                    </div>
                    <div is="vl-column">
                        <button @click=${() => (getWizard().activeStep -= 1)} is="vl-button-link" type="button">
                            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                            Vorige
                        </button>
                    </div>
                </div>
            </vl-wizard-pane>
        </vl-wizard>
    </div>`,
};
