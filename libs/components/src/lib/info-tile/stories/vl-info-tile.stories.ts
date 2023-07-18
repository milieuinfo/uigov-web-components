import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../vl-info-tile.component';
import { infoTileArgs, infoTileArgTypes } from './vl-info-tile.stories-arg';
import { Meta } from '@storybook/web-components';
import infoTileDoc from './vl-info-tile.stories-doc.mdx';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'Components/info-tile',
    args: storyArgs(infoTileArgs),
    argTypes: storyArgTypes(infoTileArgTypes),
    parameters: {
        docs: {
            page: infoTileDoc,
        },
    },
} as Meta<typeof infoTileArgs>;

const Template = story(
    infoTileArgs,
    ({ autoOpen, toggleable, contentSlot, subtitleSlot, titleSlot }) => html`
        <vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen}>
            ${unsafeHTML(titleSlot)}${unsafeHTML(subtitleSlot)}${unsafeHTML(contentSlot)}
        </vl-info-tile>
    `
);

export const InfoTileDefault = Template.bind({});
InfoTileDefault.storyName = 'vl-info-tile - default';
InfoTileDefault.args = {
    titleSlot: `<span slot="title">Broos Deprez</span>`,
    subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
    contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
};

export const InfoTileToggleable = Template.bind({});
InfoTileToggleable.storyName = 'vl-info-tile - toggleable';
InfoTileToggleable.args = {
    toggleable: true,
    titleSlot: `<span slot="title">Broos Deprez</span>`,
    subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
    contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
};
