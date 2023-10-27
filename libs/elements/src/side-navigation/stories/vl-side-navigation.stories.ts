import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { sideNavigationHTML } from './vl-side-navigation.stories-html';
import sideNavigationDoc from './vl-side-navigation.stories-doc.mdx';

export default {
    title: 'Elements/side-navigation',
    tags: ['autodocs'],
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: sideNavigationDoc },
    },
    decorators: [(story: () => unknown) => html` <div style="height: 400px;">${story()}</div>`],
};

export const SideNavigationDefault = () => html`${unsafeHTML(sideNavigationHTML)}`;
SideNavigationDefault.storyName = 'vl-side-navigation - default';

export const SideNavigationMobile = () => html`${unsafeHTML(sideNavigationHTML)}`;
SideNavigationMobile.storyName = 'vl-side-navigation - mobile';
SideNavigationMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1',
    },
};
