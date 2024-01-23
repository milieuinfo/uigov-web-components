import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { type PrivacyProps, VlPrivacy } from './vl-privacy.section';

registerWebComponents([VlPrivacy]);

type MountDefaultProps = PrivacyProps & { onClickBack?: () => void; headerSlot?: string };

const mountDefault = ({ ...props }: MountDefaultProps) =>
    cy.mount(html`<vl-privacy
        data-vl-date=${props.date}
        data-vl-version=${props.version}
        ?data-vl-disable-back-link=${props.disableBackLink}
    >
        ${unsafeHTML(props.headerSlot)}
    </vl-privacy>`);

const defaultProps: MountDefaultProps = {
    date: '3 maart 2021',
    version: '1.0.0',
    disableBackLink: false,
    onClickBack: () => {},
    headerSlot: undefined,
};

describe('vl-privacy component', () => {
    beforeEach(() => {
        mountDefault(defaultProps);
    });

    it('should mount', () => {
        cy.get('vl-privacy').shadow();
    });

    it('should be accessible', () => {
        cy.get('vl-privacy');

        cy.injectAxe();
        cy.checkA11y('vl-privacy');
    });

    it('should have privacy header', () => {
        cy.get('vl-privacy');

        cy.get('vl-privacy').shadow().find('h1').contains('Privacy');
    });
});

describe('vl-privacy component - properties default ', () => {
    it('should have default values for properties', () => {
        mountDefault(defaultProps);

        cy.get('vl-privacy').should('have.attr', 'data-vl-date', defaultProps.date);
        cy.get('vl-privacy').should('not.have.attr', 'data-vl-disable-back-link', defaultProps.disableBackLink);
        cy.get('vl-privacy').should('have.attr', 'data-vl-version', defaultProps.version);
    });
});

describe('vl-privacy component- properties reflect ', () => {
    it('should reflect the <date> attribute', () => {
        mountDefault({ ...defaultProps, date: '27 januari 2024' });

        cy.get('vl-privacy').should('have.attr', 'data-vl-date', '27 januari 2024');
    });

    it('should reflect the <disableBackLink> attribute', () => {
        mountDefault({ ...defaultProps, disableBackLink: true });

        cy.get('vl-privacy').should('have.attr', 'data-vl-disable-back-link');
    });

    it('should reflect the <version> attribute', () => {
        mountDefault({ ...defaultProps, version: 'v24' });

        cy.get('vl-privacy').should('have.attr', 'data-vl-version', 'v24');
    });
});

describe('vl-privacy component - properties functionality', () => {
    it('should disable back link and emit event', () => {
        mountDefault({ ...defaultProps, disableBackLink: true });

        cy.createStubForEvent('vl-privacy', 'vl-click-back');
        cy.get('vl-privacy').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
        cy.get('@vl-click-back').should('have.been.calledOnce');
    });

    it('should show child links on scroll', () => {
        mountDefault(defaultProps);

        const shouldHaveExpandedToggle = (href: string, expanded: boolean) => {
            cy.get('vl-privacy')
                .shadow()
                .find('nav[is="vl-side-navigation"]')
                .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
                .should('have.attr', 'aria-expanded', `${expanded}`);
        };

        shouldHaveExpandedToggle('#privacy-declaration', false);

        cy.get('vl-privacy').shadow().find('h2#privacy-declaration').scrollIntoView();

        shouldHaveExpandedToggle('#privacy-declaration', true);
    });
});

describe('vl-privacy component - header slot', () => {
    it('should replace default header with custom header', () => {
        mountDefault({
            ...defaultProps,
            headerSlot: `<vl-functional-header
        data-vl-title="Toegankelijkheidsverklaring"
        data-vl-title-level="1"
        data-vl-no-border
        data-vl-no-background
    >
        <a id="back-link" is="vl-link" href="https://overheid.vlaanderen.be" data-vl-link-back>
            Start
        </a>
    </vl-functional-header>`,
        });

        cy.get('vl-privacy').find('vl-functional-header').should('exist');
    });
});
