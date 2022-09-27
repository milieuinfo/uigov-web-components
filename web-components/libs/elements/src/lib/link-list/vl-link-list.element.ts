import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import './vl-link-list-item.element';

/**
 * VlLinkList
 * @class
 * @classdesc Class die een lijst van links kan weergeven.
 *
 * @extends HTMLUListElement
 * @mixes nativeVlElement
 */
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

define('vl-link-list', VlLinkListElement, { extends: 'ul' });
