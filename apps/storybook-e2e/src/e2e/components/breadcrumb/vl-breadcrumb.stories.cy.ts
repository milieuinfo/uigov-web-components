const breadcrumbUrl = 'http://localhost:8080/iframe.html?id=components-breadcrumb--breadcrumb-default&viewMode=story';

describe('story vl-breadcrumb', () => {
    it('should contain a nav section', () => {
        cy.visit(`${breadcrumbUrl}`);
        cy.getDataCy('breadcrumb')
            .shadow()
            .find('nav')
            .should('have.class', 'vl-breadcrumb')
            .should('have.attr', 'aria-label', 'U bent hier: ');
    });

    it('should contain 4 items', () => {
        cy.visit(`${breadcrumbUrl}`);
        cy.getDataCy('breadcrumb')
            .shadow()
            .find('.vl-breadcrumb__list')
            .children('.vl-breadcrumb__list__item')
            .should('have.length', 4);
    });

    it('should contain valid items', () => {
        cy.visit(`${breadcrumbUrl}`);
        cy.getDataCy('breadcrumb')
            .find('vl-breadcrumb-item')
            .first()
            .contains('Vlaanderen Intern')
            .next()
            .contains('Regelgeving')
            .next()
            .contains('Webuniversum')
            .next()
            .contains('Componenten');
    });
});
