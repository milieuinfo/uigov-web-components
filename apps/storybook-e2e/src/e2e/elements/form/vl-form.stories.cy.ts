const formDefaultUrl = 'http://localhost:8080/iframe.html?id=elements-form--form-default&viewMode=story';
describe('story vl-form', () => {
    it('should contain a form', () => {
        cy.visit(formDefaultUrl);
        cy.get('[is="vl-form"]').should('have.class', 'vl-form');
    });

    it('should be accessible', () => {
        cy.visitWithA11y(formDefaultUrl);
        cy.get('[is="vl-form"]');
        cy.checkA11y('[is="vl-form"]');
    });
});
