import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-introduction', { extends: 'p' })
export class VlIntroductionElement extends BaseElementOfType(HTMLParagraphElement) {
    connectedCallback() {
        this.classList.add('vl-introduction');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-introduction': VlIntroductionElement;
    }
}
