import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlLinkListItem
 * @class
 * @classdesc Class die een item uit de {@link VlLinkList} weergeeft.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-link-list-item', { extends: 'li' })
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-link-list-item': VlLinkListItemElement;
    }
}
