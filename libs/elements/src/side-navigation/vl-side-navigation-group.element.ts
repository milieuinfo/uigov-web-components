import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

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
