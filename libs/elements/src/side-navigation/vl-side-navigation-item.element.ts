import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
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
