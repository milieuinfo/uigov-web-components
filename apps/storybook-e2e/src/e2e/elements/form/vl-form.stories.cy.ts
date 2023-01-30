describe('story vl-form', () => {
    beforeEach(() => cy.visit('http://localhost:8080/iframe.html?id=elements-form--form-default&viewMode=story'));

    it('should contain a form', () => {
        cy.getDataCy('form-default').should('have.class', 'vl-form');
    });
});
