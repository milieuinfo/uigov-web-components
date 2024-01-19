import { registerWebComponents } from '@domg-wc/common-utilities';
import { wcagLink, wcagLinkElements } from './wcag-link.section';

registerWebComponents(wcagLinkElements());

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

    it('should render with some basic styling from DV - h2 should have the correct style', () => {
        cy.get('a[is="vl-link"]').should('have.css', 'color', 'rgb(0, 85, 204)');
        cy.get('a[is="vl-link"]').should('not.have.css', 'color', 'red');
    });
});

describe('component wcag-link - helper function <wcagLinkElements()> ', () => {
    it('should return an array of WebComponents with a length of 2', () => {
        const elements = wcagLinkElements();
        expect(elements).to.be.an('array');
        expect(elements).to.have.length(2);
    });
});
