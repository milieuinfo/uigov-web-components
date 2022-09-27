import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import './vl-search-result.element';

/**
 * VlSearchResults
 * @class
 * @classdesc De zoekresultaten worden als een lijst met links getoond.
 *
 * @extends HTMLElement
 * @mixes BaseElementOfType
 */
export class VlSearchResults extends BaseElementOfType(HTMLUListElement) {
    connectedCallback() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-search-results');
    }
}

define('vl-search-results', VlSearchResults, { extends: 'ul' });
