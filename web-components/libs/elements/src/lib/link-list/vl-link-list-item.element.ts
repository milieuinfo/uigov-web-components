import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlLinkListItem
 * @class
 * @classdesc Class die een item uit de {@link VlLinkList} weergeeft.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 */
export class VlLinkListItemElement extends BaseElementOfType(HTMLLIElement) {
    connectedCallback() {
        this.classList.add('vl-link-list__item');
        this._links.forEach((link: any) => {
            link.insertAdjacentHTML(
                'afterBegin',
                '<i class="vl-link__icon vl-link__icon--before vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>'
            );
        });
    }

    get _links() {
        return this.querySelectorAll('[is="vl-link"]');
    }
}

define('vl-link-list-item', VlLinkListItemElement, { extends: 'li' });
