import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlSideNavigationTitle
 * @class
 * @classdesc Het navigatie titel element.
 *
 * @extends HTMLHeadingElement
 * @mixes nativeVlElement
 */
class VlSideNavigationTitleElement extends BaseElementOfType(HTMLHeadingElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__title');
    }
}

@elementStyles()
@webComponent('vl-side-navigation-h1', { extends: 'h1' })
export class VlSideNavigationH1 extends VlSideNavigationTitleElement {}

@elementStyles()
@webComponent('vl-side-navigation-h2', { extends: 'h2' })
export class VlSideNavigationH2 extends VlSideNavigationTitleElement {}

@elementStyles()
@webComponent('vl-side-navigation-h3', { extends: 'h3' })
export class VlSideNavigationH3 extends VlSideNavigationTitleElement {}

@elementStyles()
@webComponent('vl-side-navigation-h4', { extends: 'h4' })
export class VlSideNavigationH4 extends VlSideNavigationTitleElement {}

@elementStyles()
@webComponent('vl-side-navigation-h5', { extends: 'h5' })
export class VlSideNavigationH5 extends VlSideNavigationTitleElement {}

@elementStyles()
@webComponent('vl-side-navigation-h6', { extends: 'h6' })
export class VlSideNavigationH6 extends VlSideNavigationTitleElement {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-h1': VlSideNavigationH1;
        'vl-side-navigation-h2': VlSideNavigationH2;
        'vl-side-navigation-h3': VlSideNavigationH3;
        'vl-side-navigation-h4': VlSideNavigationH4;
        'vl-side-navigation-h5': VlSideNavigationH5;
        'vl-side-navigation-h6': VlSideNavigationH6;
    }
}
