// import { parseFormData } from '@domg-wc/form/utils';
import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlFormCustomValidationComponent } from './vl-form-custom-validation.component';

registerWebComponents([VlFormCustomValidationComponent]);

describe('integration - form custom validation', () => {
    it('should render', () => {
        cy.mount(html`<vl-form-custom-validation></vl-form-custom-validation>`);

        cy.get('vl-form-custom-validation').shadow();
    });

    it('should validate', () => {
        cy.mount(html`<vl-form-custom-validation></vl-form-custom-validation>`);

        cy.get('vl-form-custom-validation').shadow().find('button[type="submit"]').click();
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-error-message-next[state="valueMissing"]')
            .should('have.attr', 'show', '');
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-input-field-with-foo-validator')
            .shadow()
            .find('input')
            .type('test');
        cy.get('vl-form-custom-validation').shadow().find('button[type="submit"]').click();
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-error-message-next[state="customError"]')
            .should('have.attr', 'show', '');
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-input-field-with-foo-validator')
            .shadow()
            .find('input')
            .clear()
            .type('foo');
        cy.get('vl-form-custom-validation').shadow().find('button[type="submit"]').click();
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-error-message-next[state="customError"]')
            .should('not.have.attr', 'show', '');
        cy.get('vl-form-custom-validation')
            .shadow()
            .find('vl-input-field-with-foo-validator')
            .should('have.attr', 'success', '');
    });
});
