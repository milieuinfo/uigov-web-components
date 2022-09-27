import { awaitUntil, BaseElementOfType, define } from '@domg-lib/common-utilities';
import { vlFormValidation, vlFormValidationElement, vlPattern } from '@domg-lib/elements';
import './vl-datepicker.lib.js';
import styles from './style/vl-datepicker.scss';

declare const vl: any;

Promise.all([vlFormValidation.ready(), vlPattern.ready()]).then(() => define('vl-datepicker', VlDatepickerComponent));

/**
 * VlDatepicker
 * @class
 * @classdesc Gebruik de vl-datepicker om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {(range | time | date-time)} data-vl-type - Attribuut bepaalt het soort datepicker.
 * @property {string} data-vl-format - Attribuut bepaalt het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019).
 * @property {string} data-vl-visual-format - Attribuut bepaalt het visueel formaat van de datum/tijd waarde.
 * @property {string} data-vl-selected-date - Attribuut voor een vooringestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.
 * @property {string} data-vl-min-date - Attribuut voor een minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.
 * @property {string} data-vl-max-date - Attribuut voor een maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.
 * @property {string} data-vl-min-time - Attribuut voor een minimum tijd conform het ingestelde formaat (bv. '09:00').
 * @property {string} data-vl-max-time - Attribuut voor een maximum tijd conform het ingestelde format (bv. '17:00').
 * @property {boolean} data-vl-am-pm - Attribuut om de 12-uurs AM/PM timepicker te activeren.
 * @property {boolean} data-vl-error - Attribuut om aan te geven dat de datepicker een error bevat.
 * @property {boolean} data-vl-success - Attribuut om aan te geven dat de datepicker geen error bevat.
 * @property {boolean} data-vl-value - Attribuut om de waarde te definiëren.
 * @property {string} data-vl-pattern - Attribuut om aan te geven aan welk patroon de input moet voldoen.
 * @property {string} data-vl-name - Attribuut om aan de naam te definiëren.
 */
export class VlDatepickerComponent extends vlFormValidationElement(BaseElementOfType(HTMLElement)) {
    static get _observedAttributes() {
        return vlFormValidation
            ._observedAttributes()
            .concat([
                'type',
                'format',
                'visual-format',
                'selected-date',
                'min-date',
                'max-date',
                'min-time',
                'max-time',
                'am-pm',
                'error',
                'success',
                'value',
                'pattern',
            ]);
    }

    constructor() {
        super(`
      <style>
        ${styles}

        #wrapper {
          position: relative;
        }

        .flatpickr-calendar {
          display: none;
        }
      </style>
      <div is="vl-input-group" id="wrapper" data-vl-datepicker>
        <input id="input" is="vl-input-field" data-vl-block type="text" class="js-vl-datepicker-input"/>
        <button id="button" is="vl-button-input-addon" type="button" class="js-vl-datepicker-toggle">
          <span id="icon" is="vl-icon" data-vl-icon="calendar"></span>
        </button>
      </div>
    `);
    }

    connectedCallback() {
        this.dress();
        this._registerChangeEvent();
    }

    set value(value) {
        if (this._flatpickr) {
            this._flatpickr.setDate(value, true, this._format);
        } else {
            this._inputElement.value = value;
        }
    }

    get value() {
        return this._inputElement.value;
    }

    get _flatpickr() {
        return this._element._flatpickr;
    }

    /**
     * Initialiseer de datepicker config.
     */
    dress() {
        if (!this._dressed) {
            awaitUntil(() => this._inputElement.classList.contains('vl-input-field')).then(() => {
                vl.datepicker.dress(this._element);
                this._dressFormValidation();
                this._dressPattern();
            });
        }
    }

    /**
     * Geeft focus aan het datepicker input element.
     */
    focus() {
        this._visibleInputElement.focus();
    }

    get _attributePrefix() {
        return 'data-vl-datepicker-';
    }

    get _inputElement() {
        return this._element.querySelector('#input');
    }

    get _visibleInputElement() {
        return this._element.querySelector('input:not([type="hidden"])');
    }

    get _format() {
        return this.getAttribute('format');
    }

    get _dressed() {
        return this._flatpickr != undefined;
    }

    _typeChangedCallback(oldValue: string, newValue: string) {
        if (oldValue) {
            console.error('The "type" attribute cannot be changed.');
        } else {
            switch (newValue) {
                case 'time':
                    this._element.setAttribute(this._attributePrefix + 'enable-time', 'true');
                    this._element.setAttribute(this._attributePrefix + 'disable-date', 'true');
                    break;
                case 'date-time':
                    this._element.setAttribute(this._attributePrefix + 'enable-time', 'true');
                    break;
                default:
                    this._element.setAttribute(this._attributePrefix + newValue, '');
                    break;
            }
        }
    }

    _formatChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'format', newValue);
    }

    _visualFormatChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'visual-format', newValue);
    }

    _selectedDateChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'selected-date', newValue);
    }

    _minDateChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'min-date', newValue);
    }

    _maxDateChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'max-date', newValue);
    }

    _minTimeChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'min-time', newValue);
    }

    _maxTimeChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + 'max-time', newValue);
    }

    _amPmChangedCallback(oldValue: string, newValue: string) {
        this._element.setAttribute(this._attributePrefix + '24hr-time', newValue == undefined);
    }

    _errorChangedCallback(oldValue: string, newValue: string) {
        this.__stateChanged({ value: newValue, type: 'error' });
    }

    _valueChangedCallback(oldValue: string, newValue: string) {
        this.value = newValue;
    }

    _successChangedCallback(oldValue: string, newValue: string) {
        this.__stateChanged({ value: newValue, type: 'success' });
    }

    _patternChangedCallback(oldValue: string, newValue: string) {
        this._inputElement.setAttribute('data-vl-pattern', newValue);
    }

    _registerChangeEvent() {
        this._inputElement.addEventListener('change', () => this.dispatchEvent(new Event('change')));
    }

    _dressPattern() {
        vl.pattern.undressAll();
        Object.assign(this, vlPattern);
        // this.dress(this._inputElement);
        this.dress();
        this.dress = this._dress;
    }

    __stateChanged({ value, type }: any) {
        if (value != undefined) {
            this._inputElement.setAttribute(`data-vl-${type}`, '');
            this._visibleInputElement.classList.add(`vl-input-field--${type}`);
        } else {
            this._inputElement.removeAttribute(`data-vl-${type}`);
            this._visibleInputElement.classList.remove(`vl-input-field--${type}`);
        }
    }
}
