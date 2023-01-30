import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlIconWrapper
 * @class
 * @classdesc Gebruik de vl-icon-wrapper als parent element om al de iconen verticaal te aligneren.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 */
@webComponent('vl-icon-wrapper', { extends: 'p' })
export class VlIconWrapperElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-icon-wrapper');
    }
}

// TODO: een span / HTMLSpanElement is logischer
declare global {
    interface HTMLElementTagNameMap {
        'vl-icon-wrapper': VlIconWrapperElement;
    }
}
