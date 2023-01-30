const linkListUrl = 'http://localhost:8080/iframe.html?id=elements-link-list--link-list-default&viewMode=story';

describe('story vl-link-list', () => {
    it('should contain a link list', () => {
        cy.visit(`${linkListUrl}`);
        cy.getDataCy('link-list').should('have.class', 'vl-link-list');
    });

    it('should contain a small link list', () => {
        cy.visit(`${linkListUrl}&args=small:true`);
        cy.getDataCy('link-list').should('have.class', 'vl-link-list').should('have.class', 'vl-link-list--small');
    });

    it('should contain an inline link list', () => {
        cy.visit(`${linkListUrl}&args=inline:true`);
        cy.getDataCy('link-list').should('have.class', 'vl-link-list').should('have.class', 'vl-link-list--inline');
    });

    it('should contain a bordered link list', () => {
        cy.visit(`${linkListUrl}&args=bordered:true`);
        cy.getDataCy('link-list').should('have.class', 'vl-link-list').should('have.class', 'vl-link-list--bordered');
    });
});
