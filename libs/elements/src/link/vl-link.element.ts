import { webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';
import { LinkBaseElementOfType } from './base/link-base.element';

@elementStyles()
@webComponent('vl-link', { extends: 'a' })
export class VlLinkElement extends LinkBaseElementOfType(HTMLAnchorElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-link': VlLinkElement;
    }
}
