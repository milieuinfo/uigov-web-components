import { LitElement, TemplateResult, render, CSSResult, unsafeCSS } from 'lit';
import { getContainerEl } from '@cypress/mount-utils';
import 'cypress-axe';
import 'cypress-wait-until';

let componentInstance: LitElement | HTMLElement;

Cypress.on('run:start', () => {
    Cypress.on('test:before:run', () => {
        componentInstance?.remove();
        getContainerEl().innerHTML = '';
    });
});

Cypress.Commands.add('mount', (template: TemplateResult) => {
    return cy.then(() => {
        const componentNode = document.createElement('div');
        getContainerEl().append(componentNode);
        render(template, componentNode);
        return cy
            .wrap(componentNode)
            .children()
            .first()
            .then((element) => {
                const name = element.prop('tagName').toLowerCase();
                componentInstance = document.querySelector(`${name}:not([data-cy-root])`)[0];
                return cy.wrap(element);
            });
    });
});

Cypress.Commands.add('loadCSSResult', (...cssResults: CSSResult[]) => {
    cy.document().then((doc) => {
        const combinedCSSText = cssResults
            .map((cssResult) => {
                const css = unsafeCSS(cssResult);
                return css.cssText;
            })
            .join('\n');

        const style = doc.createElement('style');
        style.textContent = combinedCSSText;
        doc.head.appendChild(style);
    });
    return cy.wrap(cssResults);
});

Cypress.Commands.add('createStubForEvent', (selector: string, event: string) => {
    cy.get(selector).then(($el: JQuery<HTMLElement>) => {
        $el.get(0).addEventListener(event, cy.stub().as(event));
    });
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

Cypress.Commands.add('runTestFor', <T>(selector: string, test: (component: T) => void) => {
    cy.get(selector).then((el) => {
        test(el.get(0) as T);
    });
});

Cypress.Commands.add(
    'runTestFor2',
    <T, U>(selector1: string, selector2: string, test: (component1: T, component2: U) => void) => {
        cy.get(selector1).then((el1) => {
            cy.get(selector2).then((el2) => {
                test(el1.get(0) as T, el2.get(0) as U);
            });
        });
    }
);

// runTestFor3 is met array destructuring - leesbaarder als je het kent
Cypress.Commands.add(
    'runTestFor3',
    <T, U, V>(
        selector1: string,
        selector2: string,
        selector3: string,
        test: (component1: T, component2: U, component3: V) => void
    ) => {
        cy.get(selector1).then(([el1]) => {
            cy.get(selector2).then(([el2]) => {
                cy.get(selector3).then(([el3]) => {
                    test(el1 as T, el2 as U, el3 as V);
                });
            });
        });
    }
);

// runTestFor4 is met array destructuring - leesbaarder als je het kent
Cypress.Commands.add(
    'runTestFor4',
    <T, U, V, W>(
        selector1: string,
        selector2: string,
        selector3: string,
        selector4: string,
        test: (component1: T, component2: U, component3: V, component4: W) => void
    ) => {
        cy.get(selector1).then(([el1]) => {
            cy.get(selector2).then(([el2]) => {
                cy.get(selector3).then(([el3]) => {
                    cy.get(selector4).then(([el4]) => {
                        test(el1 as T, el2 as U, el3 as V, el4 as W);
                    });
                });
            });
        });
    }
);

Cypress.Commands.add('runTest', { prevSubject: true }, <T>(prevSubject, test: (component: T) => void) => {
    const el = prevSubject as JQuery<HTMLElement>;
    const component = el.get(0) as T;
    test(component);
    return cy.wrap(component);
});
