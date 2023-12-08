import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-wizard-pane.component';
import '../vl-wizard.component';
import { wizardPaneArgs, wizardPaneArgTypes } from './vl-wizard-pane.stories-arg';
import wizardPaneDoc from './vl-wizard-pane.stories-doc.mdx';

const meta: Meta = {
    title: 'Components/wizard/wizard-pane',
    component: 'vl-wizard-pane - default',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: {
            page: wizardPaneDoc,
        },
    },
    args: wizardPaneArgs,
    argTypes: wizardPaneArgTypes,
};

export default meta;
type Story = StoryObj<typeof wizardPaneArgs>;

export const WizardPaneDefault: Story = {
    name: 'vl-wizard-pane - default',
    args: {
        name: 'Stap 1',
    },
    render: ({ name }) => html`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    `,
};
