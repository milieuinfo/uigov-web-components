describe('story vl-link', () => {
    it('should contain a link', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-link--link-default&viewMode=story');
        cy.getDataCy('link-default').should('have.class', 'vl-link').contains('Terug naar overzicht');
    });

    it('should contain a link with an error state', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=error:true;small:true&id=elements-link--link-default&viewMode=story'
        );
        cy.getDataCy('link-default').should('have.class', 'vl-link').should('have.class', 'vl-u-text--error');
    });

    it('should contain a small link', () => {
        cy.visit('http://localhost:8080/iframe.html?args=small:true&id=elements-link--link-default&viewMode=story');
        cy.getDataCy('link-default').should('have.class', 'vl-link--small');
    });

    it('should contain a large link', () => {
        cy.visit('http://localhost:8080/iframe.html?args=large:true&id=elements-link--link-default&viewMode=story');
        cy.getDataCy('link-default').should('have.class', 'vl-link--large');
    });

    it('should contain a bold link', () => {
        cy.visit('http://localhost:8080/iframe.html?args=bold:true&id=elements-link--link-default&viewMode=story');
        cy.getDataCy('link-default').should('have.class', 'vl-link--bold');
    });
});
