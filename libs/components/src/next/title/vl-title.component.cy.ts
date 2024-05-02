import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTitleComponent } from './vl-title.component';

registerWebComponents([VlTitleComponent]);

describe('component - vl-title', () => {
    it('should mount', () => {
        cy.mount(html`<vl-title-next></vl-title-next>`);

        cy.get('vl-title-next').shadow().find('h1');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-title-next>Vlaanderen</vl-title-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-title-next');
    });

    it('should set different title type', () => {
        cy.mount(html`<vl-title-next type="h2"></vl-title-next>`);

        cy.get('vl-title-next').should('have.attr', 'type', 'h2');
        cy.get('vl-title-next').shadow().find('h2');
    });

    it('should set underline', () => {
        cy.mount(html`<vl-title-next underline></vl-title-next>`);

        cy.get('vl-title-next').should('have.attr', 'underline');
        cy.get('vl-title-next').shadow().find('h1').should('have.class', 'underline');
        cy.get('vl-title-next')
            .shadow()
            .find('h1')
            .shouldHaveComputedStyle({ style: 'border-bottom', value: '1px solid rgb(203, 210, 218)' });
    });

    it('should set alt', () => {
        cy.mount(html`<vl-title-next alt></vl-title-next>`);

        cy.get('vl-title-next').should('have.attr', 'alt');
        cy.get('vl-title-next').shadow().find('h1').should('have.class', 'alt');
    });

    it('should set no space bottom', () => {
        cy.mount(html`<vl-title-next no-space-bottom></vl-title-next>`);

        cy.get('vl-title-next').should('have.attr', 'no-space-bottom');
        cy.get('vl-title-next').shadow().find('h1').should('have.class', 'no-space-bottom');
    });

    it('should set content', () => {
        cy.mount(html`<vl-title-next>Vlaanderen</vl-title-next>`);

        cy.get('vl-title-next').shadow().find('h1').find('slot');
        cy.get('vl-title-next').contains('Vlaanderen');
    });
});
