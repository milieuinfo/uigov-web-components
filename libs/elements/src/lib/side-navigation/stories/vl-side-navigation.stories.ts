import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { contentHTML, navigationHTML } from './vl-side-navigation.stories-html';
import sideNavigationDoc from './vl-side-navigation.stories-doc.mdx';
import '../vl-side-navigation.element';
import '../../grid/vl-grid.element';
import '../../grid/vl-column.element';
import '../../grid/vl-layout.element';
import '../../grid/vl-region.element';

export default {
    title: 'Elements/side-navigation',
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: sideNavigationDoc },
    },
};

export const sideNavigationDefault = () => html`
    <section is="vl-region">
        <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
                <div
                    is="vl-column"
                    data-vl-size="8"
                    data-vl-medium-size="8"
                    data-vl-small-size="8"
                    data-vl-extra-small-size="12"
                >
                    ${unsafeHTML(contentHTML)}
                </div>
                <div
                    is="vl-column"
                    data-vl-size="3"
                    data-vl-medium-size="3"
                    data-vl-small-size="3"
                    data-vl-extra-small-size="0"
                >
                    ${unsafeHTML(navigationHTML)}
                </div>
            </div>
        </div>
    </section>
`;
sideNavigationDefault.storyName = 'vl-side-navigation - default';
