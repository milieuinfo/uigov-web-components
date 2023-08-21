import { BaseElementOfType, findDeepestElementThroughShadowRoot, webComponent } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationToggle
 * @class
 * @classdesc Het navigatie toggle element.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 *
 * @property {String} data-vl-child - Attribuut wordt gebruikt om aan te geven dat het een menu item is. De koppeling gebeurt via het `data-vl-parent` attribuut van de submenu items.
 */
@webComponent('vl-side-navigation-toggle', { extends: 'a' })
export class VlSideNavigationToggleElement extends BaseElementOfType(HTMLAnchorElement) {
    constructor() {
        super();
        this._processClasses();
    }

    connectedCallback() {
        this.addEventListener('click', () => {
            const element = findDeepestElementThroughShadowRoot(this.getRootNode(), this.getAttribute('href'));
            if (element) {
                element.scrollIntoView();
                window.scrollBy(0, -43);
            }
        });
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__toggle');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-toggle': VlSideNavigationToggleElement;
    }
}
