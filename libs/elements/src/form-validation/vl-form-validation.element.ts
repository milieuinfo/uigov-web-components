import { Class, VL } from '@domg-wc/common';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';
import './vl-form-validation.lib.js';
import { vlFormValidation } from './vl-form-validation';

declare const vl: VL;

/**
 * Gebruik de form validation element mixin in combinatie met elementen die formulier validatie bevatten.
 * @mixin vlFormValidationElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
export const vlFormValidationElement = (SuperClass: Class): Class => {
    return class extends SuperClass {
        static get formAssociated() {
            return true;
        }

        constructor(html: any) {
            super(html);
            if (this.attachInternals && customElements.get(this.localName)) {
                this._internals = this.attachInternals();
            }
        }

        disconnectedCallback() {
            if (this._observer) {
                this._observer.disconnect();
            }
        }

        /**
         * Sets a custom validity message for the element.
         * used in vl-form-validation.lib.js
         *
         * @param {string} message
         */
        setCustomValidity(message: string): void {
            if (this._inputElement) {
                this._inputElement.setCustomValidity(message);
            } else if (this._internals) {
                if (message) {
                    this._internals.setValidity({ customError: true }, message);
                } else {
                    this._internals.setValidity({});
                }
            } else if (super.setCustomValidity) {
                super.setCustomValidity(message);
            }
        }

        /**
         * Returns true if the element's child controls are subject to constraint validation and satisfy those contraints; returns false if some controls do not satisfy their constraints. Fires an event named invalid at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to false.
         *
         * @return {boolean}
         */
        checkValidity(): boolean {
            if (this._inputElement) {
                return this._inputElement.checkValidity();
            } else if (this._internals) {
                return this._internals.checkValidity();
            } else if (super.checkValidity) {
                return super.checkValidity();
            } else {
                return true;
            }
        }

        /**
         * reset validatie van individueel form element
         */
        resetValidity(): void {
            const thisElement = this as unknown as HTMLElement;
            // naamgeving "resetInput" kan verwarrend lijken, de value van de input blijft dezelfde, enkel de validatie word gerest
            vl.formValidation.resetInput(thisElement);
        }

        _dressFormValidation(): void {
            if (this.form && this.form.hasAttribute('data-vl-validate')) {
                const escapeFieldNames = this.form.hasAttribute('data-vl-escape-field-names');

                this._setClassAttributes();
                this._observer = this._observeFormValidationClasses();
                Object.assign(this, vlFormValidation);
                this.dress(this.form, escapeFieldNames);
                this.addEventListener('focus', () => this.focus());
            }
        }

        get _inputElement(): HTMLInputElement | null {
            if (this.shadowRoot) {
                return this.shadowRoot.querySelector('input');
            } else {
                return null;
            }
        }

        /**
         * hier worden data-vl-error & data-vl-succes ingesteld
         */
        _observeFormValidationClasses() {
            const node = this as unknown as Node;
            const observer = new MutationObserver((mutations) => {
                ['error', 'success'].forEach((type) => {
                    if (
                        mutations.find(({ target }) => {
                            const mutationTarget = <HTMLElement>target;
                            return [...mutationTarget.classList].find((clazz) =>
                                clazz.includes(this.getAttribute(`data-vl-${type}-class`))
                            );
                        })
                    ) {
                        if (!this.hasAttribute(`data-vl-${type}`)) {
                            this.setAttribute(`data-vl-${type}`, '');
                        }
                    } else {
                        this.removeAttribute(`data-vl-${type}`);
                    }
                });
            });
            observer.observe(node, { attributes: true, attributeFilter: ['class'] });
            return observer;
        }

        _nameChangedCallback(oldValue: string, newValue: string) {
            if (this._inputElement && this._inputElement.name != newValue) {
                this._inputElement.name = newValue;
                this.setAttribute('name', newValue);
            }
        }

        _requiredChangedCallback(oldValue: string, newValue: string) {
            const attributes = ['data-required', 'required', 'aria-required'];
            if (newValue == undefined) {
                attributes.forEach((attribute) => {
                    this.removeAttribute(attribute);
                    if (this._inputElement) {
                        this._inputElement.removeAttribute(attribute);
                    }
                });
            } else if (newValue != undefined && oldValue == undefined) {
                attributes.forEach((attribute) => {
                    const value = attribute === 'required' ? '' : 'true';
                    this.setAttribute(attribute, value);
                    if (this._inputElement) {
                        this._inputElement.setAttribute(attribute, value);
                    }
                });
            }
        }

        _dataRequiredChangedCallback(oldValue: string, newValue: string) {
            this._requiredChangedCallback(oldValue, newValue);
        }

        _errorPlaceholderChangedCallback(oldValue: string, newValue: string) {
            this.setAttribute('aria-describedby', newValue);
        }

        _setClassAttributes() {
            this.setAttribute('data-vl-success-class', `vl-input-field--success`);
            this.setAttribute('data-vl-error-class', `vl-input-field--error`);
        }
    };
};
