import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp.
 *
 * @extends HTMLDListElement
 * @mixes nativeVlElement
 */
@webComponent('vl-properties-list', { extends: 'dl' })
export class VlPropertiesListElement extends BaseElementOfType(HTMLDListElement) {
    connectedCallback() {
        this.classList.add('vl-properties__list');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-properties-list': VlPropertiesListElement;
    }
}
