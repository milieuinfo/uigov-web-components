import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../vl-title.component';
import { TitleArgs, titleArgs, titleArgTypes } from './vl-title.stories-arg';
import titleDoc from './vl-title.stories-doc.mdx';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export default {
    title: 'Components-next/title-next',
    tags: ['autodocs'],
    args: titleArgs,
    argTypes: titleArgTypes,
    parameters: {
        docs: {
            page: titleDoc,
        },
    },
} as Meta<TitleArgs>;

export const TitleDefault = story<TitleArgs>(
    titleArgs,
    ({ underline, noSpaceBottom, alt, defaultSlot }) =>
        html`
            <vl-title-next type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h1 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
            <vl-title-next type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h2 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
            <vl-title-next type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h3 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
            <vl-title-next type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h4 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
            <vl-title-next type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h5 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
            <vl-title-next type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>
                h6 - ${unsafeHTML(defaultSlot)}
            </vl-title-next>
        `
);
TitleDefault.storyName = 'vl-title-next - default';
TitleDefault.args = {
    defaultSlot: 'Ik ben een titel',
};
