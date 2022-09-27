import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlIconWrapper
 * @class
 * @classdesc Gebruik de vl-icon-wrapper als parent element om al de iconen verticaal te aligneren.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 */
export class VlIconWrapperElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-icon-wrapper');
    }
}

// TODO: een span / HTMLSpanElement is logischer
define('vl-icon-wrapper', VlIconWrapperElement, { extends: 'p' });
