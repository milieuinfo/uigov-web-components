describe('story vl-button-link', () => {
    it('should contain a link styled as a button', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-link-button-link--button-link-default&viewMode=story');
        cy.getDataCy('button-link-default').should('have.class', 'vl-link').contains('Terug naar overzicht');
    });

    it('should contain a button link with an error state', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=error:true&id=elements-link-button-link--button-link-default&viewMode=story'
        );
        cy.getDataCy('button-link-default').should('have.class', 'vl-link').should('have.class', 'vl-u-text--error');
    });

    it('should contain a small button link', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=small:true&id=elements-link-button-link--button-link-default&viewMode=story'
        );
        cy.getDataCy('button-link-default').should('have.class', 'vl-link--small');
    });

    it('should contain a large button-link', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=large:true&id=elements-link-button-link--button-link-default&viewMode=story'
        );
        cy.getDataCy('button-link-default').should('have.class', 'vl-link--large');
    });

    it('should contain a bold button-link', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=bold:true&id=elements-link-button-link--button-link-default&viewMode=story'
        );
        cy.getDataCy('button-link-default').should('have.class', 'vl-link--bold');
    });
});
