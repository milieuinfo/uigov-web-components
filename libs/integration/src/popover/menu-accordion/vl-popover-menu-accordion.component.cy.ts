// import { parseFormData } from '@domg-wc/form/utils';
import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common';
import { VlPopoverMenuAccordionComponent } from './vl-popover-menu-accordion.component';

registerWebComponents([VlPopoverMenuAccordionComponent]);

describe('integration - popover menu accordion', () => {
    it('should render', () => {
        cy.mount(html`<vl-popover-menu-accordion></vl-popover-menu-accordion>`);

        cy.get('vl-popover-menu-accordion').find('vl-accordion').shadow();
    });

    it('should open and close menus', () => {
        cy.mount(html`<vl-popover-menu-accordion></vl-popover-menu-accordion>`);

        cy.get('vl-popover-menu-accordion').find('a#btn-acties1').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties1"]').should('be.visible');
        cy.get('vl-popover-menu-accordion').find('a#btn-acties1').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties1"]').should('not.be.visible');
        cy.get('vl-popover-menu-accordion').find('a#btn-acties1').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties1"]').should('be.visible');
        cy.get('body').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties1"]').should('not.be.visible');

        cy.get('vl-popover-menu-accordion').find('a#btn-acties2').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties2"]').should('be.visible');
        cy.get('vl-popover-menu-accordion').find('a#btn-acties2').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties2"]').should('not.be.visible');
        cy.get('vl-popover-menu-accordion').find('a#btn-acties2').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties2"]').should('be.visible');
        cy.get('body').click();
        cy.get('vl-popover-menu-accordion').find('vl-popover[for="btn-acties2"]').should('not.be.visible');
    });

    it('should open and close accordions', () => {
        cy.mount(html`<vl-popover-menu-accordion></vl-popover-menu-accordion>`);

        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="Stedelijk woongebied"]')
            .shadow()
            .find('button.vl-toggle')
            .click();
        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="Stedelijk woongebied"]')
            .shadow()
            .find('div.vl-accordion')
            .should('have.class', 'js-vl-accordion--open');

        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="$1.1"]')
            .shadow()
            .find('button.vl-toggle')
            .click();
        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="$1.1"]')
            .shadow()
            .find('div.vl-accordion')
            .should('have.class', 'js-vl-accordion--open');
        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="$1.1"]')
            .shadow()
            .find('button.vl-toggle')
            .click();
        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="$1.1"]')
            .shadow()
            .find('div.vl-accordion')
            .should('not.have.class', 'js-vl-accordion--open');

        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="Stedelijk woongebied"]')
            .shadow()
            .find('button.vl-toggle')
            .click();
        cy.get('vl-popover-menu-accordion')
            .find('vl-accordion[data-vl-toggle-text="Stedelijk woongebied"]')
            .shadow()
            .find('div.vl-accordion')
            .should('not.have.class', 'js-vl-accordion--open');
    });
});
