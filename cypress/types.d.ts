import { TemplateResult } from 'lit';

declare global {
    namespace Cypress {
        interface Chainable {
            mount(template: TemplateResult): Chainable;
            createStubForEvent(selector: string, event: string): Chainable<Subject>;
            visitWithA11y(url: string): void;
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
            }): Chainable<Subject>;
            runTestFor<T>(selector: string, test: (component: T) => void): Chainable<Subject>;
            runTest<T = HTMLElement>(test: (component: T) => void): Chainable<Subject>;
        }
    }
}
