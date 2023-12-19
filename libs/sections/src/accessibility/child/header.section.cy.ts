import { type HeaderProps, header } from './header.section';

const mountDefault = (props: HeaderProps) => cy.mount(header(props));

describe('component header', () => {
    beforeEach(() => {
        mountDefault({ disableBackLink: false });
    });

    it('should mount', () => {
        cy.get('vl-functional-header');
    });

    it('should render the correct title', () => {
        cy.get('vl-functional-header').should('have.attr', 'data-vl-title', 'Departement Omgeving');
        cy.get('vl-functional-header').should('not.have.attr', 'data-vl-title', 'Test');
    });

    it('should render the correct sub-title', () => {
        cy.get('vl-functional-header').should(
            'have.attr',
            'data-vl-sub-title',
            'Toegankelijkheid en gebruiksvoorwaarden'
        );

        cy.get('vl-functional-header').should(
            'not.have.attr',
            'data-vl-sub-title',
            'ToegankelijkheidEngebruiksvoorwaarden'
        );
    });

    it('should render the correct link', () => {
        cy.get('vl-functional-header').should('have.attr', 'data-vl-link', 'https://omgeving.vlaanderen.be');
    });

    it('should not disable the back link when disableBackLink is false', () => {
        cy.get('vl-functional-header').should('not.have.attr', 'data-vl-disable-back-link');
    });
});

describe('component header - with disableBackLink set to true', () => {
    it('should disable the back link when disableBackLink is true', () => {
        mountDefault({ disableBackLink: true });
        cy.get('vl-functional-header').should('have.attr', 'data-vl-disable-back-link');
    });

    it('should NOT disable the back link when disableBackLink is false', () => {
        mountDefault({ disableBackLink: false });
        cy.get('vl-functional-header').should('not.have.attr', 'data-vl-disable-back-link');
    });
});
