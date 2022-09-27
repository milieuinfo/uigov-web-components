import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
export class VlPropertyTermElement extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__label');
    }
}

define('vl-property-term', VlPropertyTermElement, { extends: 'dt' });
