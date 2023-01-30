const titleH4Url = 'http://localhost:8080/iframe.html?id=elements-title--title-h-4&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h4', () => {
        cy.visit(`${titleH4Url}`);
        cy.getDataCy('h4').should('have.class', 'vl-title').should('have.class', 'vl-title--h4');
    });

    it('should contain a h4 with a border', () => {
        cy.visit(`${titleH4Url}&args=border:true;sans:true`);
        cy.getDataCy('h4')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h4 with a sans style', () => {
        cy.visit(`${titleH4Url}&args=sans:true`);
        cy.getDataCy('h4').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h4 with an alternative border style ', () => {
        cy.visit(`${titleH4Url}&args=alt:true`);
        cy.getDataCy('h4').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h4 without whitespace at the bottom', () => {
        cy.visit(`${titleH4Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h4').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
