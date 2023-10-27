import { html } from 'lit-html';
import '../vl-button-pill.component';
import { buttonPillArgs, buttonPillArgTypes } from './vl-button-pill.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/pill/button-pill',
    tags: ['autodocs'],
    args: storyArgs(buttonPillArgs),
    argTypes: storyArgTypes(buttonPillArgTypes),
} as Meta<typeof buttonPillArgs>;

export const ButtonPillDefault = ({ type }: typeof buttonPillArgs) =>
    html` <button is="vl-button-pill" type="button" data-vl-type=${type}>Optie 1</button> `;
ButtonPillDefault.storyName = 'vl-button-pill - default';
