describe('story vl-image', () => {
    beforeEach(() => cy.visit('http://localhost:8080/iframe.html?id=elements-image--image-default&viewMode=story'));

    it('should contain an image', () => {
        cy.getDataCy('image').should('have.class', 'vl-image');
    });
});
