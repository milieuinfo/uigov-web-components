import { Class } from '../type/types';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { VL } from '../models';
declare const vl: VL;

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
        console.warn(`script with id '${id}' is already loaded`);
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
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

/**
 * will remove the parent node from the given element
 * does the opposite of vl.util.wrap
 * @param element
 */
export const unwrap = (element: Element) => {
    if (vl.util.exists(element)) {
        const fragment = document.createDocumentFragment();
        while (element.firstChild) {
            fragment.appendChild(element.firstChild);
        }
        if (element.parentNode) element.parentNode.replaceChild(fragment, element);
    }
};

/**
 * creates new Promise that resolves in x milliseconds
 * returns created Promise & function to cancel the Promise
 * @param ms
 */
export const deferred = (ms: number): { promise: Promise<unknown>; cancel: any } => {
    let cancel: unknown;
    const promise = new Promise((resolve, reject) => {
        cancel = reject;
        setTimeout(resolve, ms);
    });
    return { promise, cancel };
};

/**
 * debouncing a task will wait to execute the given task until it hasn't been called for the amount of given milliseconds
 * @param task - function to debounce
 * @param ms - milliseconds to delay until last iteration of function should be called
 */
export const debounce = (task: (...args: any) => void, ms: number) => {
    // t: local binding for local state
    let t: { cancel: any; promise: Promise<unknown> } = {
        promise: null!,
        cancel: (_?: any) => void 0,
    };
    return async (...args: any) => {
        try {
            t.cancel();
            t = deferred(ms);
            await t.promise;
            await task(...args);
        } catch (_) {
            //
        }
    };
};

export const returnNotEmptyString = (s: string) => (s && s !== '' ? s : undefined);
export const returnNumber = (n: number) => (!isNaN(n) ? n : undefined);
export const ifDefinedString = (s: string) => ifDefined(returnNotEmptyString(s));
export const ifDefinedNumber = (n: number) => ifDefined(returnNumber(n));

/**
 * Zoekt het element onder een meegegeven root element dat overeenkomt met een meegegeven css selector en dit
 * doorheen de shadow roots van onderliggende elementen. Het matching element in de diepste shadow root wordt
 * teruggegeven.
 * @param {Element|ShadowRoot|null} rootElement - het element waaronder we beginnen met zoeken
 * @param {String} selector - de css selector waarnaar we zoeken
 * @return {Element|null} het element, matching aan de selector, dat in de diepste shadow root ligt
 */
export const findDeepestElementThroughShadowRoot = (
    rootElement: Element | ShadowRoot | null,
    selector: string
): Element | null => {
    if (rootElement) {
        const deepestElement = Array.from(rootElement.querySelectorAll('*'))
            .filter((el) => !!el.shadowRoot)
            .map((el) => findDeepestElementThroughShadowRoot(el.shadowRoot, selector))
            .find((el) => !!el);
        return deepestElement || rootElement.querySelector(selector);
    }
    return null;
};
