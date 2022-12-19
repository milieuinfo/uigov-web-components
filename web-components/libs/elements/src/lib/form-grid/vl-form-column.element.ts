import { define } from '@domg-wc/common-utilities';
import { VlColumnElement } from '../grid/vl-column.element';

/**
 * VlFormColumn
 * @class
 * @classdesc Class die een kolom in een formulier grid layout representeert.
 *
 * @extends VlColumn
 */
export class VlFormColumn extends VlColumnElement {
    connectedCallback() {
        super.classList.add('vl-form-column');
    }

    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}

define('vl-form-column', VlFormColumn, { extends: 'div' });
