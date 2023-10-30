// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        getDataCy(selector: string, options?: any): Chainable<any>;

        createStubForEvent(selector: string, event: string): void;
        visitWithA11y(url: string): void;
        shouldHaveStyle(style: string, value: string, not?: boolean): Chainable<any>;
        shouldHaveComputedStyle({
            style,
            value,
            not,
            pseudo,
        }: {
            style: string;
            value: string;
            pseudo?: string;
            not?: boolean;
        }): Chainable<any>;
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

Cypress.Commands.add('visitWithA11y', (url) => {
    cy.visit(url);
    cy.injectAxe();
});

/**
 * @param style - style property om af te testen
 * @param value - waarde van de style property
 * @param not - optionele boolean om te testen op het omgekeerde
 *  @param pseudo - optionele string om te testen op een pseudo element
 */
Cypress.Commands.add(
    'shouldHaveComputedStyle',
    { prevSubject: true },
    (prevSubject, { style, value, not, pseudo }: { style: string; value: string; pseudo?: string; not?: boolean }) => {
        cy.wrap(prevSubject)
            .then(($el) => {
                const htmlElement = $el[0] as unknown as Element;
                return window.getComputedStyle(htmlElement, pseudo);
            })
            .invoke('getPropertyValue', style)
            .should(!not ? 'equal' : 'not.equal', value);
        return cy.wrap(prevSubject);
    }
);
