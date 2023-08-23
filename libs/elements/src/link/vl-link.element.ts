import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { LinkBaseElementOfType } from './base/link-base.element';

/**
 * VlLink
 * @class
 * @classdesc Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document.
 *
 * @extends HTMLAnchorElement
 * @mixes vlLinkElement
 *
 * @property {string} data-vl-block - Attribuut zorgt ervoor dat het element als block getoond wordt.
 * @property {string} data-vl-error - Attribuut zorgt ervoor dat het element als error getoond wordt.
 */
@elementStyles()
@webComponent('vl-link', { extends: 'a' })
export class VlLinkElement extends LinkBaseElementOfType(HTMLAnchorElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link': VlLinkElement;
    }
}
