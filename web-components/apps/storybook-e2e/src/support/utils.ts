export const extractWebComponent = <T>(selector: string, callback: (component: T) => void) => {
    cy.get(selector).then((el) => {
        const component = el.get(0) as T;

        callback(component);
    });
};
