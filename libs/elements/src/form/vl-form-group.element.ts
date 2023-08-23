import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlFormGroup
 * @class
 * @classdesc Formulier groep element.
 *
 * @extends HTMLElement
 */
@elementStyles()
@webComponent('vl-form-group', { extends: 'div' })
export class VlFormGroup extends BaseElementOfType(HTMLDivElement) {
    connectedCallback() {
        this._addClasses();
    }

    _addClasses() {
        this.classList.add('vl-form__group');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-group': VlFormGroup;
    }
}
