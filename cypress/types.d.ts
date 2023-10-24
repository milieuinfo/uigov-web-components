import { TemplateResult } from 'lit';

declare global {
    namespace Cypress {
        interface Chainable {
            mount(template: TemplateResult): Chainable;
            createStubForEvent(selector: string, event: string): Chainable<Subject>;
        }
    }
}
