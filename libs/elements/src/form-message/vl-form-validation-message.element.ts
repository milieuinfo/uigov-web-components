import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import 'reflect-metadata';

@elementStyles()
@webComponent('vl-form-validation-message', { extends: 'p' })
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-validation-message': VlFormValidationMessage;
    }
}
