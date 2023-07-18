import { html } from 'lit-html';
import '../vl-button-pill.component';
import { buttonPillArgs, buttonPillArgTypes } from './vl-button-pill.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/pill',
    args: storyArgs(buttonPillArgs),
    argTypes: storyArgTypes(buttonPillArgTypes),
} as Meta<typeof buttonPillArgs>;

export const buttonPillDefault = ({ type }: typeof buttonPillArgs) =>
    html` <button is="vl-button-pill" type="button" data-vl-type=${type}>Optie 1</button> `;
buttonPillDefault.storyName = 'vl-button-pill - default';
