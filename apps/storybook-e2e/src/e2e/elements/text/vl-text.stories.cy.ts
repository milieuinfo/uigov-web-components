describe('story vl-text', () => {
    it('should contain a text', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-text--text-default&viewMode=story');
        cy.getDataCy('text-default').contains('Text');
    });

    it('should contain a visually hidden text', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?id=elements-text--text-default&viewMode=story&args=hidden:true;content:Text%20is%20visually%20hidden'
        );
        cy.getDataCy('text-default').should('have.class', 'vl-u-visually-hidden').contains('Text is visually hidden');
    });
});
