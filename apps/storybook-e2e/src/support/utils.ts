export const runTestFor = <T>(selector: string, test: (component: T) => void) => {
    cy.get(selector).then((el) => {
        const component = el.get(0) as T;

        test(component);
    });
};

/**
 * transforms the given string to allow for sentences to be passed as parameters in storybook url
 * using strings containing '.', '/', '?', '&' won't work
 * @param string: string
 */
export const transformStringToArgument = (string: string) => string.replace(' ', '+');
