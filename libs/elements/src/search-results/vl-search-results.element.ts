import { BaseElementOfType, webComponent } from '@domg-wc/common';
import './vl-search-result.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-search-results', { extends: 'ul' })
export class VlSearchResults extends BaseElementOfType(HTMLUListElement) {
    connectedCallback() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-search-results');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-search-results': VlSearchResults;
    }
}
