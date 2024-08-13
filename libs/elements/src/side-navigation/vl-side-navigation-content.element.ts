import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
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
