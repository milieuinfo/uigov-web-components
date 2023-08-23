import { webComponent } from '@domg-wc/common-utilities';
import { VlGridElement } from '../grid/vl-grid.element';
import './vl-form-column.element';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 *
 * @extends VlGridElement
 */
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
