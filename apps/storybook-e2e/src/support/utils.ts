export const runTestFor = <T>(selector: string, test: (component: T) => void) => {
    cy.get(selector).then((el) => {
        const component = el.get(0) as T;

        test(component);
    });
};
