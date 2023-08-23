import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-property-value', { extends: 'dd' })
export class VlPropertyValueElement extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__data');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-property-value': VlPropertyValueElement;
    }
}
