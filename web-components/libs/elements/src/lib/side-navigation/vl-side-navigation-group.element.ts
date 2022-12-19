import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationGroup
 * @class
 * @classdesc Het navigatie groep element.
 *
 * @extends HTMLUListElement
 * @mixes nativeVlElement
 */
export class VlSideNavigationGroupElement extends BaseElementOfType(HTMLUListElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__group');
    }
}

define('vl-side-navigation-group', VlSideNavigationGroupElement, { extends: 'ul' });
