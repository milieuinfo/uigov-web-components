import { html } from 'lit-html';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlCookieStatement } from './vl-cookie-statement.section';

registerWebComponents([VlCookieStatement]);

type MountDefaultProps = { version?: string; date?: string; disableBackLink?: boolean };

const mountDefault = (props: MountDefaultProps) => {
    return cy.mount(
        html`<vl-cookie-statement version=${props.version} date=${props.date} data-vl-disable-back-link=${props.disableBackLink}</vl-cookie-statement>`
    );
};

const props: MountDefaultProps = {
    version: '1.0.0',
    date: '3 maart 2021',
    disableBackLink: false,
};

describe('vl-cookie-statement - default', () => {
    beforeEach(() => {
        mountDefault(props);
    });

    it('should mount', () => {
        cy.get('vl-cookie-statement').shadow();
    });

    it('should be accessible', () => {
        cy.get('vl-cookie-statement');

        cy.injectAxe();
        cy.checkA11y('vl-cookie-statement');
    });
});

describe('vl-cookie-statement component - children', () => {
    beforeEach(() => {
        mountDefault(props);
    });

    it('should render <vl-header-cookie>', () => {
        cy.get('vl-cookie-statement').shadow().find('vl-header-cookie');
    });

    it('should render <vl-header-authentication-cookie>', () => {
        cy.get('vl-cookie-statement').shadow().find('vl-header-authentication-cookie');
    });

    it('should render <vl-authentication-cookie>', () => {
        cy.get('vl-cookie-statement').shadow().find('vl-authentication-cookie');
    });

    it('should render <vl-sticky-session-cookie>', () => {
        cy.get('vl-cookie-statement').shadow().find('vl-sticky-session-cookie');
    });

    it('should render <vl-jsessionid-cookie>', () => {
        cy.get('vl-cookie-statement').shadow().find('vl-jsessionid-cookie');
    });
});

describe('vl-cookie-statement component - default content', () => {
    beforeEach(() => {
        mountDefault(props);
    });

    it('should have an h1 with "Cookieverklaring"', () => {
        cy.get('vl-cookie-statement').shadow().find('h1').contains('Cookieverklaring');
    });

    it('should have an h2 with "Cookiebeleid"', () => {
        cy.get('vl-cookie-statement').shadow().find('h2').contains('Cookiebeleid');
    });

    it('should have an h2 describing how to customize cookies', () => {
        cy.get('vl-cookie-statement')
            .shadow()
            .find('h2[is="vl-h2"]')
            .contains('Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?');
    });

    it('should have a vl-side-navigation', () => {
        cy.get('vl-cookie-statement').shadow().find('nav[is="vl-side-navigation"]');
    });

    it('should have default version', () => {
        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('1.0.0');
    });

    it('should have default date', () => {
        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('3 maart 2021');
    });
});

describe('vl-cookie-statement component - properties reflect', () => {
    it('should set date', () => {
        mountDefault({ ...props, date: '27 januari 2023' });

        cy.get('vl-cookie-statement').shadow().find('section').find('#introduction-date').contains('27 januari 2023');
    });

    it('should disable back link and emit event', () => {
        mountDefault({ ...props, disableBackLink: true });

        cy.createStubForEvent('vl-cookie-statement', 'vl-click-back');

        cy.get('vl-cookie-statement').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
        cy.get('@vl-click-back').should('have.been.calledOnce');
    });

    it('should set version', () => {
        mountDefault({ ...props, version: 'v24' });
        cy.get('vl-cookie-statement').shadow().find('#introduction-version').should('have.text', 'v24');
    });
});
