import { html } from 'lit-html';
import '../vl-datepicker.component';

// TODO: Add more detailed stories with controls.
export default {
    title: 'Components/datepicker',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const datepickerDefault = () => html` <vl-datepicker id="default-datepicker"></vl-datepicker> `;
datepickerDefault.storyName = 'vl-datepicker - default';
