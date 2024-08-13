import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-icon-wrapper', { extends: 'p' })
export class VlIconWrapperElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this._addClass();
    }

    _addClass() {
        this.classList.add('vl-icon-wrapper');
    }
}

// TODO: een span / HTMLSpanElement is logischer
declare global {
    interface HTMLElementTagNameMap {
        'vl-icon-wrapper': VlIconWrapperElement;
    }
}
