import { UigConfig } from '../config/uig-config';
import { defineWebComponent } from '../util/utils';

type Constructor<T> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): T;
};
type CustomElementClass = Omit<typeof HTMLElement, 'new'>;

export type CustomElementDecorator = {
    // legacy
    (cls: CustomElementClass): void;
    // standard
    (target: CustomElementClass, context: ClassDecoratorContext<Constructor<HTMLElement>>): void;
};

// export const webComponent =
//     (tagName: string, options?: ElementDefinitionOptions) =>
//     // eslint-disable-next-line @typescript-eslint/ban-types
//     (constructor: Function): any => {
//         defineWebComponent(constructor, tagName, options);
//     };

export const webComponent =
    (tagName: string): CustomElementDecorator =>
    (
        classOrTarget: CustomElementClass | Constructor<HTMLElement>,
        context?: ClassDecoratorContext<Constructor<HTMLElement>>
    ) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                // customElements.define(tagName, classOrTarget as CustomElementConstructor);
                defineWebComponent(classOrTarget as CustomElementConstructor, tagName);
            });
        } else {
            // customElements.define(tagName, classOrTarget as CustomElementConstructor);
            defineWebComponent(classOrTarget as CustomElementConstructor, tagName);
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
            if (UigConfig.getPreferences().logWebComponentRegistration) {
                console.debug(`${tagName} werd reeds geregistreerd`);
            }
        } else {
            Promise.all(promises).then(() => defineWebComponent(constructor, tagName, options));
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
            if (UigConfig.getPreferences().logWebComponentRegistration) {
                console.debug(`${tagName} werd reeds geregistreerd`);
            }
        } else {
            window.customElements.whenDefined(defined).then(() => defineWebComponent(constructor, tagName, options));
        }
    };
