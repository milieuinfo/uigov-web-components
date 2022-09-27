import { html } from 'lit-html';
import '../vl-header.section';
import { headerArgs, headerArgTypes } from './vl-header.stories-arg';

export default {
    title: 'sections/header',
    args: headerArgs,
    argTypes: headerArgTypes,
};

export const headerInBody = ({
    identifier,
    development,
    loginUrl,
    loginRedirectUrl,
    logoutUrl,
    switchCapacityUrl,
    authenticatedUserUrl,
}: typeof headerArgs) => {
    return html` <div is="vl-body">
        <vl-header
            data-cy="header"
            data-vl-identifier=${identifier}
            ?data-vl-development=${development}
            data-vl-login-url=${loginUrl}
            data-vl-login-redirect-url=${loginRedirectUrl}
            data-vl-logout-url=${logoutUrl}
            data-vl-switch-capacity-url=${switchCapacityUrl}
            data-vl-authenticated-user-url=${authenticatedUserUrl}
        ></vl-header>
    </div>`;
};
headerInBody.storyName = 'vl-header - in body';
