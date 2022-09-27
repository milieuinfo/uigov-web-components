const infotextUrl = 'http://localhost:8080/iframe.html?id=elements-infotext--infotext-default&viewMode=story';

describe('story vl-infotext', () => {
    it('should contain an infotext', () => {
        cy.visit(`${infotextUrl}`);
        cy.getDataCy('infotext').find('>div');
        // .should('have.class', 'vl-infotext')
    });

    it('should contain an infotext with badge styling', () => {
        cy.visit(`${infotextUrl}&args=badge:true`);
        cy.getDataCy('infotext')
            .find('>div')
            .should('have.class', 'vl-infotext')
            .should('have.class', 'vl-infotext--badge');
    });

    it('should contain an infotext with link', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-infotext--infotext-with-link&viewMode=story');
        cy.getDataCy('infotext-link').find('>a');
        // .should('have.class', 'vl-infotext')
    });

    it('should contain an infotext with link with badge styling', () => {
        cy.visit(`http://localhost:8080/iframe.html?id=elements-infotext--infotext-with-link&args=badge:true`);
        cy.getDataCy('infotext-link')
            .find('>a')
            .should('have.class', 'vl-infotext')
            .should('have.class', 'vl-infotext--badge');
    });
});
