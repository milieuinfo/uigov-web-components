import { html } from 'lit-html';
import '../vl-footer.section';
import { footerArgs, footerArgTypes } from './vl-footer.stories-arg';
import { Meta } from '@storybook/web-components';
import footerDoc from './vl-footer.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';

export default {
    title: 'sections/footer',
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
