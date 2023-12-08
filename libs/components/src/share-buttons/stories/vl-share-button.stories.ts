import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-share-button.component';
import '../vl-share-buttons.component';
import { shareButtonArgs, shareButtonArgTypes } from './vl-share-button.stories-arg';

export default {
    title: 'Components/share-buttons/button',
    tags: ['autodocs'],
    args: shareButtonArgs,
    argTypes: shareButtonArgTypes,
} as Meta<typeof shareButtonArgs>;

export const shareButtonDefault = ({ href, medium }: typeof shareButtonArgs) =>
    html` <vl-share-buttons>
        <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>
    </vl-share-buttons>`;
shareButtonDefault.storyName = 'vl-share-button - default';
