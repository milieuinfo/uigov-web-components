const propertiesUrl = 'http://localhost:8080/iframe.html?id=elements-properties--properties-default&viewMode=story';

describe('story vl-properties', () => {
    it('should be able to see properties and their values', () => {
        cy.visit(`${propertiesUrl}`);
        cy.getDataCy('property-term-1').should('have.class', 'vl-properties__label').contains('Voornaam');

        cy.getDataCy('property-value-1').should('have.class', 'vl-properties__data').contains('Koen');

        cy.getDataCy('property-term-2').should('have.class', 'vl-properties__label').contains('Naam');

        cy.getDataCy('property-value-2').should('have.class', 'vl-properties__data').contains('Peeters');

        cy.getDataCy('property-term-3').should('have.class', 'vl-properties__label').contains('Geslacht');

        cy.getDataCy('property-value-3').should('have.class', 'vl-properties__data').contains('Man');
    });
});
