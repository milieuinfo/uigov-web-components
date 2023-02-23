import { html, nothing } from 'lit-html';
import '../vl-header.section';
import { headerArgs, headerArgTypes } from './vl-header.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import headerDoc from './vl-header.stories-doc.mdx';

export default {
    title: 'sections/header',
    args: headerArgs,
    argTypes: headerArgTypes,
    parameters: {
        docs: { page: headerDoc, inlineStories: false },
        layout: 'fullscreen',
    },
} as Meta<typeof headerArgs>;

export const HeaderDefault: StoryFn<typeof headerArgs> = ({
    authenticatedUserUrl,
    development,
    identifier,
    loginRedirectUrl,
    loginUrl,
    logoutUrl,
    simple,
    switchCapacityUrl,
    onReady,
}) => html`
    <div is="vl-body">
        <vl-header
            data-vl-authenticated-user-url=${authenticatedUserUrl || nothing}
            ?data-vl-development=${development}
            data-vl-identifier=${identifier || nothing}
            data-vl-login-redirect-url=${loginRedirectUrl || nothing}
            data-vl-login-url=${loginUrl || nothing}
            data-vl-logout-url=${logoutUrl || nothing}
            ?data-vl-simple=${simple}
            data-vl-switch-capacity-url=${switchCapacityUrl || nothing}
            @ready=${(event: CustomEvent) => onReady(event)}
        ></vl-header>
    </div>
`;
HeaderDefault.storyName = 'vl-header - default';
