import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlBody
 * @class
 * @classdesc
 *
 * @extends HTMLBodyElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-body', { extends: 'body' })
export class VlBodyElement extends BaseElementOfType(HTMLBodyElement) {
    connectedCallback() {
        this.classList.add('vl-u-sticky-gf');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-body': VlBodyElement;
    }
}
