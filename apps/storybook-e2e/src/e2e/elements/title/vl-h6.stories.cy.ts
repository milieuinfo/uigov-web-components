const titleH6Url = 'http://localhost:8080/iframe.html?id=elements-title-h6--title-h-6&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h6', () => {
        cy.visit(`${titleH6Url}`);
        cy.getDataCy('h6').should('have.class', 'vl-title').should('have.class', 'vl-title--h6');
    });

    it('should contain a h6 with a border', () => {
        cy.visit(`${titleH6Url}&args=border:true;sans:true`);
        cy.getDataCy('h6')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h6 with a sans style', () => {
        cy.visit(`${titleH6Url}&args=sans:true`);
        cy.getDataCy('h6').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h6 with an alternative border style ', () => {
        cy.visit(`${titleH6Url}&args=alt:true`);
        cy.getDataCy('h6').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h6 without whitespace at the bottom', () => {
        cy.visit(`${titleH6Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h6').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
