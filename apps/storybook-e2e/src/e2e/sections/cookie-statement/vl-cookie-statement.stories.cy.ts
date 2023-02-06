const cookieStatementUrl =
    'http://localhost:8080/iframe.html?id=sections-cookie-statement--cookie-statement-default&viewMode=story';

describe('story vl-cookie-statement', () => {
    it('should have cookie statement header', () => {
        cy.visit(cookieStatementUrl);

        cy.get('vl-cookie-statement').shadow().find('h1').contains('Cookieverklaring');
    });

    it('should have default date', () => {
        cy.visit(cookieStatementUrl);

        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('3 maart 2021');
    });

    it('should set date', () => {
        cy.visit(`${cookieStatementUrl}&args=date:27+januari+2023`);

        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('27 januari 2023');
    });

    it('should disable back link and emit event', () => {
        cy.visit(`${cookieStatementUrl}&args=disableBackLink:true`);

        // De event listener wordt toegevoegd op het document omdat vl-cookie-statement geen property 'addEventListener' heeft volgens Cypress.
        // Aangezien bubbles op true staat voor het event werkt dit.
        cy.document().invoke('addEventListener', 'vl-click-back', cy.stub().as('vl-click-back'));
        cy.get('vl-cookie-statement').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
        cy.get('@vl-click-back').should('have.been.calledOnce');
    });

    it('should have default version', () => {
        cy.visit(cookieStatementUrl);

        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('1.0.0');
    });

    it('should set version', () => {
        cy.visit(`${cookieStatementUrl}&args=version:v24`);

        cy.get('vl-cookie-statement').shadow().find('section').find('span').contains('v24');
    });
});
