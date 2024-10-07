import { BaseElementOfType, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-property-term', { extends: 'dt' })
export class VlPropertyTermElement extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__label');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-property-term': VlPropertyTermElement;
    }
}
