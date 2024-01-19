import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTabSectionComponent } from './vl-tab-section.component';

registerWebComponents([VlTabSectionComponent]);

const mountDefault = () => {
    return cy.mount(html`<section id="${1}-pane" is="vl-tab-section"></section>`);
};

describe('component vl-tab-section', () => {
    beforeEach(() => {
        mountDefault();
    });

    it('should mount', () => {
        cy.get('[data-cy-root]').within(() => {
            cy.get('section[is="vl-tab-section"]');
        });
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('section[is="vl-tab-section"]');
    });
});

describe('component vl-tab-section - classes', () => {
    it('should have class vl-col--1-1', () => {
        mountDefault();

        cy.get('section[is="vl-tab-section"]').should('have.class', 'vl-col--1-1');
    });

    it('should have class vl-tab__pane', () => {
        mountDefault();

        cy.get('section[is="vl-tab-section"]').should('have.class', 'vl-tab__pane');
    });
});

describe('component vl-tab-section - attributes', () => {
    beforeEach(() => {
        mountDefault();
    });

    it('should have attribute <data-vl-tab-pane>', () => {
        cy.get('section[is="vl-tab-section"]').should('have.attr', 'data-vl-tab-pane');
    });

    it('should have attribute <tabindex>', () => {
        cy.get('section[is="vl-tab-section"]').should('have.attr', 'tabindex', '0');
    });

    it('should have attribute <role>', () => {
        cy.get('section[is="vl-tab-section"]').should('have.attr', 'role', 'tabpanel');
    });

    it('should have attribute <hidden>', () => {
        cy.get('section[is="vl-tab-section"]').should('have.attr', 'hidden');
    });

    it('should have attribute <aria-labelledby>', () => {
        cy.get('section[is="vl-tab-section"]').should('have.attr', 'aria-labelledby');
    });
});
