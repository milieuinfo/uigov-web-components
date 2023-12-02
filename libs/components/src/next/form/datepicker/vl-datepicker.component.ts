import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import {
    datepickerStyle,
    iconStyle,
    inputAddonStyle,
    inputFieldStyle,
    inputGroupStyle,
    tooltipStyle,
} from '@domg/govflanders-style/component';
import datepickerUigStyle from './vl-datepicker.uig-css';
import { CSSResult, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FormControl, FormControlDefaults } from '../form-control/FormControl';

import { Options } from 'flatpickr/dist/types/options';
import { Instance } from 'flatpickr/dist/types/instance';
import flatpickr from 'flatpickr';

import Dutch from 'flatpickr/dist/l10n/nl.js';
import { classMap } from 'lit/directives/class-map.js';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlButtonInputAddon, VlIconElement } from '@domg-wc/elements';
import { live } from 'lit/directives/live.js';

export const DatepickerDefaults = {
    ...FormControlDefaults,
    type: '',
    format: 'd.m.Y',
    visualFormat: 'd.m.Y',
    selectedDate: '',
    minDate: '',
    maxDate: '',
    minTime: '',
    maxTime: '',
    amPm: '',
    value: '',
    pattern: '',
    name: '',
};

/**
 * VlDatepicker
 * @class
 * @classdesc Gebruik de vl-datepicker om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {(range | time | date-time)} type - Attribuut bepaalt het soort datepicker.
 * @property {string} format - Attribuut bepaalt het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019).
 * @property {string} visual-format - Attribuut bepaalt het visueel formaat van de datum/tijd waarde.
 * @property {string} selected-date - Attribuut voor een vooringestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.
 * @property {string} min-date - Attribuut voor een minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.
 * @property {string} max-date - Attribuut voor een maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.
 * @property {string} min-time - Attribuut voor een minimum tijd conform het ingestelde formaat (bv. '09:00').
 * @property {string} max-time - Attribuut voor een maximum tijd conform het ingestelde format (bv. '17:00').
 * @property {boolean} am-pm - Attribuut om de 12-uurs AM/PM timepicker te activeren.
 * @property {boolean} error - Attribuut om aan te geven dat de datepicker een error bevat.
 * @property {boolean} success - Attribuut om aan te geven dat de datepicker geen error bevat.
 * @property {boolean} value - Attribuut om de waarde te definiëren.
 * @property {string} pattern - Attribuut om aan te geven aan welk patroon de input moet voldoen.
 * @property {string} name - Attribuut om aan de naam te definiëren.
 */
@customElement('vl-datepicker-next')
export class VlDatepickerComponent extends FormControl {
    name = DatepickerDefaults.name;
    value = DatepickerDefaults.value;
    private type = DatepickerDefaults.type;
    private format = DatepickerDefaults.format;
    private visualFormat = DatepickerDefaults.visualFormat;
    private selectedDate = DatepickerDefaults.selectedDate;
    private minDate = DatepickerDefaults.minDate;
    private maxDate = DatepickerDefaults.maxDate;
    private minTime = DatepickerDefaults.minTime;
    private maxTime = DatepickerDefaults.maxTime;
    private amPm = DatepickerDefaults.amPm;
    private pattern = DatepickerDefaults.pattern;
    private instance?: Instance;
    private calenderObserver: MutationObserver | undefined;
    private initialValue = '';

    static {
        registerWebComponents([VlButtonInputAddon, VlIconElement]);
    }

    static get properties() {
        return {
            type: { type: String },
            format: { type: String },
            visualFormat: { attribute: 'visual-format', type: String },
            selectedDate: { attribute: 'selected-date', type: String },
            minDate: { attribute: 'min-date', type: String },
            maxDate: { attribute: 'max-date', type: String },
            minTime: { attribute: 'min-time', type: String },
            maxTime: { attribute: 'max-time', type: String },
            amPm: { attribute: 'am-pm', type: String },
            error: { type: Boolean, reflect: true },
            success: { type: Boolean, reflect: true },
            value: { type: String, reflect: true },
            pattern: { type: String },
        };
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [
            resetStyle,
            baseStyle,
            iconStyle,
            inputFieldStyle,
            inputAddonStyle,
            inputGroupStyle,
            tooltipStyle,
            datepickerStyle,
            datepickerUigStyle,
        ];
    }

    constructor() {
        super();

        // Fix tot <-> tot-en-met
        if (Dutch?.nl) {
            Dutch.nl.rangeSeparator = ' tot en met ';
        }
    }

    /**
     * Geeft de flatpickr instance terug.
     */
    getFlatpickr() {
        return this.instance;
    }

