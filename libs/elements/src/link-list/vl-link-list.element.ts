import { BaseElementOfType, webComponent } from '@domg-wc/common';
import './vl-link-list-item.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-link-list', { extends: 'ul' })
export class VlLinkListElement extends BaseElementOfType(HTMLUListElement) {
    connectedCallback() {
        this.classList.add('vl-link-list');
    }

    static get _observedClassAttributes() {
        return ['small', 'inline', 'bordered'];
    }

    get _classPrefix() {
        return 'vl-link-list--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link-list': VlLinkListElement;
    }
}
