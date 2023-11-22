import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTextareaComponent } from './vl-textarea.component';

registerWebComponents([VlTextareaComponent]);

describe('component vl-textarea-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-textarea-next label="textarea-label"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-textarea-next label="test-label"></vl-textarea-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-textarea-next');
    });

    it('should set id', () => {
        cy.mount(html`<vl-textarea-next id="test-id"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.id', 'test-id');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-textarea-next name="test-name"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'name', 'test-name');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'name', 'test-name');
    });

    it('should set label', () => {
        cy.mount(html`<vl-textarea-next label="test-label"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'label', 'test-label');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'aria-label', 'test-label');
    });

    it('should set block', () => {
        cy.mount(html`<vl-textarea-next block></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'block');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--block');
    });

    it('should set required', () => {
        cy.mount(html`<vl-textarea-next required></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'required');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'required');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-textarea-next disabled></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'disabled');
        cy.get('vl-textarea-next').should('be.disabled');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--disabled');
        cy.get('vl-textarea-next').shadow().find('textarea').should('be.disabled');
    });

    it('should set error', () => {
        cy.mount(html`<vl-textarea-next error></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'error');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--error');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'error');
    });

    it('should set success', () => {
        cy.mount(html`<vl-textarea-next success></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'success');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--success');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-textarea-next readonly></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'readonly');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'readonly');
    });

    it('should set value', () => {
        cy.mount(html`<vl-textarea-next value="Test value"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.value', 'Test value');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.value', 'Test value');
    });

    it('should set min length', () => {
        cy.mount(html`<vl-textarea-next min-length="1"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'min-length', 1);
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'minlength', 1);
    });

    it('should set max length', () => {
        cy.mount(html`<vl-textarea-next max-length="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'max-length', 10);
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'maxlength', 10);
    });

    it('should set rows', () => {
        cy.mount(html`<vl-textarea-next rows="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'rows', 10);
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'rows', 10);
    });

    it('should set cols', () => {
        cy.mount(html`<vl-textarea-next cols="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('have.attr', 'cols', 10);
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'cols', 10);
    });
});
