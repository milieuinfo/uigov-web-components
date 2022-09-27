import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import styles from './style/vl-cookie-consent.scss';

export class VlCookieConsentOptIn extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['label', 'description', 'checked', 'mandatory'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <div>
          <vl-checkbox></vl-checkbox>
      </div>
    `);
    }

    get checked() {
        return this._checkboxElement.checked;
    }

    get _checkboxElement() {
        return this._element.querySelector('vl-checkbox');
    }

    get _descriptionElement() {
        return this._element.querySelector('#description');
    }

    _getDescriptionTemplate(description: string) {
        return this._template(`
      <p id="description" is="vl-form-annotation" data-vl-block>${description}</p>
    `);
    }

    _labelChangedCallback(oldValue: string, newValue: string) {
        this._checkboxElement.setAttribute('data-vl-label', newValue);
    }

    _descriptionChangedCallback(oldValue: string, newValue: string) {
        if (newValue) {
            if (this._descriptionElement) {
                this._descriptionElement.textContent = newValue;
            } else {
                this._element.appendChild(this._getDescriptionTemplate(newValue));
            }
        } else {
            this._descriptionElement.remove();
        }
    }

    _checkedChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this._checkboxElement.setAttribute('data-vl-checked', '');
        }
    }

    _mandatoryChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this._checkboxElement.setAttribute('data-vl-checked', '');
            this._checkboxElement.setAttribute('data-vl-disabled', '');
        }
    }
}

define('vl-cookie-consent-opt-in', VlCookieConsentOptIn);
