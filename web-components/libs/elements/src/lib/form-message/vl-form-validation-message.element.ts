import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlFormValidationMessage
 * @class
 * @classdesc Gebruik de vl-form-validation-message om een validatie boodschap toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes BaseElementOfType
 *
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om foutboodschap te tonen bij validatiefouten.
 * @property {boolean} data-vl-success - Attribuut wordt gebruikt om boodschap te tonen bij een succesvolle validatie.
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormValidationMessage extends BaseElementOfType(HTMLParagraphElement) {
    constructor() {
        super();
        if (this.hasAttribute('data-vl-error-id')) {
            this.setAttribute('hidden', '');
        }
    }

    static get _observedAttributes() {
        return ['block', 'success'];
    }

    static get _observedClassAttributes() {
        return ['error', 'success'];
    }

    get success() {
        return this.getAttribute('success') != undefined;
    }

    get error() {
        return this.getAttribute('error') != undefined;
    }

    get _validationType() {
        return this.success ? 'success' : 'error';
    }

    get _checkElement() {
        return this._element.querySelector('.vl-vi-check');
    }

    _getCheckTemplate() {
        return this._template('<span class="vl-vi vl-vi-check" aria-hidden="true"></span>');
    }

    get _classPrefix() {
        return `vl-form__`;
    }

    _successChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this._element.append(this._getCheckTemplate());
        } else if (this._checkElement) {
            this._checkElement.remove();
        }
    }

    _blockChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this, newValue, this._classPrefix + this._validationType + '--block');
    }
}

define('vl-form-validation-message', VlFormValidationMessage, { extends: 'p' });
