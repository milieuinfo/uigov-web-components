import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import styles from './style/vl-checkbox.scss';

/**
 * VlCheckbox
 * @class
 * @classdesc De checkbox laat de gebruiker toe om een of meerdere opties te selecteren uit een lijst. Gebruik de checkbox in formulieren.
 *
 * @extends HTMLElement
 * @mixesvlElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om ervoor te zorgen dat de checkbox getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.
 * @property {boolean} data-vl-disabled - Attribuut wordt gebruikt om te voorkomen dat de gebruiker de checkbox kan selecteren.
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om aan te duiden dat de checkbox verplicht is.
 * @property {boolean} data-vl-label - Attribuut wordt gebruikt om label te definiëren via een attribuut ter vervanging van een slot element.
 * @property {boolean} data-vl-name - Attribuut wordt gebruikt om checkbox te identificeren.
 * @property {boolean} data-vl-single - Attribuut wordt gebruikt om alleen een checkbox te tonen zonder label.
 * @property {boolean} data-vl-switch - Attribuut wordt gebruikt om een checkbox variant te genereren met de stijl van een switch.
 * @property {boolean} data-vl-value - Attribuut wordt gebruikt om de checkbox waarde te bepalen.
 */
export class VlCheckboxComponent extends BaseElementOfType(HTMLElement) {
    static get formAssociated() {
        return true;
    }

    static get _observedAttributes() {
        return ['label', 'name', 'value', 'checked', 'switch'];
    }

    static get _observedChildClassAttributes() {
        return ['block', 'single', 'disabled', 'error'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
    `);

        if (this.dataset.vlSwitch !== undefined) {
            this._shadow.append(
                this._template(`
        <div class="vl-checkbox--switch__wrapper">
          <input class="vl-checkbox--switch" type="checkbox" id="checkbox" name="checkbox" value="1" />
          <label class="vl-checkbox__label" for="checkbox">
            <span class="vl-checkbox--switch__label">
              <span aria-hidden="true"></span>
            </span>
            <span>
              <slot></slot>
            </span>
          </label>
        </div>
      `)
            );
        } else {
            this._shadow.append(
                this._template(`
        <label id="label" class="vl-checkbox" for="checkbox">
          <input class="vl-checkbox__toggle" type="checkbox" id="checkbox" name="checkbox"/>
          <div class="vl-checkbox__label">
            <i class="vl-checkbox__box" aria-hidden="true"></i>
            <span>
              <slot></slot>
            </span>
          </div>
        </label>
      `)
            );
        }

        if (this.attachInternals) {
            this._internals = this.attachInternals();
        } else {
            this._internals = null;
        }
    }

    connectedCallback() {
        this._inputElement.onchange = this._toggle;
        this._inputElement.oninput = (event: any) => event.stopPropagation();
        this._registerChangeEvent();
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
        return this._internals.form;
    }

    /**
     * Returns the element's current validity state.
     *
     * @return {ValidityState}
     */
    get validity() {
        return this._internals.validity;
    }

    /**
     * Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints. This value can be set by the setCustomValidity method.
     *
     * @return {string}
     */
    get validationMessage() {
        return this._internals.validationMessage;
    }

    /**
     * Returns whether the element is a candidate for constraint validation.
     *
     * @return {boolean}
     */
    get willValidate() {
        return this._internals.willValidate;
    }

    /**
     * Geeft de waarde van het checkbox input element.
     *
     * @return {boolean}
     */
    get checked() {
        return this._inputElement.checked;
    }

    /**
     * Zet de waarde van het checkbox input element.
     *
     * @param {boolean} value
     */
    set checked(value) {
        this._inputElement.checked = value;
    }

    /**
     * Triggert een toggle van de checkbox zonder te klikken op de checkbox.
     *
     * @return {void}
     */
    toggle() {
        this._inputElement.click();
    }

    get _isSingle() {
        return this.hasAttribute('single');
    }

    get _classPrefix() {
        return 'vl-checkbox--';
    }

    get _inputElement() {
        return this._element.querySelector('input');
    }

    get _labelElement() {
        return this._element.querySelector('.vl-checkbox__label > span:not(.vl-checkbox--switch__label)');
    }

    get _labelSlotElement() {
        return this._element.querySelector('slot');
    }

    _toggle() {
        let checked;
        const parent = this.getRootNode().host;
        if (parent._checked && Array.isArray(parent._checked)) {
            const value = JSON.parse(this.value);
            if (parent._checked.indexOf(value) > -1) {
                parent._checked.splice(parent._checked.indexOf(value), 1);
            } else {
                parent._checked.push(value);
            }
            checked = parent._checked;
            parent.setAttribute('data-vl-checked', JSON.stringify(checked));
        } else {
            checked = this.checked;
        }
        parent.dispatchEvent(
            new CustomEvent('input', {
                detail: this.checked,
                bubbles: true,
                composed: true,
            })
        );
    }

    _labelChangedCallback(oldValue: string, newValue: string) {
        this._labelElement.textContent = newValue;
    }

    _nameChangedCallback(oldValue: string, newValue: string) {
        if (this._inputElement.name != newValue) {
            this._inputElement.name = newValue;
            this.setAttribute('name', newValue);
        }
    }

    _valueChangedCallback(oldValue: string, newValue: string) {
        this._inputElement.value = newValue;
    }

    _checkedChangedCallback(oldValue: string, newValue: string) {
        try {
            this._checked = JSON.parse(newValue);
        } catch (error) {
            this._checked = newValue != undefined;
        }

        if (!Array.isArray(this._checked)) {
            this._inputElement.checked = this._checked;
        } else if (this._checked.indexOf(JSON.parse(this._inputElement.value)) > -1) {
            this._inputElement.checked = true;
        }
    }

    _disabledChangedCallback(oldValue: string, newValue: string) {
        this._inputElement.disabled = newValue != undefined;
    }

    _singleChangedCallback(oldValue: string, newValue: string) {
        this._toggleClass(this._labelElement, newValue, 'vl-u-visually-hidden');
    }

    _isTextNode(node: Element) {
        return node.nodeType === Node.TEXT_NODE;
    }

    _removeNode(node: Element) {
        node.remove();
    }

    _registerChangeEvent() {
        this._inputElement.addEventListener('change', () => this.dispatchEvent(new Event('change')));
    }
}

define('vl-checkbox', VlCheckboxComponent);
