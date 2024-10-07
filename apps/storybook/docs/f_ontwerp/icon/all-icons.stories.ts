import { registerWebComponents } from '@domg-wc/common';
import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { VlAllIconsComponent } from '@domg-wc/integration/icon/index';
import AllIconsDocs from './all-icons.stories-doc.mdx';

registerWebComponents([VlAllIconsComponent]);

export default {
    title: 'Ontwerp/Iconen/Alle Iconen',
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: AllIconsDocs,
        },
    },
} as Meta;

export const AllIcons = () => html`<vl-all-icons></vl-all-icons>`;
AllIcons.storyName = 'Alle Iconen';
