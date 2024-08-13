import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-input-group', { extends: 'div' })
export class VlInputGroupElement extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this.classList.add('vl-input-group');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-group': VlInputGroupElement;
    }
}
