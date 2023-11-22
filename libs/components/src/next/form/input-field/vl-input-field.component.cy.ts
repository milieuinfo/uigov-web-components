import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldComponent } from './vl-input-field.component';

registerWebComponents([VlInputFieldComponent]);

describe('component vl-input-field-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-input-field-next label="test-label"></vl-input-field-next>`);

        cy.get('vl-input-field-next').shadow().find('input');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-input-field-next label="test-label"></vl-input-field-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-input-field-next');
    });

    it('should set id', () => {
        cy.mount(html`<vl-input-field-next id="test-id"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.id', 'test-id');
        cy.get('vl-input-field-next').shadow().find('input').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-input-field-next name="test-name"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'name', 'test-name');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'name', 'test-name');
    });

    it('should set label', () => {
        cy.mount(html`<vl-input-field-next label="test-label"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'label', 'test-label');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'aria-label', 'test-label');
    });

    it('should set block', () => {
        cy.mount(html`<vl-input-field-next block></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'block');
        cy.get('vl-input-field-next').shadow().find('input').should('have.class', 'vl-input-field--block');
    });

    it('should set required', () => {
        cy.mount(html`<vl-input-field-next required></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'required');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'required');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-input-field-next disabled></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'disabled');
        cy.get('vl-input-field-next').should('be.disabled');
        cy.get('vl-input-field-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');
        cy.get('vl-input-field-next').shadow().find('input').should('be.disabled');
    });

    it('should set error', () => {
        cy.mount(html`<vl-input-field-next error></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'error');
        cy.get('vl-input-field-next').shadow().find('input').should('have.class', 'vl-input-field--error');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'error');
    });

    it('should set success', () => {
        cy.mount(html`<vl-input-field-next success></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'success');
        cy.get('vl-input-field-next').shadow().find('input').should('have.class', 'vl-input-field--success');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-input-field-next readonly></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'readonly');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'readonly');
    });

    it('should set value', () => {
        cy.mount(html`<vl-input-field-next value="Test value"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.value', 'Test value');
        cy.get('vl-input-field-next').shadow().find('input').should('have.value', 'Test value');
    });

    it('should set type', () => {
        cy.mount(html`<vl-input-field-next type="number" value="1"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.value', 1);
        cy.get('vl-input-field-next').shadow().find('input').should('have.value', 1);
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'type', 'number');
    });

    it('should set min length', () => {
        cy.mount(html`<vl-input-field-next min-length="1"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'min-length', 1);
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'minlength', 1);
    });

    it('should set max length', () => {
        cy.mount(html`<vl-input-field-next max-length="10"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'max-length', 10);
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'maxlength', 10);
    });

    it('should set min', () => {
        cy.mount(html`<vl-input-field-next min="1"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'min', 1);
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'min', 1);
    });

    it('should set max', () => {
        cy.mount(html`<vl-input-field-next max="10"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'max', 10);
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'max', 10);
    });

    it('should set pattern', () => {
        cy.mount(html`<vl-input-field-next pattern="Van(.*)"></vl-input-field-next>`);

        cy.get('vl-input-field-next').should('have.attr', 'pattern', 'Van(.*)');
        cy.get('vl-input-field-next').shadow().find('input').should('have.attr', 'pattern', 'Van(.*)');
    });
});
