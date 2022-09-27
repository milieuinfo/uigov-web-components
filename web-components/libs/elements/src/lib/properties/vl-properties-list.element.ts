import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp.
 *
 * @extends HTMLDListElement
 * @mixes nativeVlElement
 */
export class VlPropertiesListElement extends BaseElementOfType(HTMLDListElement) {
    connectedCallback() {
        this.classList.add('vl-properties__list');
    }
}

define('vl-properties-list', VlPropertiesListElement, { extends: 'dl' });
