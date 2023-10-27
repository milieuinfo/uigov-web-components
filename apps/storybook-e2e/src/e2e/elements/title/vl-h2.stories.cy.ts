const titleH2Url = 'http://localhost:8080/iframe.html?id=elements-title-h2--title-h-2&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h2', () => {
        cy.visit(`${titleH2Url}`);
        cy.getDataCy('h2').should('have.class', 'vl-title').should('have.class', 'vl-title--h2');
    });

    it('should contain a h2 with a border', () => {
        cy.visit(`${titleH2Url}&args=border:true;sans:true`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h2 with a sans style', () => {
        cy.visit(`${titleH2Url}&args=sans:true`);
        cy.getDataCy('h2').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h2 with an alternative border style ', () => {
        cy.visit(`${titleH2Url}&args=alt:true`);
        cy.getDataCy('h2').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h2 without whitespace at the bottom', () => {
        cy.visit(`${titleH2Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h2').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
