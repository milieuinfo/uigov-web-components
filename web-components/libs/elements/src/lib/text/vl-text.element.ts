import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

@webComponent('vl-text', { extends: 'span' })
export class VlText extends BaseElementOfType(HTMLSpanElement) {
    static get _observedClassAttributes() {
        return ['visually-hidden'];
    }

    get _classPrefix() {
        return 'vl-u-';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-text': VlText;
    }
}
