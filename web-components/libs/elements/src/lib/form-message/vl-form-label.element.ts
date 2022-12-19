import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlFormLabel
 * @class
 * @classdesc Gebruik de vl-form-label om labels toe te voegen aan een formulier.
 *
 * @extends HTMLLabelElement
 * @mixes BaseElementOfType
 *
 * @property {boolean} data-vl-light - Attribuut wordt gebruikt om het label in een lichte kleur te tonen.
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormLabel extends BaseElementOfType(HTMLLabelElement) {
    static get _observedClassAttributes() {
        return ['light', 'block'];
    }

    connectedCallback() {
        this.classList.add('vl-form__label');
    }

    get _classPrefix() {
        return 'vl-form__label--';
    }
}

define('vl-form-label', VlFormLabel, { extends: 'label' });
