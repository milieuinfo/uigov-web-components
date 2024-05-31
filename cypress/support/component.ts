import { LitElement, TemplateResult, render } from 'lit';
import { getContainerEl } from '@cypress/mount-utils';
import 'cypress-axe';

let componentInstance: LitElement | HTMLElement;

Cypress.on('run:start', () => {
    Cypress.on('test:before:run', () => {
        const containerEl = getContainerEl();

        componentInstance?.remove();
        containerEl.innerHTML = '';
    });
});

Cypress.Commands.add('mount', (template: TemplateResult) => {
    return cy.then(() => {
        const containerEl = getContainerEl();
        const componentNode = document.createElement('div');

        containerEl.append(componentNode);
        render(template, componentNode);

        return cy
            .wrap(componentNode)
            .children()
            .first()
            .then((element) => {
                const name = element.prop('tagName').toLowerCase();
                const el = document.querySelector(`${name}:not([data-cy-root])`)[0];

                componentInstance = el;

                return cy.wrap(element);
            });
    });
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
        const component = el.get(0) as T;

        test(component);
    });
});

Cypress.Commands.add('runTest', { prevSubject: true }, <T>(prevSubject, test: (component: T) => void) => {
    const el = prevSubject as JQuery<HTMLElement>;
    const component = el.get(0) as T;

    test(component);
    return cy.wrap(component);
});
