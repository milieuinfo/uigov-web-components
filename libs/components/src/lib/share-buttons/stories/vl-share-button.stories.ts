import { html } from 'lit-html';
import '../vl-share-buttons.component';
import '../vl-share-button.component';
import { shareButtonArgs, shareButtonArgTypes } from './vl-share-button.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/share-buttons',
    args: storyArgs(shareButtonArgs),
    argTypes: storyArgTypes(shareButtonArgTypes),
} as Meta<typeof shareButtonArgs>;

export const shareButtonDefault = ({ href, medium }: typeof shareButtonArgs) =>
    html` <vl-share-buttons>
        <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>
    </vl-share-buttons>`;
shareButtonDefault.storyName = 'vl-share-button - default';
