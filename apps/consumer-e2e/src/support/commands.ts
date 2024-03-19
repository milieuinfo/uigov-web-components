// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        visitWithA11y(url: string): void;
    }
}

Cypress.Commands.add('visitWithA11y', (url) => {
    cy.visit(url);
    cy.injectAxe();
});
