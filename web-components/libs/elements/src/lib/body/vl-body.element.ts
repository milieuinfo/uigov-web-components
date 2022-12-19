import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlBody
 * @class
 * @classdesc
 *
 * @extends HTMLBodyElement
 * @mixes nativeVlElement
 */
export class VlBodyElement extends BaseElementOfType(HTMLBodyElement) {
    connectedCallback() {
        this.classList.add('vl-u-sticky-gf');
    }
}

define('vl-body', VlBodyElement, { extends: 'body' });
