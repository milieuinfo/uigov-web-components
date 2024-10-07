import { webComponent } from '@domg-wc/common';
import { VlGridElement } from '../grid/vl-grid.element';
import './vl-form-column.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponent('vl-form-grid', { extends: 'div' })
export class VlFormGridElement extends VlGridElement {
    connectedCallback() {
        this.classList.add('vl-form-grid');
    }

    get _classPrefix() {
        return 'vl-form-grid--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-grid': VlFormGridElement;
    }
}
