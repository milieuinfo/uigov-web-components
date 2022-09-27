import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlSideNavigationReference
 * @class
 * @classdesc Het content element waar het navigatie element naar verwijst.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
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

define('vl-side-navigation-reference', VlSideNavigationReferenceElement, {
    extends: 'div',
});
