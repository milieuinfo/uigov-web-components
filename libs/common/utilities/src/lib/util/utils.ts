import { Class } from '../type/types';
import { ifDefined } from 'lit-html/directives/if-defined.js';

/**
 * Als web-componenten geïmporteerd worden met named imports (aanbevolen, oa voor tree shaking), dan wordt de component
 * niet gerefereert en daardoor niet geregistreert. Door ze te refereren met deze methode (conventie) vermijd je dat je
 * IDE en Webpack de import als dode code behandelen. Daarnaast zorgt het ervoor dat je steeds een minimale referentie
 * hebt die (door de @webComponent en @customElement decorators) de component als web-component registreert.
 *
 * @param webComponents
 */
export const registerWebComponents = (webComponents: any[]) => {
    console.log('registeren van de web-componenten');
};

/**
 * Definieert een class als custom element enkel wanneer deze nog niet gedefinieerd werd.
 *
 * @param {String} name - custom HTML element naam
 * @param {Object} constructor - constructor voor de class
 * @param {Object} options - opties
 * @return {void}g
 */
export const define = (
    name: string,
    constructor: Class, // TODO kspeltin: CustomElementConstructor,
    options?: ElementDefinitionOptions
): void => {
    if (customElements.get(name)) {
        console.warn(`${name} werd reeds gedefinieerd als custom element`);
    } else {
        customElements.define(name, constructor, options);
    }
};

/**
 * Asynchroon een script downloaden maar synchroon in volgorde uitvoeren.
 *
 * @param {String} id - script id
 * @param {String} src - script src path
 * @return {void}
 */
export const awaitScript = (id: string, src: string): Promise<void> => {
    if (document.head.querySelector(`script#${id}`)) {
        console.log(`script with id '${id}' is already loaded`);
        return Promise.resolve();
    }

    const script: HTMLScriptElement = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = false;

    const promise: Promise<void> = new Promise((resolve, reject) => {
        script.onload = () => {
            resolve();
        };
        script.onerror = () => {
            reject(new Error(`error when script with src attribute '${script.src}' was loaded`));
        };
    });

    document.head.appendChild(script);
    return promise;
};

/**
 * Wacht.
 *
 * @param {Number} ms - aantal milliseconden dat er gewacht moeten worden
 * @return {Promise}
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Wacht tot conditie geldig (truthy) is.
 *
 * @param {Function} condition - conditionele functie
 * @return {Promise}
 */
export const awaitUntil = (condition: any): Promise<void> =>
    // TODO kspeltin: raar die async in een promise
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
        while (!condition()) {
            await sleep(50);
        }
        resolve();
    });

export const returnNotEmptyString = (s: string) => (s && s !== '' ? s : undefined);
export const returnNumber = (n: number) => (!isNaN(n) ? n : undefined);
export const ifDefinedString = (s: string) => ifDefined(returnNotEmptyString(s));
export const ifDefinedNumber = (n: number) => ifDefined(returnNumber(n));
