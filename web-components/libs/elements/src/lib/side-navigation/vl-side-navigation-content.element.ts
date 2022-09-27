import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlSideNavigationContent
 * @class
 * @classdesc Het navigatie content element.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
export class VlSideNavigationContentElement extends BaseElementOfType(HTMLDivElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__content');
    }
}

define('vl-side-navigation-content', VlSideNavigationContentElement, {
    extends: 'div',
});
