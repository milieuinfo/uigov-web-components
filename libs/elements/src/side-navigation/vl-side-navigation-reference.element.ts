import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-side-navigation-reference', { extends: 'div' })
export class VlSideNavigationReferenceElement extends BaseElementOfType(HTMLDivElement) {
    constructor() {
        super();
        this._processAttributes();
        this._processClasses();
    }

    _processAttributes() {
        this.setAttribute('data-vl-scrollspy-content', '');
    }

    _processClasses() {
        this.classList.add('js-vl-scrollspy__content');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation-reference': VlSideNavigationReferenceElement;
    }
}
