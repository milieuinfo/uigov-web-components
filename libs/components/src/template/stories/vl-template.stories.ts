import { registerWebComponents } from '@domg-wc/common';
import { VlGridElement, VlH1Element, VlLayoutElement } from '@domg-wc/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { VlContentHeaderComponent } from '../../content-header/vl-content-header.component';
import '../vl-template.component';
import { templateArgs, templateArgTypes } from './vl-template.stories-arg';

registerWebComponents([VlContentHeaderComponent, VlGridElement, VlH1Element, VlLayoutElement]);

export default {
    id: 'components-template',
    title: 'components/template',
    tags: ['autodocs'],
    args: templateArgs,
    argTypes: templateArgTypes,
} as Meta<typeof templateArgs>;

const version = '1.2.3'; // TODO uit de package.json halen, om een json te kunnen importeren moet je echter wat config wijzigen

const mainHtml = html`
    <vl-content-header>
        <img
            is="vl-image"
            slot="image"
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            srcset="
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80   400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80   700w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80   800w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 1000w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80 1300w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80 1900w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w
            "
        />
        <a slot="context-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">uig-webcomponents</a>
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${version}</a>
    </vl-content-header>
    <section data-cy="template-content" is="vl-region">
        <div is="vl-layout">
            <div id="grid" is="vl-grid" is-stacked slot="main">
                <h1 is="vl-h1">vl-template</h1>
            </div>
        </div>
    </section>
`;

const bodySimulation = (component: any, withClass: boolean) => html` <div
    is="vl-body"
    class=${withClass ? 'vl-u-sticky-gf' : ''}
>
    ${component}
</div>`;

export const templateDefault = ({ center, stretch }: typeof templateArgs) =>
    bodySimulation(
        html`
            <vl-template ?data-vl-v-center=${center} ?data-vl-v-stretch=${stretch}>
                <vl-header
                    slot="header"
                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    data-vl-development
                ></vl-header>
                <div slot="main">${mainHtml}</div>
                <vl-footer
                    slot="footer"
                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    data-vl-development
                ></vl-footer>
            </vl-template>
        `,
        true
    );
templateDefault.storyName = 'vl-template - default';
