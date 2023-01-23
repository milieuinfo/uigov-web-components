import { html } from 'lit-html';
import '../vl-progress-bar.component';
import { progressBarArgs, progressBarArgTypes } from './vl-progress-bar.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import progressBarDoc from './vl-progress-bar.stories-doc.mdx';

export default {
    title: 'Components/progress-bar',
    args: progressBarArgs,
    argTypes: progressBarArgTypes,
    parameters: {
        docs: { page: progressBarDoc },
    },
} as Meta<typeof progressBarArgs>;

const Template: StoryFn<typeof progressBarArgs> = ({ numeric, activeStep, steps, focusOnChange, onClickStep }) => {
    return html`
        <vl-progress-bar
            ?data-vl-numeric=${numeric}
            ?data-vl-focus-on-change=${focusOnChange}
            data-vl-active-step=${activeStep}
            .steps=${steps}
            @vl-click-step=${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-bar>
    `;
};

export const ProgressBarDefault = Template.bind({});
ProgressBarDefault.storyName = 'vl-progress-bar - default';

export const ProgressBarNumeric = Template.bind({});
ProgressBarNumeric.storyName = 'vl-progress-bar - numeric';
ProgressBarNumeric.args = {
    numeric: true,
};

export const ProgressBarFocused = Template.bind({});
ProgressBarFocused.storyName = 'vl-progress-bar - focused';
ProgressBarFocused.args = {
    focusOnChange: true,
};
