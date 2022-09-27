import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlImage
 * @class
 * @classdesc Gebruik de image component om illustratiens, graphics, tekeningen, foto's, etc. te tonen op je site.
 *
 * @extends HTMLImageElement
 * @mixes nativeVlElement
 */
export class VlImageElement extends BaseElementOfType(HTMLImageElement) {
    connectedCallback() {
        this.classList.add('vl-image');
        if (!this.alt) {
            this.alt = '';
        }
    }
}

define('vl-image', VlImageElement, { extends: 'img' });
