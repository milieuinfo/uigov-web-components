import { story } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlBodyElement } from '@domg-wc/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { VlFooter } from '../vl-footer.section';
import { footerArgs, footerArgTypes } from './vl-footer.stories-arg';
import footerDoc from './vl-footer.stories-doc.mdx';

registerWebComponents([VlBodyElement, VlFooter]);

export default {
    id: 'sections-footer',
    title: 'sections/footer',
    tags: ['autodocs'],
    args: footerArgs,
    argTypes: footerArgTypes,
    parameters: {
        docs: { page: footerDoc, inlineStories: false },
        layout: 'fullscreen',
    },
} as Meta<typeof footerArgs>;

export const FooterDefault = story(
    footerArgs,
    ({ identifier, development, onReady }) => html`
        <div is="vl-body">
            <vl-footer
                ?data-vl-development=${development}
                data-vl-identifier=${identifier}
                @ready=${(event: CustomEvent) => onReady(event)}
            ></vl-footer>
        </div>
    `
);
FooterDefault.storyName = 'vl-footer - default';
FooterDefault.args = {
    development: true,
    identifier: '0337f8dc-3266-4e7a-8f4a-95fd65189e5b',
};
