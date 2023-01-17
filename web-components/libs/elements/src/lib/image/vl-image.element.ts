import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlImage
 * @class
 * @classdesc Gebruik de image component om illustratiens, graphics, tekeningen, foto's, etc. te tonen op je site.
 *
 * @extends HTMLImageElement
 * @mixes nativeVlElement
 */
@webComponent('vl-image', { extends: 'img' })
export class VlImageElement extends BaseElementOfType(HTMLImageElement) {
    connectedCallback() {
        this.classList.add('vl-image');
        if (!this.alt) {
            this.alt = '';
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-image': VlImageElement;
    }
}
