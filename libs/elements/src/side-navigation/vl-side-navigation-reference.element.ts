import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationReference
 * @class
 * @classdesc Het content element waar het navigatie element naar verwijst.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
@webComponent('vl-side-navigation-reference', { extends: 'div' })
export class VlSideNavigationReferenceElement extends BaseElementOfType(HTMLDivElement) {
    constructor() {
        super();
        this._processAttributes();
        this._processClasses();
    }

    _processAttributes() {
        this.setAttribute('data-vl-scrollspy-content', '');
    }

    _processClasses() {
        this.classList.add('js-vl-scrollspy__content');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-reference': VlSideNavigationReferenceElement;
    }
}
