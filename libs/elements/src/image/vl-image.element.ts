import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-image', { extends: 'img' })
export class VlImageElement extends BaseElementOfType(HTMLImageElement) {
    connectedCallback() {
        this.classList.add('vl-image');
        if (!this.alt) {
            this.alt = '';
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-image': VlImageElement;
    }
}
