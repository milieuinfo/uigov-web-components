import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { BaseButtonOfType } from './base/base-button.element';

/**
 * VlLinkButton
 * @class
 * @classdesc Gebruik de vl-link-button om een CTA toe te voegen.
 *
 * @extends HTMLAnchorElement
 */
@elementStyles()
@webComponent('vl-link-button', { extends: 'a' })
export class VlLinkButtonElement extends BaseButtonOfType(HTMLAnchorElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link-button': VlLinkButtonElement;
    }
}
