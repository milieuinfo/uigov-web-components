import { wcagLink } from './wcag-link.section';

const mountDefault = () => cy.mount(wcagLink());

describe('component wcag-link', () => {
    beforeEach(() => {
        mountDefault();
    });

    it('should mount', () => {
        cy.get('a[is="vl-link"]');
    });

    it('should render the correct href', () => {
        cy.get('a[is="vl-link"]').should('have.attr', 'href', 'https://www.w3.org/TR/WCAG21');
    });

    it('should render the correct text', () => {
        cy.get('a[is="vl-link"]').contains('Web Content Accessibility Guidelines versie 2.1 niveau AA');
    });

    it('should render the external icon', () => {
        cy.get('a[is="vl-link"]').find('span[is="vl-icon"][data-vl-icon="external"]');
    });
});
