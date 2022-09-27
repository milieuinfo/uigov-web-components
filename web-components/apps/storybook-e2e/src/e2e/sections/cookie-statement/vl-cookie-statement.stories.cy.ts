const cookieStatementUrl =
    'http://localhost:8080/iframe.html?id=sections-cookie-statement--cookie-statement-default&viewMode=story';

describe('story vl-cookie-statement', () => {
    it('should contain the `Cookieverklaring`', () => {
        cy.visit(`${cookieStatementUrl}`);
        cy.getDataCy('cookie-statement').shadow().find('h1').contains('Cookieverklaring');
    });
});
