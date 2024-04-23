describe('story - vl-text', () => {
    it('should render', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-text--text-default&viewMode=story');
        cy.get('span[is="vl-text"]').contains('Tekst');
    });
});
