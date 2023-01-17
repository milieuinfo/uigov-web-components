import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import './vl-search-result.element';

/**
 * VlSearchResults
 * @class
 * @classdesc De zoekresultaten worden als een lijst met links getoond.
 *
 * @extends HTMLElement
 * @mixes BaseElementOfType
 */
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
