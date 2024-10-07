import { webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';
import { LinkBaseElementOfType } from './base/link-base.element';

@elementStyles()
@webComponent('vl-button-link', { extends: 'button' })
export class VlButtonLinkElement extends LinkBaseElementOfType(HTMLButtonElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-button-link': VlButtonLinkElement;
    }
}
