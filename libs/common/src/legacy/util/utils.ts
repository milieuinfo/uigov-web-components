import { VL } from '../models';
import { Class } from '../type/types';
import { defineWebComponent } from '../../util/utils';

declare const vl: VL;

/**
 * Definieert een class als custom element enkel wanneer deze nog niet gedefinieerd werd.
 * ! Voor backwards compatibiliteit, niet voor intern gebruik.
 *
 * @deprecated
 *
 * @param {String} name - custom HTML element naam
 * @param {Object} constructor - constructor voor de class
 * @param {Object} options - opties
 * @return {void}
 */
export const define = (name: string, constructor: Class, options?: ElementDefinitionOptions) =>
    defineWebComponent(constructor, name, options);

/**
 * @deprecated
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