    private getDatePicker() {
        return this.shadowRoot?.querySelector('#wrapper') as HTMLDivElement;
    }

    private getFlatpickrWrapper() {
        return this.shadowRoot?.querySelector('.flatpickr-wrapper') as HTMLDivElement;
    }

    private getFlatpickrCalendar() {
        return this.shadowRoot?.querySelector('.flatpickr-calendar') as HTMLDivElement;
    }

    private getHiddenInputElement(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input[type="hidden"]') as HTMLInputElement;
    }

    private getVisibleInputElement(): HTMLInputElement | undefined | null {
        return this.renderRoot?.querySelector('input:not([type="hidden"])') as HTMLInputElement;
    }

    parseSelectedDate(): string {
        const formatDate = (date: Date) => flatpickr.formatDate(date, this.format);
        if (this.selectedDate === 'today') {
            return formatDate(new Date());
        } else {
            return this.selectedDate;
        }
    }

    getDynamicOptions(): Options {
        // minTime en maxTime gebruiken om defaultHour en defaultMinute te bepalen
        let defaultHour: number | undefined;
        let defaultMinute: number | undefined;
        if (this.minTime) {
            defaultHour = Number(this.minTime.split(':')[0]);
            defaultMinute = Number(this.minTime.split(':')[1]);
        } else if (this.maxTime) {
            defaultHour = Number(this.maxTime.split(':')[0]);
            defaultMinute = Number(this.maxTime.split(':')[1]);
        }

        const defaultDate = this.parseSelectedDate();
        return {
            altInput: !!this.visualFormat,
            altFormat: this.visualFormat,
            allowInput: !(this.disabled || this.readonly),
            dateFormat: this.format,
            defaultHour: defaultHour,
            defaultMinute: defaultMinute,
            maxDate: this.maxDate,
            minDate: this.minDate,
            defaultDate: defaultDate,
            enableTime: this.type === 'time' || this.type === 'date-time',
            noCalendar: this.type === 'time',
            time_24hr: !this.amPm,
            minTime: this.minTime,
            maxTime: this.maxTime,
            mode: this.type !== 'range' ? 'single' : 'range',
        };
    }

    getOptions(): Options {
        const datepickerButton = this.shadowRoot?.querySelector('button');
        const datepicker = this.shadowRoot?.querySelector('#wrapper') as HTMLInputElement;

        const staticOptions = {
            autoFillDefaultTime: true,
            locale: Dutch.nl,
            clickOpens: false,
            onChange: this.handleDateChange,
            wrap: true,
            positionElement: datepickerButton,
            appendTo: datepicker,
        };

        let options = {
            ...staticOptions,
            ...this.getDynamicOptions(),
        } as unknown as Options;

        Object.keys(options).forEach((key) => {
            if (options[key as keyof Options] === undefined) delete options[key as keyof Options];
        });
        return options;
    }

    protected firstUpdated(changedProperties: Map<string, unknown>): void {
        super.firstUpdated(changedProperties);
        this.initializeComponent();

        if (!this.isInShadowDOM()) {
            this.getFlatpickrCalendar()?.classList.add('flatpickr-calendar--push-top');
        }

        if (changedProperties.has('selectedDate')) {
            if (this.selectedDate) {
                this.updateValue(this.parseSelectedDate());
            }
        }

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        const options = this.getDynamicOptions();
        this.updateOptionsForInstance(options);

        if (changedProperties.has('value')) {
            this.updateValue(this.value);
            console.log('after changedProperties, value', this.value);
        }

        this.processVisibleInputOnUpdate(changedProperties);
    }

    /**
     * Flatpickr maakte een 2e input, die niet gekend is in Lit bij opstart / render()
     * Daarom moeten we de properties van het visible input element zelf updaten.
     * @private
     * @param changedProperties
     */
    private processVisibleInputOnUpdate(changedProperties: Map<string, unknown>) {
        const visibleInput = this.getVisibleInputElement();

        if (changedProperties.has('disabled')) {
            if (this.disabled) {
                visibleInput?.setAttribute('disabled', '');
            } else {
                visibleInput?.removeAttribute('disabled');
            }
            this.enableDisableToggle();
        }

        if (changedProperties.has('readonly')) {
            if (this.readonly) {
                visibleInput?.setAttribute('readonly', '');
            } else {
                visibleInput?.removeAttribute('readonly');
            }
            this.enableDisableToggle();
        }

        if (changedProperties.has('label')) {
            visibleInput?.setAttribute('aria-label', this.label);
        }

        if (changedProperties.has('name')) {
            visibleInput?.setAttribute('name', this.name);
        }

        this.updateVisibleInputStyles();
    }

