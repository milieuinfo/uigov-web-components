import { html } from 'lit-html';
import '../vl-document.component';
import { documentArgs, documentArgTypes } from './vl-document.stories-arg';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';

export default {
    title: 'Components/document',
    args: storyArgs(documentArgs),
    argTypes: storyArgTypes(documentArgTypes),
} as Meta<typeof documentArgs>;

export const documentDefault = ({ href, type, title, metadata }: typeof documentArgs) => html` <div is="vl-grid">
    <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">
        <vl-document data-vl-href=${href} data-cy="document">
            <span slot="type">${type}</span>
            <span slot="title">${title}</span>
            <span slot="metadata">${metadata}</span>
        </vl-document>
    </div>
</div>`;
documentDefault.storyName = 'vl-document - default';
