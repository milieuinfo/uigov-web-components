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
                const el = document.getElementsByTagName(name)[0];

                componentInstance = el;

                return cy.wrap(element);
            });
    });
});
