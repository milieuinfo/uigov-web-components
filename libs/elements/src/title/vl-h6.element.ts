import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { BaseTitleOfType } from './base/base-title.element';

@elementStyles()
@webComponent('vl-h6', { extends: 'h6' })
export class VlH6Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h6': VlH6Element;
    }
}
