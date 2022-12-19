import { BaseElementOfType, define } from '@domg-wc/common-utilities';

export class VlText extends BaseElementOfType(HTMLSpanElement) {
    static get _observedClassAttributes() {
        return ['visually-hidden'];
    }

    get _classPrefix() {
        return 'vl-u-';
    }
}

define('vl-text', VlText, { extends: 'span' });
