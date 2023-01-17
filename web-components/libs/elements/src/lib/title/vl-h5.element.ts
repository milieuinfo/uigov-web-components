import { webComponent } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

@webComponent('vl-h5', { extends: 'h5' })
export class VlH5Element extends BaseTitleOfType {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-h5': VlH5Element;
    }
}
