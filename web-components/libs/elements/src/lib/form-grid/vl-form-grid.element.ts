import { VlGridElement } from '../grid/vl-grid.element';
import { define } from '@domg-wc/common-utilities';
import './vl-form-column.element';

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 *
 * @extends VlGridElement
 */
export class VlFormGridElement extends VlGridElement {
    connectedCallback() {
        this.classList.add('vl-form-grid');
    }

    get _classPrefix() {
        return 'vl-form-grid--';
    }
}

define('vl-form-grid', VlFormGridElement, { extends: 'div' });
