import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common';
import { VlErrorMessageComponent } from './vl-error-message.component';

registerWebComponents([VlErrorMessageComponent]);

describe('component - vl-error-message-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-error-message-next>Test error message</vl-error-message-next>`);

        cy.get('vl-error-message-next');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-error-message-next>Test error message</vl-error-message-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-error-message-next');
    });

    it('should be hidden', () => {
        cy.mount(html`<vl-error-message-next>Test error message</vl-error-message-next>`);

        cy.get('vl-error-message-next').should('be.hidden');
        cy.get('vl-error-message-next').shadow().find('.vl-form__error').should('be.hidden');
    });

    it('should be visible', () => {
        cy.mount(html`<vl-error-message-next show>Test error message</vl-error-message-next>`);

        cy.get('vl-error-message-next').should('be.visible');
        cy.get('vl-error-message-next').shadow().find('.vl-form__error').should('be.visible');
    });

    it('should set for', () => {
        cy.mount(html`<vl-error-message-next for="test-input">Test error message</vl-error-message-next>`);

        cy.runTestFor<VlErrorMessageComponent>('vl-error-message-next', (component) => {
            // @ts-ignore: negeer aanspreken van private property
            expect(component.for).to.equal('test-input');
        });
    });

    it('should set state', () => {
        cy.mount(html`<vl-error-message-next state="missingValue">Test error message</vl-error-message-next>`);

        cy.runTestFor<VlErrorMessageComponent>('vl-error-message-next', (component) => {
            // @ts-ignore: negeer aanspreken van private property
            expect(component.state).to.equal('missingValue');
        });
    });

    it('should set content', () => {
        cy.mount(html`<vl-error-message-next>Test error message</vl-error-message-next>`);

        cy.get('vl-error-message-next').shadow().find('slot');
        cy.get('vl-error-message-next').should('have.text', 'Test error message');
    });
});
