import { html, nothing } from 'lit-html';
import '../vl-footer.section';
import { footerArgs, footerArgTypes } from './vl-footer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import footerDoc from './vl-footer.stories-doc.mdx';

export default {
    title: 'sections/footer',
    args: footerArgs,
    argTypes: footerArgTypes,
    parameters: {
        docs: { page: footerDoc, inlineStories: false },
        layout: 'fullscreen',
    },
} as Meta<typeof footerArgs>;

export const FooterDefault: StoryFn<typeof footerArgs> = ({ identifier, development, onReady }) => html`
    <div is="vl-body">
        <vl-footer
            ?data-vl-development=${development}
            data-vl-identifier=${identifier || nothing}
            @ready=${(event: CustomEvent) => onReady(event)}
        ></vl-footer>
    </div>
`;
FooterDefault.storyName = 'vl-footer - default';
