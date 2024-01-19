import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlHeader } from './index';

registerWebComponents([VlHeader]);

type MountDefaultProps = {
    authenticatedUserUrl: string;
    development: boolean;
    identifier?: string;
    loginRedirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    simple: boolean;
    skeleton?: boolean;
    switchCapacityUrl: string;
    onReady: (evt: CustomEvent) => void;
};

const mountDefault = ({ ...props }: MountDefaultProps) => {
    return cy.mount(html`
        <div is="vl-body">
            <vl-header
                data-vl-authenticated-user-url=${props.authenticatedUserUrl}
                ?data-vl-development=${props.development}
                data-vl-identifier=${props.identifier}
                data-vl-login-redirect-url=${props.loginRedirectUrl}
                data-vl-login-url=${props.loginUrl}
                data-vl-logout-url=${props.logoutUrl}
                ?data-vl-simple=${props.simple}
                ?data-vl-skeleton=${props.skeleton}
                data-vl-switch-capacity-url=${props.switchCapacityUrl}
                @ready=${(evt: CustomEvent) => props.onReady(evt)}
            ></vl-header>
        </div>
    `);
};

const props: MountDefaultProps = {
    authenticatedUserUrl: '/sso/ingelogde_gebruiker',
    development: true,
    identifier: '59188ff6-662b-45b9-b23a-964ad48c2bfb',
    loginRedirectUrl: '/',
    loginUrl: '/sso/aanmelden',
    logoutUrl: '/sso/afgemeld',
    simple: false,
    skeleton: false,
    switchCapacityUrl: '/sso/wissel_organisatie',
    onReady: () => console.log('ready'),
};

describe('vl-header component - default', () => {
    beforeEach(() => {
        mountDefault(props);
    });

    it('should mount', () => {
        cy.get('vl-header');
    });

    it('should be accessible', () => {
        cy.get('vl-header');

        cy.injectAxe();
        cy.checkA11y('vl-header');
    });

    it('should render with fixed height', () => {
        cy.get('vl-header');

        cy.get('#header__container').should('have.css', 'min-height', '43px');
    });
});

describe('vl-header component - properties default ', () => {
    it('should have default values properties', () => {
        mountDefault(props);

        cy.get('vl-header').should('have.attr', 'data-vl-authenticated-user-url', props.authenticatedUserUrl);
        cy.get('vl-header').should('not.have.attr', 'data-vl-development', props.development);
        cy.get('vl-header').should('have.attr', 'data-vl-identifier', props.identifier);
        cy.get('vl-header').should('have.attr', 'data-vl-login-redirect-url', props.loginRedirectUrl);
        cy.get('vl-header').should('have.attr', 'data-vl-login-url', props.loginUrl);
        cy.get('vl-header').should('have.attr', 'data-vl-logout-url', props.logoutUrl);
        cy.get('vl-header').should('not.have.attr', 'data-vl-simple', props.simple);
        cy.get('vl-header').should('not.have.attr', 'data-vl-skeleton', props.skeleton);
        cy.get('vl-header').should('have.attr', 'data-vl-switch-capacity-url', props.switchCapacityUrl);
    });
});

describe('vl-header component - properties reflect ', () => {
    it('should reflect the <authenticatedUser> attribute', () => {
        mountDefault({ ...props, authenticatedUserUrl: '/sso/TEST_GEBRUIKER' });

        cy.get('vl-header').should('have.attr', 'data-vl-authenticated-user-url', '/sso/TEST_GEBRUIKER');
    });

    it('should reflect the <development> attribute', () => {
        mountDefault({ ...props, development: true });

        cy.get('vl-header').should('have.attr', 'data-vl-development', '');
    });

    it('should reflect the <identifier> attribute', () => {
        mountDefault({ ...props, identifier: 'TEST_IDENTIFIER' });

        cy.get('vl-header').should('have.attr', 'data-vl-identifier', 'TEST_IDENTIFIER');
    });

    it('should reflect the <loginRedirectUrl> attribute', () => {
        mountDefault({ ...props, loginRedirectUrl: '/TEST_REDIRECT_URL' });

        cy.get('vl-header').should('have.attr', 'data-vl-login-redirect-url', '/TEST_REDIRECT_URL');
    });

    it('should reflect the <loginUrl> attribute', () => {
        mountDefault({ ...props, loginUrl: '/TEST_LOGIN_URL' });

        cy.get('vl-header').should('have.attr', 'data-vl-login-url', '/TEST_LOGIN_URL');
    });

    it('should reflect the <logoutUrl> attribute', () => {
        mountDefault({ ...props, logoutUrl: '/TEST_LOGOUT_URL' });

        cy.get('vl-header').should('have.attr', 'data-vl-logout-url', '/TEST_LOGOUT_URL');
    });

    it('should reflect the <simple> attribute', () => {
        mountDefault({ ...props, simple: true });

        cy.get('vl-header').should('have.attr', 'data-vl-simple');
    });

    it('should reflect the <skeleton> attribute', () => {
        mountDefault({ ...props, skeleton: true });

        cy.get('vl-header').should('have.attr', 'data-vl-skeleton');
    });

    it('should reflect the <switchCapacityUrl> attribute', () => {
        mountDefault({ ...props, switchCapacityUrl: '/TEST_SWITCH_URL' });

        cy.get('vl-header').should('have.attr', 'data-vl-switch-capacity-url', '/TEST_SWITCH_URL');
    });
});

describe('vl-header component - events', () => {
    it('should emit ready event', () => {
        mountDefault({ ...props, development: true });
        cy.get('vl-header');

        // Mogelijke flaky test aangezien het event afgevuurd kan worden vooraleer de eventListener is toegevoegd.
        cy.createStubForEvent('vl-header', 'ready');
        cy.get('@ready').should('have.been.calledOnce');
    });
});

describe('vl-header component - with skeleton', () => {
    it('should render the skeleton container', () => {
        mountDefault({ ...props, skeleton: true });

        cy.get('vl-header').should('have.attr', 'data-vl-skeleton');

        cy.get('#header__skeleton').should('exist');
    });
});
