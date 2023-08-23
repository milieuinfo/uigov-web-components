import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-property-term', { extends: 'dt' })
export class VlPropertyTermElement extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__label');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-property-term': VlPropertyTermElement;
    }
}
