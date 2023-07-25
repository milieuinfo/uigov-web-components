const formValidationUrl =
    'http://localhost:8080/iframe.html?globals=backgrounds.value:!hex(F8F8F8)&viewMode=story&id=elements-form--form-validation';

describe('story vl-form-validation - validation', () => {
    it('should still validate when name of input is changed externally', () => {
        cy.visit(`${formValidationUrl}`);

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                inputField.setAttribute('name', new Date().toString());
            });

        cy.get('[is="vl-form"]').find('[type="submit"]').click();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');

                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                    'contain.text',
                    'Geef een'
                );
            });
    });
});
