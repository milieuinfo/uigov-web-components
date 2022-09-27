// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        getDataCy(selector: string, options?: any): Chainable<any>;
    }
}

Cypress.Commands.add('getDataCy', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});
