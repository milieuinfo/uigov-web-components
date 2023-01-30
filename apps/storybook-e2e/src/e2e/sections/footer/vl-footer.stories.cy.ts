const footerUrl = 'http://localhost:8080/iframe.html?args=&id=sections-footer--footer-in-body&viewMode=story';

describe('story vl-footer', () => {
    it.skip('should render', () => {
        cy.visit(`${footerUrl}`);
        cy.getDataCy('footer').get('h2').contains('Vlaanderen.be is de officiële website van de Vlaamse overheid');
    });
});
