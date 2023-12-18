import { header } from './header.section';
import { AccessibilityProperties } from '../vl-accessibility.model';

// [TODO]: Creert props zoals complianceStatusProps om te zien of dat het probleem is in dat component
const mountDefault = (props: Pick<AccessibilityProperties, 'disableBackLink'>) => cy.mount(header(props));

describe('component header', () => {
    const props: Pick<AccessibilityProperties, 'disableBackLink'> = {
        disableBackLink: false,
    };

    beforeEach(() => {
        mountDefault(props);
    });

    it('should mount', () => {
        cy.get('vl-functional-header');
    });

    it('should render the correct title', () => {
        cy.get('vl-functional-header').should('have.attr', 'data-vl-title', 'Departement Omgeving');
    });

    it('should render the correct sub-title', () => {
        cy.get('vl-functional-header').should(
            'have.attr',
            'data-vl-sub-title',
            'Toegankelijkheid en gebruiksvoorwaarden'
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
    const props: Pick<AccessibilityProperties, 'disableBackLink'> = {
        disableBackLink: true,
    };

    beforeEach(() => {
        mountDefault(props);
    });

    it('should disable the back link when disableBackLink is true', () => {
        cy.get('vl-functional-header').should('have.attr', 'data-vl-disable-back-link');
    });
});
