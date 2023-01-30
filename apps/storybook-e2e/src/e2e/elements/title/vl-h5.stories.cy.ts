const titleH5Url = 'http://localhost:8080/iframe.html?id=elements-title--title-h-5&viewMode=story';

describe('story vl-titles', () => {
    it('should contain a h5', () => {
        cy.visit(`${titleH5Url}`);
        cy.getDataCy('h5').should('have.class', 'vl-title').should('have.class', 'vl-title--h5');
    });

    it('should contain a h5 with a border', () => {
        cy.visit(`${titleH5Url}&args=border:true;sans:true`);
        cy.getDataCy('h5')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans');
    });

    it('should contain a h5 with a sans style', () => {
        cy.visit(`${titleH5Url}&args=sans:true`);
        cy.getDataCy('h5').should('have.class', 'vl-title').should('have.class', 'vl-title--sans');
    });

    it('should contain a h5 with an alternative border style ', () => {
        cy.visit(`${titleH5Url}&args=alt:true`);
        cy.getDataCy('h5').should('have.class', 'vl-title').should('have.class', 'vl-title--alt');
    });

    it('should contain a h5 without whitespace at the bottom', () => {
        cy.visit(`${titleH5Url}&args=noSpaceBottom:true`);
        cy.getDataCy('h5').should('have.class', 'vl-title').should('have.class', 'vl-title--no-space-bottom');
    });
});
