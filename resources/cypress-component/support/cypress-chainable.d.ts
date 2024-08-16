import { TemplateResult } from 'lit';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            mount(template: TemplateResult): Chainable<Subject>;
        }
    }
}
