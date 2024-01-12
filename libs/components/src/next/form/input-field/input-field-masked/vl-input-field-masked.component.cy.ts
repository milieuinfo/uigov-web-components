import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldMaskedComponent } from './vl-input-field-masked.component';
import { maskOptions } from './masks';

registerWebComponents([VlInputFieldMaskedComponent]);

describe('component vl-input-field-masked-next', () => {
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
        cy.mount(html`<vl-input-field-masked-next label="test-label" mask="phone"></vl-input-field-masked-next>`);
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'phone');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', maskOptions.phone.prefix);
        cy.get('vl-input-field-masked-next').shadow().find('input').type('12345678');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '+32 12 34 56 78');
        cy.get('vl-input-field-masked-next').shadow().find('input').type('092834');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '+32 12 34 56 78');
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should set mask prefix', () => {
        cy.mount(
            html`<vl-input-field-masked-next
                label="test-label"
                mask="rrn"
                mask-prefix="26."
            ></vl-input-field-masked-next>`
        );
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'rrn');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '26.');
        cy.checkA11y('vl-input-field-masked-next');
    });

    it('should override mask prefix', () => {
        cy.mount(
            html`<vl-input-field-masked-next
                label="test-label"
                mask="phone"
                mask-prefix="+31"
            ></vl-input-field-masked-next>`
        );
        cy.injectAxe();

        cy.get('vl-input-field-masked-next').should('have.attr', 'mask', 'phone');
        cy.get('vl-input-field-masked-next').shadow().find('input').should('have.value', '+31');
        cy.checkA11y('vl-input-field-masked-next');
    });
});
