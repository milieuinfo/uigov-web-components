describe('story vl-button-input-addon', () => {
    beforeEach(() =>
        cy.visit(
            'http://localhost:8080/iframe.html?args=&id=elements-input-addon--button-input-addon-default&viewMode=story'
        )
    );

    it('should contain a button input addon element', () => {
        cy.getDataCy('button-input-addon').should('have.class', 'vl-input-addon');
    });
});
