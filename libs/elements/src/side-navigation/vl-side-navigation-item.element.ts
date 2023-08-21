import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlSideNavigationItem
 * @class
 * @classdesc Het navigatie item element.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-parent - Attribuut wordt gebruikt op de navigatie menu list elementen.
 */
@webComponent('vl-side-navigation-item', { extends: 'li' })
export class VlSideNavigationItemElement extends BaseElementOfType(HTMLLIElement) {
    static get _observedAttributes() {
        return ['parent'];
    }

    constructor() {
        super();
        this._processClasses();
    }

    _processClasses() {
        this.classList.add('vl-side-navigation__item');
    }

    _parentChangedCallback(oldValue: string, newValue: string) {
        const clazz = 'vl-side-navigation__item--parent';
        if (newValue != undefined) {
            this.classList.add(clazz);
        } else {
            this.classList.remove(clazz);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-item': VlSideNavigationItemElement;
    }
}
