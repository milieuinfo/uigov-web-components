const playgroundLitUrl = 'http://localhost:4202';

describe('integration Form - Lit', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(playgroundLitUrl);

        cy.checkA11y('app-element');
    });

    it('should be CSP compliant', () => {
        cy.intercept('/csp-report', cy.spy().as('cspReport'));
        cy.visit(playgroundLitUrl);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('@cspReport').should('not.have.been.called');
    });

    it('should report CSP violation', () => {
        cy.intercept('/csp-report', cy.spy().as('cspReport'));
        cy.visit(playgroundLitUrl);

        cy.get('html')
            .find('head')
            .then((head) => {
                const script: HTMLScriptElement = document.createElement('script');
                script.id = 'test-script';
                script.src = 'http://localhost/test.js';

                head[0].append(script);
            });

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('@cspReport').should('have.been.called');
    });
});
