import '../../cypress-commands/commands';
import { getContainerEl } from '@cypress/mount-utils';
import { LitElement, render, TemplateResult } from 'lit';

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
