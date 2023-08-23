import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { BaseTitleOfType } from './base/base-title.element';

@elementStyles()
@webComponent('vl-h3', { extends: 'h3' })
export class VlH3Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h3': VlH3Element;
    }
}
