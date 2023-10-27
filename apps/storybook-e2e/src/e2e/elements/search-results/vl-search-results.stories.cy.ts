const searchResultsDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-search-results-search-results--search-results-default&viewMode=story';

describe('story vl-search-results', () => {
    it('should contain a title', () => {
        cy.visit(`${searchResultsDefaultUrl}`);
        cy.getDataCy('search-result-1')
            .find('h3.vl-search-result__title')
            .find('a.vl-search-result__title__link')
            .contains('Vlaanderenkiest.be');
    });

    it('should contain a sub title', () => {
        cy.visit(`${searchResultsDefaultUrl}`);
        cy.getDataCy('search-result-1')
            .find('p.vl-search-result__content-group')
            .find('time')
            .contains('Maandag 22 oktober 2018');
    });

    it('should contain a content', () => {
        cy.visit(`${searchResultsDefaultUrl}`);
        cy.getDataCy('search-result-1')
            .find('.vl-search-result__content-group')
            .find('dt')
            .contains('Vlaanderenkiest.be');
    });
});
