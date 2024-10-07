import { BaseElementOfType } from '@domg-wc/common';

export class BaseTitleOfType extends BaseElementOfType(HTMLHeadingElement) {
    static get _observedClassAttributes() {
        return ['sans', 'has-border', 'alt', 'no-space-bottom'];
    }

    connectedCallback() {
        this.classList.add('vl-title');
        this.classList.add('vl-title--' + this.tagName.toLowerCase());
    }

    get _classPrefix() {
        return 'vl-title--';
    }
}
