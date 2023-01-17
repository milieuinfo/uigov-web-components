export const webComponent =
    (tagName: string, options?: ElementDefinitionOptions) =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function): any => {
        if (customElements.get(tagName)) {
            console.warn(`${tagName} werd reeds gedefinieerd als custom element`);
        } else {
            console.debug('registratie van custom element', tagName);
            window.customElements.define(tagName, constructor as CustomElementConstructor, options);
        }
    };

// variant waaraan een custom registratie methode wordt meegegeven
export const webComponentCustom =
    (customRegistration: () => any) =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function): any => {
        customRegistration();
    };

// TODO: deze Promised variant zou niet nodig moeten zijn
//  -> misschien is het ook niet meer nodig omdat kind-web-componenten nu ook @webComponent
//     gebruiken en als ze dus geïmporteerd worden al geregistreerd worden: te testen / verifiëren
export const webComponentPromised =
    <T>(promises: Iterable<T | PromiseLike<T>>, tagName: string, options?: ElementDefinitionOptions) =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function): any => {
        if (customElements.get(tagName)) {
            console.warn(`${tagName} werd reeds gedefinieerd als custom element`);
        } else {
            console.debug('registratie van custom element', tagName);
            Promise.all(promises).then(() =>
                window.customElements.define(tagName, constructor as CustomElementConstructor, options)
            );
        }
    };

// TODO: deze Conditional variant zou niet nodig moeten zijn
//  -> misschien is het ook niet meer nodig omdat kind-web-componenten nu ook @webComponent
//     gebruiken en als ze dus geïmporteerd worden al geregistreerd worden: te testen / verifiëren
export const webComponentConditional =
    (defined: string, tagName: string, options?: ElementDefinitionOptions) =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function): any => {
        if (customElements.get(tagName)) {
            console.warn(`${tagName} werd reeds gedefinieerd als custom element`);
        } else {
            console.debug('registratie van custom element', tagName);
            window.customElements
                .whenDefined(defined)
                .then(() => window.customElements.define(tagName, constructor as CustomElementConstructor, options));
        }
    };
