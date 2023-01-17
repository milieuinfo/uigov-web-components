import { webComponent } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

@webComponent('vl-h2', { extends: 'h2' })
export class VlH2Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h2': VlH2Element;
    }
}
