import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { LinkBaseElementOfType } from './base/link-base.element';

/**
 * VlButtonLink
 * @class
 * @classdesc Een button gestyled als link.
 *
 * @extends HTMLButtonElement
 * @mixes vlLinkElement
 *
 * @property {string} data-vl-block - Attribuut zorgt ervoor dat het element als block getoond wordt.
 * @property {string} data-vl-error - Attribuut zorgt ervoor dat het element als error getoond wordt.
 */
@elementStyles()
@webComponent('vl-button-link', { extends: 'button' })
export class VlButtonLinkElement extends LinkBaseElementOfType(HTMLButtonElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-button-link': VlButtonLinkElement;
    }
}
