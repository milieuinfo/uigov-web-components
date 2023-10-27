const titleH3Url = 'http://localhost:8080/iframe.html?id=elements-title-h3--title-h-3&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h3', () => {
        cy.visit(`${titleH3Url}`);
        cy.getDataCy('h3').should('have.class', 'vl-title').should('have.class', 'vl-title--h3');
    });

    it('should contain a h3 with a border', () => {
        cy.visit(`${titleH3Url}&args=border:true;sans:true`);
        cy.getDataCy('h3')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h3 with a sans style', () => {
        cy.visit(`${titleH3Url}&args=sans:true`);
        cy.getDataCy('h3').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h3 with an alternative border style ', () => {
        cy.visit(`${titleH3Url}&args=alt:true`);
        cy.getDataCy('h3').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h3 without whitespace at the bottom', () => {
        cy.visit(`${titleH3Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h3').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
