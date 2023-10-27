const titleH1Url = 'http://localhost:8080/iframe.html?id=elements-title-h1--title-h-1&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h1', () => {
        cy.visit(`${titleH1Url}`);
        cy.getDataCy('h1').should('have.class', 'vl-title').should('have.class', 'vl-title--h1');
    });

    it('should contain a h1 with a border', () => {
        cy.visit(`${titleH1Url}&args=border:true;sans:true`);
        cy.getDataCy('h1')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h1 with a sans style', () => {
        cy.visit(`${titleH1Url}&args=sans:true`);
        cy.getDataCy('h1').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h1 with an alternative border style ', () => {
        cy.visit(`${titleH1Url}&args=alt:true`);
        cy.getDataCy('h1').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h1 without whitespace at the bottom', () => {
        cy.visit(`${titleH1Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h1').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
