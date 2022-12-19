import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import { vlRadioGroupComponent as vlRadioGroup } from './vl-radio-group.component';

import styles from './style/vl-radio.scss';

export class VlRadio extends BaseElementOfType(HTMLElement) {
    static get formAssociated() {
        return true;
    }

    static get _observedAttributes() {
        return ['label', 'name', 'value', 'checked'];
    }

    static get _observedChildClassAttributes() {
        return ['block', 'single', 'disabled', 'error'];
    }

    constructor() {
        super(`
      <style>
      ${styles}
      </style>

      <label class="vl-radio" for="radio">
        <input class="vl-radio__toggle" type="radio" id="radio" name="radio"/>
        <div class="vl-radio__label">
          <span id="label-text">
            <slot></slot>
          </span>
        </div>
      </label>
    `);

        Object.assign(this, vlRadioGroup);
        if (this.attachInternals) {
            this._internals = this.attachInternals();
        }
    }

    connectedCallback() {
        this._inputElement.addEventListener('change', () => this._check());
        this._registerChangeEvent();
        setTimeout(() => {
            this.registerKeyEvents(this._radios);
            this.transmitFocus(this._radios);
        });
    }

    /**
     * Callback called when the form is reset.
     */
    formResetCallback() {
        this.checked = this.hasAttribute('checked');
    }

    /**
     * Returns a reference to the parent <form> element.
     *
     * @return {HTMLFormElement}
     */
    get form() {
        return this._internals ? this._internals.form : undefined;
    }

    /**
     * Returns the element's current validity state.
     *
     * @return {ValidityState}
     */
    get validity() {
        return this._internals ? this._internals.validity : undefined;
    }

    /**
     * Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints. This value can be set by the setCustomValidity method.
     *
     * @return {string}
     */
    get validationMessage() {
        return this._internals ? this._internals.validationMessage : undefined;
    }

    /**
     * Returns whether the element is a candidate for constraint validation.
     *
     * @return {boolean}
     */
    get willValidate() {
        return this._internals ? this._internals.willValidate : undefined;
    }

    /**
     * Geeft de value attribuut waarde van het input element.
     * @return {string}
     */
    get value() {
        return this._inputElement.value;
    }

    /**
     * Geeft de huidige status van het input element.
     * @return {boolean}
     */
    get checked() {
        return this._inputElement.checked;
    }

    /**
     * Zet de status van het input element.
     * @param {boolean} value
     */
    set checked(value) {
        this._inputElement.checked = value;
        if (value) {
            this._check();
        }
        //  return value;
    }

    /**
     * Geeft de disabled attribuut waarde van het input element dat een indicatie geeft of er interactie mogelijk is.
     * @return {boolean}
     */
    get disabled() {
        return this._inputElement.disabled;
    }

    /**
     * Zet de disabled attribuut waarde van het input element om interactie uit of in te schakelen.
     * @param {boolean} value
     */
    set disabled(value) {
        this._inputElement.disabled = value;
    }

    /**
     * Geeft terug of het input element focus heeft.
     * @return {boolean}
     */
    get hasFocus() {
        return this._inputElement == this._getActiveElement();
    }

    get _classPrefix() {
        return 'vl-radio--';
    }

    get _inputElement() {
        return this._element.querySelector('input');
    }

    get _labelText() {
        return this._element.querySelector('#label-text');
    }

    get _radios() {
        const isSlot = this.assignedSlot != undefined;
        const rootNode = isSlot ? this.closest('vl-radio-group') : this.getRootNode();
        return [
            ...(rootNode || this.getRootNode()).querySelectorAll(`vl-radio[data-vl-name='${this.dataset.vlName}']`),
        ];
    }

    check() {
        this._inputElement.click();
    }

    focus() {
        this._inputElement.focus();
    }

    _check() {
        this.focus();
        this._inputElement.tabIndex = 0;
        this._radios
            .filter((radio) => radio.checked)
            .filter((radio) => radio !== this)
            .forEach((radio) => (radio.checked = false));
        this._radios.filter((radio) => !radio.checked).forEach((radio) => (radio._inputElement.tabIndex = '-1'));
    }

    _labelChangedCallback(oldValue: string, newValue: string) {
        this._labelText.textContent = newValue;
    }

    _valueChangedCallback(oldValue: string, newValue: string) {
        this._inputElement.value = newValue;
    }

    _nameChangedCallback(oldValue: string, newValue: string) {
        if (this._inputElement.name != newValue) {
            this._inputElement.name = newValue;
            this.setAttribute('name', newValue);
        }
    }

    _checkedChangedCallback(oldValue: boolean, newValue: boolean) {
        this._inputElement.checked = newValue != null;
    }

    _disabledChangedCallback(oldValue: string, newValue: string) {
        this._inputElement.disabled = newValue != null;
    }

    _singleChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._labelText, newValue, 'vl-u-visually-hidden');
    }

    _getActiveElement(element: any = document): any {
        if (element.activeElement && element.activeElement.shadowRoot) {
            return this._getActiveElement(element.activeElement.shadowRoot);
        }
        return element.activeElement || element;
    }

    _registerChangeEvent() {
        this._inputElement.addEventListener('change', () => this.dispatchEvent(new Event('change')));
    }
}

define('vl-radio', VlRadio);
