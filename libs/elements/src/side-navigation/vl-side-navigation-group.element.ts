import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlSideNavigationGroup
 * @class
 * @classdesc Het navigatie groep element.
 *
 * @extends HTMLUListElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-side-navigation-group', { extends: 'ul' })
export class VlSideNavigationGroupElement extends BaseElementOfType(HTMLUListElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__group');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-group': VlSideNavigationGroupElement;
    }
}
