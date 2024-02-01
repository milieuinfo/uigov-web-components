import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldMaskedComponent } from './vl-input-field-masked.component';

registerWebComponents([VlInputFieldMaskedComponent]);

describe('component - vl-input-field-masked-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label"></vl-input-field-masked-next>`);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });

    it('should be accessible', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label"></vl-input-field-masked-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should set mask', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label" mask="rrn"></vl-input-field-masked-next>`);
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'rrn');
        cy.get('vl-input-field-masked-next').shadow().find('input').type('12345678912');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '12.34.56-789.12');
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should set mask prefix', () => {
        cy.mount(
            html`<vl-input-field-masked-next
                label="test-label"
                mask="rrn"
                mask-prefix="26"
            ></vl-input-field-masked-next>`
        );
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'rrn');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '26.');
        cy.get('vl-input-field-masked-next').shadow().find('input').type('345678912');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '26.34.56-789.12');
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should override mask prefix', () => {
        cy.mount(
            html`<vl-input-field-masked-next
                label="test-label"
                mask="price"
                mask-prefix="$"
            ></vl-input-field-masked-next>`
        );
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'price');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '$');
        cy.get('vl-input-field-masked-next').shadow().find('input').type('9000');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '$9.000');
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should get raw value', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label" mask="rrn"></vl-input-field-masked-next>`);
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'rrn');
        cy.get('vl-input-field-masked-next').shadow().find('input').type('12345678912');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '12.34.56-789.12');
        cy.runTestFor<VlInputFieldMaskedComponent>('vl-input-field-masked-next', (component) => {
            expect(component.getRawValue()).to.equal('12345678912');
        });
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should dispatch vl-input event on input', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label" mask="phone"></vl-input-field-masked-next>`);
        cy.injectAxe();
        cy.createStubForEvent('vl-input-field-masked-next', 'vl-input');

        cy.get('vl-input-field-masked-next').shadow().find('input').type('12345678');
        cy.get('@vl-input').its('callCount').should('eq', 8);
        cy.get('@vl-input').its('lastCall.args.0.detail').should('deep.equal', { value: '+32 12 34 56 78' });
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should dispatch vl-valid event on valid input', () => {
        cy.mount(html`<vl-input-field-masked-next label="test-label" mask="phone"></vl-input-field-masked-next>`);
        cy.injectAxe();
        cy.createStubForEvent('vl-input-field-masked-next', 'vl-valid');

        cy.get('vl-input-field-masked-next').shadow().find('input').type('12345678');
        cy.get('@vl-valid').should('have.been.calledOnce');
        cy.get('@vl-valid').its('firstCall.args.0.detail').should('deep.equal', { value: '+32 12 34 56 78' });
        cy.checkA11y('vl-input-field-masked-next');
    });
});
