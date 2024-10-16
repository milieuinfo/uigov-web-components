import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTextareaComponent } from './vl-textarea.component';

registerWebComponents([VlTextareaComponent]);

describe('component - vl-textarea-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-textarea-next></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-textarea-next label="test-label"></vl-textarea-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-textarea-next');
    });

    it('should set id', () => {
        cy.mount(html`<vl-textarea-next id="test-id"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-textarea-next name="test-name"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'name', 'test-name');
    });

    it('should set label', () => {
        cy.mount(html`<vl-textarea-next label="test-label"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'aria-label', 'test-label');
    });

    it('should set block', () => {
        cy.mount(html`<vl-textarea-next block></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--block');
    });

    it('should set required', () => {
        cy.mount(html`<vl-textarea-next required></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'required');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-textarea-next disabled></vl-textarea-next>`);

        cy.get('vl-textarea-next').should('be.disabled');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--disabled');
        cy.get('vl-textarea-next').shadow().find('textarea').should('be.disabled');
    });

    it('should set error', () => {
        cy.mount(html`<vl-textarea-next error></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--error');
        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'error');
    });

    it('should set success', () => {
        cy.mount(html`<vl-textarea-next success></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.class', 'vl-textarea--success');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-textarea-next readonly></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'readonly');
    });

    it('should set value', () => {
        cy.mount(html`<vl-textarea-next value="Test value"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.value', 'Test value');
    });

    it('should set min length', () => {
        cy.mount(html`<vl-textarea-next min-length="1"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'minlength', 1);
    });

    it('should set max length', () => {
        cy.mount(html`<vl-textarea-next max-length="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'maxlength', 10);
    });

    it('should set rows', () => {
        cy.mount(html`<vl-textarea-next rows="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'rows', 10);
    });

    it('should set cols', () => {
        cy.mount(html`<vl-textarea-next cols="10"></vl-textarea-next>`);

        cy.get('vl-textarea-next').shadow().find('textarea').should('have.attr', 'cols', 10);
    });

    it('should dispatch both vl-input & vl-change events on input', () => {
        cy.mount(html`<vl-textarea-next></vl-textarea-next>`);
        cy.createStubForEvent('vl-textarea-next', 'vl-input');
        cy.createStubForEvent('vl-textarea-next', 'vl-change');

        cy.get('vl-textarea-next').shadow().find('textarea').type('test');
        cy.get('@vl-input').its('callCount').should('eq', 4);
        cy.get('@vl-input').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
        // change event wordt ook gedispatched bij focus verandering, daarom 1 extra
        cy.get('@vl-change').its('callCount').should('eq', 5);
        cy.get('@vl-change').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
    });

    it('should dispatch vl-change event on programmatic value change but no vl-input events', () => {
        cy.mount(html`<vl-textarea-next></vl-textarea-next>`);
        cy.createStubForEvent('vl-textarea-next', 'vl-change');
        cy.createStubForEvent('vl-textarea-next', 'vl-input');

        cy.get('vl-textarea-next').invoke('attr', 'value', 'test');
        cy.get('@vl-change').its('callCount').should('eq', 1);
        cy.get('@vl-change').its('lastCall.args.0.detail').should('deep.equal', { value: 'test' });
        cy.get('@vl-input').its('callCount').should('eq', 0);
    });

    it('should dispatch vl-valid event on valid input', () => {
        cy.mount(html`<vl-textarea-next required min-length="4"></vl-textarea-next>`);

        cy.createStubForEvent('vl-textarea-next', 'vl-valid');
        cy.get('vl-textarea-next').shadow().find('textarea').type('test');
        cy.get('@vl-valid').should('have.been.calledOnce');
        cy.get('@vl-valid').its('firstCall.args.0.detail').should('deep.equal', { value: 'test' });
    });
});
