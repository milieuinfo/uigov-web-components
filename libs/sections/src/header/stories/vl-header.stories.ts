import { html } from 'lit-html';
import '../vl-header.section';
import { headerArgs, headerArgTypes } from './vl-header.stories-arg';
import { Meta } from '@storybook/web-components';
import headerDoc from './vl-header.stories-doc.mdx';
import { story } from '@domg-wc/common-storybook';

export default {
    title: 'sections/header',
    tags: ['autodocs'],
    args: headerArgs,
    argTypes: headerArgTypes,
    parameters: {
        docs: {
            page: headerDoc,
            inlineStories: false,
        },
        layout: 'fullscreen',
    },
} as Meta<typeof headerArgs>;

export const HeaderDefault = story(
    headerArgs,
    ({
        skeleton,
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
                data-vl-skeleton=${skeleton}
                data-vl-authenticated-user-url=${authenticatedUserUrl}
                ?data-vl-development=${development}
                data-vl-identifier=${identifier}
                data-vl-login-redirect-url=${loginRedirectUrl}
                data-vl-login-url=${loginUrl}
                data-vl-logout-url=${logoutUrl}
                ?data-vl-simple=${simple}
                data-vl-switch-capacity-url=${switchCapacityUrl}
                @ready=${(event: CustomEvent) => onReady(event)}
            ></vl-header>
        </div>
    `
);

HeaderDefault.storyName = 'vl-header - default';
HeaderDefault.args = {
    development: true,
    identifier: '59188ff6-662b-45b9-b23a-964ad48c2bfb',
};
