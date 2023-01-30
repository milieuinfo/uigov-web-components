const formLabelDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-form-message--form-label-default&viewMode=story';

describe('story vl-form-label', () => {
    it('should contain a title', () => {
        cy.visit(`${formLabelDefaultUrl}`);
        cy.getDataCy('form-label').should('have.class', 'vl-form__label').contains('foobar');
    });

    it('should contain a light label', () => {
        cy.visit(`${formLabelDefaultUrl}&args=light:true`);
        cy.getDataCy('form-label').should('have.class', 'vl-form__label--light');
    });

    it('should contain a block level label', () => {
        cy.visit(`${formLabelDefaultUrl}&args=block:true`);
        cy.getDataCy('form-label').should('have.class', 'vl-form__label--block');
    });
});
