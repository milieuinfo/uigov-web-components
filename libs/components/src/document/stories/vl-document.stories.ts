import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-document.component';
import { documentArgs, documentArgTypes } from './vl-document.stories-arg';
import documentDoc from './vl-document.stories-doc.mdx';

export default {
    title: 'Components/document',
    tags: ['autodocs'],
    args: documentArgs,
    argTypes: documentArgTypes,
    parameters: {
        docs: {
            page: documentDoc,
        },
    },
} as Meta<typeof documentArgs>;

export const DocumentDefault = story(
    documentArgs,
    ({ href, type, title, metadata }) => html` <div is="vl-grid">
        <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">
            <vl-document data-vl-href=${href}>
                <span slot="type">${type}</span>
                <span slot="title">${title}</span>
                <span slot="metadata">${metadata}</span>
            </vl-document>
        </div>
    </div>`
);
DocumentDefault.storyName = 'vl-document - default';
DocumentDefault.args = {
    type: 'PDF',
    title: 'Hubert en Jan van Eyck, Vlaamse Primitieven',
    metadata: 'PDF - 580 kB',
};
