const httpErrorMessageUrl =
    'http://localhost:8080/iframe.html?args=&id=components-http-error-message--http-404-message-default&viewMode=story';

describe('story vl-http-error-message', () => {
    it('as a user I can see the error message image', () => {
        cy.visit(`${httpErrorMessageUrl}`);
        cy.get('vl-http-404-message')
            .shadow()
            .find('vl-http-error-message')
            .shadow()
            .find('img')
            .invoke('attr', 'src')
            .should('eq', 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg');
    });
});
