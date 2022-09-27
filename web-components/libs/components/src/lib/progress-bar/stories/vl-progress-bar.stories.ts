import { html } from 'lit-html';
import '../vl-progress-bar.component';
import { progressBarArgs, progressBarArgTypes } from './vl-progress-bar.stories-arg';

export default {
    title: 'Components/progress-bar',
    args: progressBarArgs,
    argTypes: progressBarArgTypes,
};

export const progressBarDefault = ({
    numeric,
    activeStep,
    steps,
    focusOnChange,
    onClickStep,
}: typeof progressBarArgs) => {
    return html` <vl-progress-bar
        ?data-vl-numeric=${numeric}
        ?data-vl-focus-on-change=${focusOnChange}
        data-vl-active-step=${activeStep}
        .steps=${steps}
        @vl-click-step=${(event: any) => onClickStep(event.detail)}
        data-cy="progress-bar"
    >
    </vl-progress-bar>`;
};
progressBarDefault.storyName = 'vl-progress-bar - default';
