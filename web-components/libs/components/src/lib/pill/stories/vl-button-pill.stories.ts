import { html } from 'lit-html';
import '../vl-button-pill.component';
import { buttonPillArgs, buttonPillArgTypes } from './vl-button-pill.stories-arg';

const argTypes = {};

export default {
    title: 'Components/pill',
    args: buttonPillArgs,
    argTypes: buttonPillArgTypes,
};

export const buttonPillDefault = ({ type }: typeof buttonPillArgs) =>
    html` <button is="vl-button-pill" type="button" data-vl-type=${type}>Optie 1</button> `;
buttonPillDefault.storyName = 'vl-button-pill - default';
