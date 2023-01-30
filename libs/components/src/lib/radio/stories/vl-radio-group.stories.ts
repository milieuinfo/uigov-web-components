import { html } from 'lit-html';
import '../vl-radio-group.component';

export default {
    title: 'Components/radio',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const radioGroupDefault = () => html`
    <vl-radio-group id="radio-group-1" data-cy="radio-button-group">
        <vl-radio id="radio-group-1-radio-1" data-vl-label="Ja" data-vl-value="yes"></vl-radio>
        <vl-radio id="radio-group-1-radio-2" data-vl-label="Nee" data-vl-value="no"></vl-radio>
    </vl-radio-group>
`;
radioGroupDefault.storyName = 'vl-radio-group - default';
