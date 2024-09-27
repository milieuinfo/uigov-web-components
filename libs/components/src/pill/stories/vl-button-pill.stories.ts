import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-button-pill.component';
import { buttonPillArgs, buttonPillArgTypes } from './vl-button-pill.stories-arg';

export default {
    id: 'components-pill-button-pill',
    title: 'Components/pill/button-pill',
    tags: ['autodocs'],
    args: buttonPillArgs,
    argTypes: buttonPillArgTypes,
} as Meta<typeof buttonPillArgs>;

export const ButtonPillDefault = ({ type }: typeof buttonPillArgs) =>
    html` <button is="vl-button-pill" type="button" data-vl-type=${type}>Optie 1</button> `;
ButtonPillDefault.storyName = 'vl-button-pill - default';
