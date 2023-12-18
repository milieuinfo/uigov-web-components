const footerUrl = 'http://localhost:8080/iframe.html?id=sections-footer--footer-default&viewMode=story';

describe('story vl-footer - default', () => {
    it('should render', () => {
        cy.visit(footerUrl);

        cy.get('vl-footer');
        cy.get('#footer__container')
            .find('footer')
            .find('h2')
            .contains('Vlaanderen.be is de officiële website van de Vlaamse overheid');
    });

    // it('should emit ready event', () => {
    //     cy.visit(footerUrl);

    //     // Mogelijke flaky test aangezien het event afgevuurd kan worden vooraleer de eventListener is toegevoegd.
    //     cy.createStubForEvent('vl-footer', 'ready');
    //     cy.get('@ready').should('have.been.calledOnce');
    // });
});
