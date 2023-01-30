const searchFilterUrl =
    'http://localhost:8080/iframe.html?id=elements-search-filter--search-filter-default&viewMode=story';

describe('story vl-search-filter', () => {
    it('should contain an intro', () => {
        cy.visit(`${searchFilterUrl}`);
        cy.getDataCy('search-filter').find('.vl-search-filter__intro').contains('Lorem ipsum');
    });

    it('should contain no alternative styled search filter', () => {
        cy.visit(`${searchFilterUrl}`);
        cy.getDataCy('search-filter').should('not.have.class', 'vl-search-filter--alt');
    });

    it('should contain alternative styled search filter', () => {
        cy.visit(`${searchFilterUrl}&args=alt:true`);
        cy.getDataCy('search-filter').should('have.class', 'vl-search-filter--alt');
    });
});