    /**
     * Update de stijl van het input element. Flatpickr kopiëert creëert van het input element een hidden input element en een visible input element.
     * Gezien we alleen het hidden input element hebben bij opstart, moeten we de stijl van het visible input element zelf updaten.
     */
    private updateVisibleInputStyles() {
        const visibleInput = this.getVisibleInputElement();
        const inputClasses = this.getInputClasses();
        if (visibleInput) {
            visibleInput.setAttribute('aria-invalid', this.error ? 'true' : 'false');
            const enabledClasses = Object.entries(inputClasses)
                .filter(([key, show]) => show)
                .reduce((classList: string[], [key, show]) => (show ? [...classList, key] : classList), []);
            visibleInput.classList.add(...enabledClasses);
            visibleInput.classList.remove(...Object.keys(inputClasses).filter((key) => !inputClasses[key]));
        }
    }

    private enableDisableToggle() {
        const toggleButton = this.renderRoot.querySelector('button#button');
        if (toggleButton) {
            if (this.disabled || this.readonly) {
                toggleButton.setAttribute('disabled', '');
            } else {
                toggleButton.removeAttribute('disabled');
            }
        }
    }

    private updateOptionsForInstance(options: Options) {
        Object.keys(options)
            .map((key) => key as keyof Options)
            .forEach((key) => {
                this.instance?.set(key, options[key as keyof Options]);
            });
    }

    private updateCalendarPosition() {
        const calendar = this.instance?.calendarContainer;
        const rect = this.getVisibleInputElement()?.getBoundingClientRect();
        if (!calendar || !rect) return;
        calendar.style.top = `${rect.height}px`;
        calendar.style.left = `${rect.left}px`;
    }

    private initializeComponent() {
        if (this.getDatePicker()) {
            this.instance = flatpickr(this.getDatePicker(), this.getOptions()) as unknown as Instance;
            this.getDatePicker().classList.add('static');
            this.calenderObserver = new MutationObserver(() => {
                this.updateCalendarPosition();
            });
            this.calenderObserver.observe(this.instance.calendarContainer, {
                attributes: true,
                attributeFilter: ['style'],
            });
        }
    }

    private destroyComponent() {
        if (this.instance) {
            this.instance.destroy();
        }
        this.calenderObserver?.disconnect();
    }

    private isInShadowDOM() {
        return this.getRootNode() instanceof ShadowRoot;
    }

    /**
     * Geeft de classes terug voor zowel hidden als visible input element.
     * @private
     */
    private getInputClasses(): Record<string, boolean> {
        return {
            'vl-input-field--error': this.error,
            'vl-input-field--success': this.success,
            'vl-input-field--block': this.block,
            'vl-input-field--disabled': this.disabled,
        };
    }

    protected render(): TemplateResult {
        const inputClasses = this.getInputClasses();
        const buttonClasses = {
            'vl-input-addon--error': this.error,
            'vl-input-addon--success': this.success,
            'vl-input-addon--disabled': this.disabled,
        };
        return html`
            <div class="vl-input-group" id="wrapper">
                <input
                    id=${this.id}
                    name=${this.name || this.id}
                    type="text"
                    class="vl-input-field js-vl-datepicker-input ${classMap(inputClasses)}"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?error=${this.error}
                    ?success=${this.success}
                    pattern=${this.pattern}
                    aria-invalid=${this.error}
                    aria-label=${this.label}
                    .value=${live(this.value)}
                    data-input
                />
                <button
                    id="button"
                    type="button"
                    class="vl-input-addon js-vl-datepicker-toggle  ${classMap(buttonClasses)}"
                    data-toggle
                    ?disabled=${this.disabled}
                    aria-label="toggle"
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `;
    }

    connectedCallback() {
        console.log('connectedCallback');
        super.connectedCallback();
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
        super.disconnectedCallback();
        this.destroyComponent();
    }

    handleDateChange = (date: string) => {
        if (!date) return;
        const value = flatpickr.formatDate(new Date(date), this.format);
        this.updateValue(value);
    };

    updateValue = (value: string) => {
        this.value = value;
        if (this.getHiddenInputElement() && value) this.getHiddenInputElement()!.value = value;
        this.setValue(value);
    };

    getValue() {
        return this.getVisibleInputElement()?.value;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.getHiddenInputElement();
    }

    /**
     * Geeft focus aan het datepicker input element.
     */
    focus() {
        this.getVisibleInputElement()?.focus();
    }

    resetFormControl() {
        super.resetFormControl();
        this.instance?.clear();
        this.updateValue(this.initialValue);
        if (this.initialValue) this.instance?.setDate(this.initialValue, true, this.format);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-datepicker-next': VlDatepickerComponent;
    }
}
