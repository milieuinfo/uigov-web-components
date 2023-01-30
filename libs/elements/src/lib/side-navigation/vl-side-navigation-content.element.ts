import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationContent
 * @class
 * @classdesc Het navigatie content element.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 */
@webComponent('vl-side-navigation-content', { extends: 'div' })
export class VlSideNavigationContentElement extends BaseElementOfType(HTMLDivElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__content');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-content': VlSideNavigationContentElement;
    }
}
