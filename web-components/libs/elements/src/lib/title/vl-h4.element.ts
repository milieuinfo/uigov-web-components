import { webComponent } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

@webComponent('vl-h4', { extends: 'h4' })
export class VlH4Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h4': VlH4Element;
    }
}
