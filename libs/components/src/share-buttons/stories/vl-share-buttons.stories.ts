import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-share-button.component';
import '../vl-share-buttons.component';
import { shareButtonsArgs, shareButtonsArgTypes } from './vl-share-buttons.stories-arg';

export default {
    title: 'Components/share-buttons/buttons',
    tags: ['autodocs'],
    args: storyArgs(shareButtonsArgs),
    argTypes: storyArgTypes(shareButtonsArgTypes),
} as Meta<typeof shareButtonsArgs>;

export const shareButtonsDefault = ({ alt }: typeof shareButtonsArgs) => html` <vl-share-buttons
    ?data-vl-alt=${alt}
    data-cy="share-buttons"
>
    <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>`;
shareButtonsDefault.storyName = 'vl-share-buttons - default';
