import { BaseElementOfType } from '../base/base.element';
import { UigConfig } from '../config/uig-config';
import { defineWebComponent } from '../util/utils';

// types en opzet overgenomen van Lit
//  -> https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts

type Constructor<T> = {
    new (...args: any[]): T;
};

export type CustomElementDecorator = {
    // legacy
    (cls: any): void;
    // standard
    (target: any, context: ClassDecoratorContext<Constructor<HTMLElement>>): void;
};

export const webComponent =
    (tagName: string, options?: ElementDefinitionOptions): CustomElementDecorator =>
    (classOrTarget: any, context?: ClassDecoratorContext<Constructor<HTMLElement>>) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options);
            });
        } else {
            defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options);
        }
    };

// variant waaraan een custom registratie methode wordt meegegeven
export const webComponentCustom =
    (customRegistration: () => any): CustomElementDecorator =>
    (classOrTarget: any, context?: ClassDecoratorContext<Constructor<HTMLElement>>) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                customRegistration();
            });
        } else {
            customRegistration();
        }
    };

// TODO: deze Promised variant zou niet nodig moeten zijn
//  -> misschien is het ook niet meer nodig omdat kind-web-componenten nu ook @webComponent
//     gebruiken en als ze dus geïmporteerd worden al geregistreerd worden: te testen / verifiëren
export const webComponentPromised =
    <T>(
        promises: Iterable<T | PromiseLike<T>>,
        tagName: string,
        options?: ElementDefinitionOptions
    ): CustomElementDecorator =>
    (classOrTarget: any, context?: ClassDecoratorContext<Constructor<HTMLElement>>) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                if (customElements.get(tagName)) {
                    if (UigConfig.getPreferences().logWebComponentRegistration) {
                        console.debug(`${tagName} werd reeds geregistreerd`);
                    }
                } else {
                    Promise.all(promises).then(() =>
                        defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options)
                    );
                }
            });
        } else {
            if (customElements.get(tagName)) {
                if (UigConfig.getPreferences().logWebComponentRegistration) {
                    console.debug(`${tagName} werd reeds geregistreerd`);
                }
            } else {
                Promise.all(promises).then(() =>
                    defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options)
                );
            }
        }
    };

// TODO: deze Conditional variant zou niet nodig moeten zijn
//  -> misschien is het ook niet meer nodig omdat kind-web-componenten nu ook @webComponent
//     gebruiken en als ze dus geïmporteerd worden al geregistreerd worden: te testen / verifiëren
export const webComponentConditional =
    (defined: string, tagName: string, options?: ElementDefinitionOptions): CustomElementDecorator =>
    (classOrTarget: any, context?: ClassDecoratorContext<Constructor<HTMLElement>>) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                if (customElements.get(tagName)) {
                    if (UigConfig.getPreferences().logWebComponentRegistration) {
                        console.debug(`${tagName} werd reeds geregistreerd`);
                    }
                } else {
                    window.customElements
                        .whenDefined(defined)
                        .then(() => defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options));
                }
            });
        } else {
            if (customElements.get(tagName)) {
                if (UigConfig.getPreferences().logWebComponentRegistration) {
                    console.debug(`${tagName} werd reeds geregistreerd`);
                }
            } else {
                window.customElements
                    .whenDefined(defined)
                    .then(() => defineWebComponent(classOrTarget as CustomElementConstructor, tagName, options));
            }
        }
    };
