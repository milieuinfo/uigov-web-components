import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-properties-list', { extends: 'dl' })
export class VlPropertiesListElement extends BaseElementOfType(HTMLDListElement) {
    connectedCallback() {
        this.classList.add('vl-properties__list');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-properties-list': VlPropertiesListElement;
    }
}