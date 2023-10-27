const formGroupUrl = 'http://localhost:8080/iframe.html?id=elements-form--form-group&viewMode=story';
describe('story vl-form-group', () => {
    it('should contain form with a form group in it', () => {
        cy.visit(formGroupUrl);
        cy.get('[is="vl-form-group"]').should('have.class', 'vl-form__group');
    });

    it('should be accessible', () => {
        cy.visitWithA11y(`${formGroupUrl}`);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });
});
