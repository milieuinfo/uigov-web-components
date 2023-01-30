describe('story vl-input-group', () => {
    it('should contain an input group', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-input-group--input-group-default&viewMode=story');
        cy.getDataCy('input-group').should('have.class', 'vl-input-group');
    });

    it('should contain an input group with a button input addon to the right ', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?id=elements-input-group--input-group-with-input-addon-right&viewMode=story'
        );
        cy.getDataCy('input-group')
            .should('have.class', 'vl-input-group')
            .get('input')
            .next('button')
            .should('have.class', 'vl-input-addon');
    });

    it('should contain an input group with a icon button to the left', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?id=elements-input-group--input-group-with-button-left&viewMode=story'
        );
        cy.getDataCy('input-group')
            .should('have.class', 'vl-input-group')
            .get('button')
            .next('input')
            .should('have.class', 'vl-input-field');
    });
});
