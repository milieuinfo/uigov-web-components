import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlLinkComponent } from './vl-link.component';

registerWebComponents([VlLinkComponent]);

describe('component - vl-link-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-link-next></vl-link-next>`);

        cy.get('vl-link-next').shadow().find('a');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-link-next href="https://www.vlaanderen.be">Vlaanderen</vl-link-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-link-next');
    });

    it('should set href', () => {
        cy.mount(html`<vl-link-next href="https://www.vlaanderen.be"></vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'href', 'https://www.vlaanderen.be');
        cy.get('vl-link-next').shadow().find('a').should('have.attr', 'href', 'https://www.vlaanderen.be');
    });

    it('should set bold', () => {
        cy.mount(html`<vl-link-next bold>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'bold');
        cy.get('vl-link-next').shadow().find('a').should('have.class', 'bold');
    });

    it('should set small', () => {
        cy.mount(html`<vl-link-next small>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'small');
        cy.get('vl-link-next').shadow().find('a').should('have.class', 'small');
    });

    it('should set large', () => {
        cy.mount(html`<vl-link-next large>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'large');
        cy.get('vl-link-next').shadow().find('a').should('have.class', 'large');
    });

    it('should set error', () => {
        cy.mount(html`<vl-link-next error>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'error');
        cy.get('vl-link-next').shadow().find('a').should('have.class', 'error');
    });

    it('should set external', () => {
        cy.mount(html`<vl-link-next external>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').should('have.attr', 'external');
        cy.get('vl-link-next').shadow().find('a').should('have.attr', 'target', '_blank');
    });

    it('should set content', () => {
        cy.mount(html`<vl-link-next>Vlaanderen</vl-link-next>`);

        cy.get('vl-link-next').shadow().find('a').find('slot');
        cy.get('vl-link-next').contains('Vlaanderen');
    });
});
