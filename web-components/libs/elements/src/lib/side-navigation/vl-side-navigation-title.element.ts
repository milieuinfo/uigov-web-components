import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationTitle
 * @class
 * @classdesc Het navigatie titel element.
 *
 * @extends HTMLHeadingElement
 * @mixes nativeVlElement
 */
export class VlSideNavigationTitleElement extends BaseElementOfType(HTMLHeadingElement) {
    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__title');
    }
}

class VlSideNavigationH1 extends VlSideNavigationTitleElement {}
class VlSideNavigationH2 extends VlSideNavigationTitleElement {}
class VlSideNavigationH3 extends VlSideNavigationTitleElement {}
class VlSideNavigationH4 extends VlSideNavigationTitleElement {}
class VlSideNavigationH5 extends VlSideNavigationTitleElement {}
class VlSideNavigationH6 extends VlSideNavigationTitleElement {}

define('vl-side-navigation-h1', VlSideNavigationH1, { extends: 'h1' });
define('vl-side-navigation-h2', VlSideNavigationH2, { extends: 'h2' });
define('vl-side-navigation-h3', VlSideNavigationH3, { extends: 'h3' });
define('vl-side-navigation-h4', VlSideNavigationH4, { extends: 'h4' });
define('vl-side-navigation-h5', VlSideNavigationH5, { extends: 'h5' });
define('vl-side-navigation-h6', VlSideNavigationH6, { extends: 'h6' });
