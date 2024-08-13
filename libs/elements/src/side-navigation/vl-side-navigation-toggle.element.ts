import { BaseElementOfType, findDeepestElementThroughShadowRoot, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
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
