import { webComponent } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

@webComponent('vl-h1', { extends: 'h1' })
export class VlH1Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h1': VlH1Element;
    }
}
