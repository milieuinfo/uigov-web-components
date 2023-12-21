const formValidationDefaultUrl =
    'http://localhost:8080/iframe.html?globals=backgrounds.value:!hex(F8F8F8)&viewMode=story&id=elements-form--form-validation';
const formValidationOptionalUrl =
    'http://localhost:8080/iframe.html?globals=backgrounds.value:!hex(F8F8F8)&id=elements-form--form-validation-optional&viewMode=story';
const formValidationEscapeFieldNamesUrl =
    'http://localhost:8080/iframe.html?globals=backgrounds.value:!hex(F8F8F8)&viewMode=story&id=elements-form--form-validation-escape-field-names';
const formValidationWithoutSubmitUrl =
    'http://localhost:8080/iframe.html?globals=backgrounds.value:!hex(F8F8F8)&viewMode=story&id=elements-form--form-validation-without-submit';

describe('story vl-form - validation', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(formValidationDefaultUrl);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });

    it('should by default, not have native HTML validation', () => {
        cy.visit(formValidationDefaultUrl);
        cy.get('[is="vl-form"]').should('have.attr', 'novalidate');
    });

    it('should have native HTML validation', () => {
        cy.visit(`${formValidationDefaultUrl}&args=nativeValidation:true`);
        cy.get('[is="vl-form"]').should('not.have.attr', 'novalidate');
    });
});

describe('story vl-form - validation optional', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(formValidationOptionalUrl);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });

    it('should have an error placeholder for every input-field', () => {
        cy.visit(formValidationOptionalUrl);
        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`);
            });
    });

    it('should only validate required inputs', () => {
        cy.visit(formValidationOptionalUrl);

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                    'have.attr',
                    'hidden'
                );
            });

        cy.get('[is="vl-form"]').submit();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'not.have.attr',
                        'hidden'
                    );
                }
            });
    });
});

describe('story vl-form - validation escape field names', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(formValidationEscapeFieldNamesUrl);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });

    it('should have an error placeholder for every input-field', () => {
        cy.visit(formValidationEscapeFieldNamesUrl);
        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`);
            });
    });

    it('should validate inputs', () => {
        cy.visit(formValidationEscapeFieldNamesUrl);

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                    'have.attr',
                    'hidden'
                );
            });

        cy.get('[is="vl-form"]').submit();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'not.have.attr',
                        'hidden'
                    );
                }
            });

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                cy.wrap(inputFieldResult).type('test');
            });

        cy.get('[is="vl-form"]').submit();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'have.attr',
                        'hidden'
                    );
                }
            });
    });
});

describe('story vl-form - validation without submit', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(formValidationWithoutSubmitUrl);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });

    it('should have an error placeholder for every input-field', () => {
        cy.visit(formValidationWithoutSubmitUrl);
        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`);
            });
    });

    it('should validate inputs', () => {
        cy.visit(formValidationWithoutSubmitUrl);

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                    'have.attr',
                    'hidden'
                );
            });

        cy.get('[is="vl-form"]').submit();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'not.have.attr',
                        'hidden'
                    );
                }
            });

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                cy.wrap(inputFieldResult).type('test');
            });

        cy.get('[is="vl-form"]').find('button#validate-without-submit').click();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'have.attr',
                        'hidden'
                    );
                }
            });
    });

    it('should show error messages for invalid inputs', () => {
        cy.visit(formValidationWithoutSubmitUrl);

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                    'have.attr',
                    'hidden'
                );
            });

        cy.get('[is="vl-form"]').submit();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'not.have.attr',
                        'hidden'
                    );
                }
            });

        cy.get('[is="vl-form"]').find('button#validate-without-submit').click();

        cy.get('[is="vl-form"]')
            .find('[is="vl-input-field"]')
            .each((inputFieldResult) => {
                const inputField = inputFieldResult[0];
                const errorPlaceholderId = inputField.getAttribute('data-vl-error-placeholder');
                const isRequired = inputField.hasAttribute('data-vl-required');
                if (isRequired) {
                    cy.get(`[is="vl-form-validation-message"][data-vl-error-id="${errorPlaceholderId}"]`).should(
                        'not.have.attr',
                        'hidden'
                    );
                }
            });
    });
});
