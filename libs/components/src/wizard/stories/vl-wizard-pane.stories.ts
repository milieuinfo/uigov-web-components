import { html } from 'lit-html';
import '../vl-wizard-pane.component';
import '../vl-wizard.component';
import { wizardPaneArgs, wizardPaneArgTypes } from './vl-wizard-pane.stories-arg';

export default {
    title: 'Components/wizard/wizard-pane',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: wizardPaneArgs,
    argTypes: wizardPaneArgTypes,
};

export const wizardPaneDefault = ({ name }: typeof wizardPaneArgs) => {
    return html` <div style="max-width: 780px">
        <vl-wizard>
            <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>
        </vl-wizard>
    </div>`;
};
wizardPaneDefault.storyName = 'vl-wizard-pane - default';
