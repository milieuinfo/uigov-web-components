import { transformStringToArgument } from '../../../support/utils';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

const checkboxUrl = 'http://localhost:8080/iframe.html?id=components-checkbox--checkbox-default&viewMode=story';
const checkboxSwitchUrl = 'http://localhost:8080/iframe.html?id=components-checkbox--checkbox-switch&viewMode=story';
const checkboxFormUrl = 'http://localhost:8080/iframe.html?id=components-checkbox--checkbox-form&viewMode=story';

describe('story vl-checkbox default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(checkboxUrl);

        cy.checkA11y('vl-checkbox');
        cy.get('vl-checkbox').shadow().find('.vl-checkbox__toggle').click({ force: true });
        cy.checkA11y('vl-checkbox');
    });

    it('should contain a label', () => {
        cy.visit(checkboxUrl);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox__label').find('span').contains('Optie 1');
    });

    it('should contain a block level checkbox', () => {
        cy.visit(`${checkboxUrl}&args=block:true`);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox').should('have.class', 'vl-checkbox--block');
    });

    it('should contain a disabled checkbox', () => {
        cy.visit(`${checkboxUrl}&args=disabled:true`);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox')
            .should('have.class', 'vl-checkbox--disabled')
            .find('input')
            .should('have.attr', 'disabled');
    });

    it('should contain a checkbox with an error state', () => {
        cy.visit(`${checkboxUrl}&args=error:true`);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox').should('have.class', 'vl-checkbox--error');
    });

    it('should contain a checkbox without a label', () => {
        cy.visit(`${checkboxUrl}&args=single:true`);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox')
            .should('have.class', 'vl-checkbox--single')
            .find('.vl-checkbox__label span')
            .should('have.class', 'vl-u-visually-hidden');
    });
});

describe('story vl-checkbox switch', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(checkboxSwitchUrl);

        cy.checkA11y('vl-checkbox');
        cy.get('vl-checkbox').shadow().find('.vl-checkbox--switch').click({ force: true });
        cy.checkA11y('vl-checkbox');
    });

    it('should contain a switch with label', () => {
        cy.visit(checkboxSwitchUrl);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox--switch__wrapper')
            .find('.vl-checkbox__label span')
            .should('have.class', 'vl-checkbox--switch__label')
            .contains('Instellingen blokkeren');
    });
});

const shouldHaveHiddenErrorMessage = (errorMessage: string) => {
    cy.get('form[is="vl-form"]')
        .find('p[is="vl-form-validation-message"]')
        .should('contain', errorMessage)
        .and('have.attr', 'hidden');
};

const shouldHaveShownErrorMessage = (errorMessage: string) => {
    cy.get('form[is="vl-form"]')
        .find('p[is="vl-form-validation-message"]')
        .should('contain', errorMessage)
        .and('not.have.attr', 'hidden');
};

describe('story vl-checkbox form', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(checkboxFormUrl);
    });

    it('should contain a label', () => {
        const label = 'Aanvinken voor akkoord en gelezen';
        cy.visitWithA11y(checkboxFormUrl.concat(`&args=label:${transformStringToArgument(label)}`));

        cy.get('vl-checkbox').shadow().find('.vl-checkbox__label').find('span').contains(label);
    });

    it('should show an error when the required form validation is triggered', () => {
        const errorMessage = 'U moet akkoord gaat met het bovenstaande om verder te kunnen gaan';
        cy.visit(checkboxFormUrl.concat(`&args=errorMessage:${transformStringToArgument(errorMessage)}`));

        shouldHaveHiddenErrorMessage(errorMessage);
        cy.get('vl-checkbox').should('not.have.attr', 'data-vl-error');

        cy.get('form[is="vl-form"]').find('button#validate-button').click({ force: true });
        cy.get('vl-checkbox').should('have.attr', 'data-vl-error');
        shouldHaveShownErrorMessage(errorMessage);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox__toggle').click({ force: true });
        shouldHaveHiddenErrorMessage(errorMessage);
        cy.get('vl-checkbox').should('not.have.attr', 'data-vl-error');
    });

    it('should not show an error when the required form validation is triggered', () => {
        const errorMessage = 'U moet akkoord gaat met het bovenstaande om verder te kunnen gaan';
        cy.visit(checkboxFormUrl.concat(`&args=required:false`));

        shouldHaveHiddenErrorMessage(errorMessage);
        cy.get('vl-checkbox').should('not.have.attr', 'data-vl-error');

        cy.get('form[is="vl-form"]').find('button#validate-button').click({ force: true });
        cy.get('vl-checkbox').should('not.have.attr', 'data-vl-error');
        shouldHaveHiddenErrorMessage(errorMessage);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox__toggle').click({ force: true });
        shouldHaveHiddenErrorMessage(errorMessage);
        cy.get('vl-checkbox').should('not.have.attr', 'data-vl-error');
    });
});
