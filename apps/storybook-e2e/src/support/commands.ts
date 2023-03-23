// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        getDataCy(selector: string, options?: any): Chainable<any>;

        createStubForEvent(selector: string, event: string): void;
    }
}

Cypress.Commands.add('getDataCy', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('createStubForEvent', (selector, event) => {
    cy.get(selector).then(($el) => {
        $el.get(0).addEventListener(event, cy.stub().as(event));
    });
});
