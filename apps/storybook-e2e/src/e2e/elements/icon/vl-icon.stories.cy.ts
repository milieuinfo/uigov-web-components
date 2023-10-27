describe('story vl-icon', () => {
    it('should contain an icon', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-icon-icon--icon-default&viewMode=story');
        cy.getDataCy('icon-default');
    });

    it("should contain an light calendar icon that's upside down", () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=light:true;fullRotate:true&id=elements-icon-icon--icon-default&viewMode=story'
        );
        cy.getDataCy('icon-default')
            .should('have.class', 'vl-icon')
            .should('have.class', 'vl-icon--light')
            .should('have.class', 'vl-vi-calendar')
            .should('have.class', 'vl-vi-u-180deg');
    });

    it("should contain an icon that's rotated 90 degrees", () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=rotate:true&id=elements-icon-icon--icon-default&viewMode=story'
        );
        cy.getDataCy('icon-default').should('have.class', 'vl-vi-u-90deg');
    });

    it('should contain a small icon', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=size:small&id=elements-icon-icon--icon-default&viewMode=story'
        );
        cy.getDataCy('icon-default').should('have.class', 'vl-icon--small');
    });

    it('should contain a large icon', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?args=size:large&id=elements-icon-icon--icon-default&viewMode=story'
        );
        cy.getDataCy('icon-default').should('have.class', 'vl-icon--large');
    });

    it('should contain an icon before an element with text', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-icon-icon--icon-before&viewMode=story');
        cy.getDataCy('icon-before-element').next('span').contains('Lorem ipsum dolor sit amet');
    });

    it('should contain an icon before an element', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-icon-icon--icon-after&viewMode=story');
        cy.getDataCy('icon-after-element').prev('span').contains('Lorem ipsum dolor sit amet');
    });
});
