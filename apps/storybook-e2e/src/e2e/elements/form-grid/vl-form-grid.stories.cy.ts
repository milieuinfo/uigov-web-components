describe('story vl-form-grid', () => {
    beforeEach(() =>
        cy.visit('http://localhost:8080/iframe.html?id=elements-form-grid-form-grid--form-grid-default&viewMode=story')
    );

    it('should contain a form', () => {
        cy.getDataCy('form').should('have.class', 'vl-form');
    });

    it('should contain a form with a stacked form-grid in it', () => {
        cy.getDataCy('form').getDataCy('form-grid').should('have.class', 'vl-form-grid--is-stacked');
    });
});
