import { TemplateResult } from 'lit';

declare global {
    namespace Cypress {
        interface Chainable {
            mount(template: TemplateResult): Chainable;
        }
    }
}
