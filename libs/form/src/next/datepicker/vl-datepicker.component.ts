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
import { CSSResult, html, nothing, TemplateResult } from 'lit';
import { Options } from 'flatpickr/dist/types/options';
import { Instance } from 'flatpickr/dist/types/instance';
import flatpickr from 'flatpickr';
import Dutch from 'flatpickr/dist/l10n/nl.js';
import { classMap } from 'lit/directives/class-map.js';
import { registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlButtonInputAddon, VlIconElement } from '@domg-wc/elements';
import { live } from 'lit/directives/live.js';
import { FormControl, formControlDefaults } from '../form-control/form-control';
import { maskValidator } from './validators';
import { CleaveInstance, MaskOptions } from '../../models/cleave.model';
import Cleave from 'cleave.js';
import { createDateMask, createTimeMask } from './masks';

export const DATEPICKER_TYPES = ['date', 'range', 'time', 'date-time'] as const;
export const datepickerDefaults = {
    ...formControlDefaults,
    block: false as boolean,
    readonly: false as boolean,
    value: '' as string,
    placeholder: '' as string,
    autocomplete: '' as string,
    type: 'date' as (typeof DATEPICKER_TYPES)[number],
    format: '' as string,
    amPm: false as boolean,
    minDate: '' as string,
    maxDate: '' as string,
    minTime: '' as string,
    maxTime: '' as string,
    disableMaskValidation: false as boolean,
    pattern: '' as string,
    regex: null as RegExp | null,
} as const;

const dateRangeSeparator = ' tot en met ';

@webComponent('vl-datepicker-next')
export class VlDatepickerComponent extends FormControl {
    // Properties
    regex = datepickerDefaults.regex; // Wordt enkel gebruikt in de pattern validator

    // Attributes
    private block = datepickerDefaults.block;
    private readonly = datepickerDefaults.readonly;
    private value = datepickerDefaults.value;
    private placeholder = datepickerDefaults.placeholder;
    private autocomplete = datepickerDefaults.autocomplete;
    private type = datepickerDefaults.type;
    private format = datepickerDefaults.format;
    private amPm = datepickerDefaults.amPm;
    private minDate = datepickerDefaults.minDate;
    private maxDate = datepickerDefaults.maxDate;
    private minTime = datepickerDefaults.minTime;
    private maxTime = datepickerDefaults.maxTime;
    private disableMaskValidation = datepickerDefaults.disableMaskValidation; // Wordt enkel gebruikt in de mask validator
    private pattern = datepickerDefaults.pattern; // Wordt enkel gebruikt in de mask validator

    // Variables
    private initialValue = '';
    private flatpickrInstance: Instance | null = null;
    private maskOptions: MaskOptions | null = null; // Wordt enkel gebruikt in de mask validator
    private cleaveInstance: CleaveInstance | null = null;
    private inputValue: string | undefined = ''; // Houdt de waarde van het getoonde inputveld bij

    static {
        registerWebComponents([VlButtonInputAddon, VlIconElement]);
    }

    static formControlValidators = [...FormControl.formControlValidators, maskValidator];

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

    static get properties() {
        return {
            block: { type: Boolean },
            readonly: { type: Boolean },
            value: { type: String }, // Bevat de waarde van het component
            placeholder: { type: String },
            autocomplete: { type: String },
            type: { type: String },
            format: { type: String },
            amPm: { type: Boolean, attribute: 'am-pm' },
            minDate: { type: String, attribute: 'min-date' },
            maxDate: { type: String, attribute: 'max-date' },
            minTime: { type: String, attribute: 'min-time' },
            maxTime: { type: String, attribute: 'max-time' },
            rawValue: { type: Boolean, attribute: 'raw-value' },
            inputValue: { type: String, state: true }, // Houdt de waarde van het getoonde inputveld bij
            pattern: { type: String },
            disableMaskValidation: { type: Boolean, attribute: 'disable-mask-validation' },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        if (Dutch?.nl) {
            Dutch.nl.rangeSeparator = dateRangeSeparator;
            flatpickr.l10ns.default.rangeSeparator = dateRangeSeparator;
        }

        if (!this.initialValue && typeof this.value === 'string' && this.type !== 'range') {
            this.initialValue = this.value;
        }
    }

    firstUpdated(changedProperties: Map<string, unknown>) {
        super.firstUpdated(changedProperties);

        // passen formaat aan indien niet opgegeven
        if (changedProperties.has('type') && !this.format) {
            const timeFormat = 'H:i';
            const dateFormat = 'd.m.Y';
            switch (this.type) {
                case 'date':
                    this.format = dateFormat;
                    break;
                case 'time':
                    this.format = timeFormat;
                    break;
                case 'date-time':
                    this.format = `${dateFormat} ${timeFormat}`;
                    break;
                default:
                    this.format = dateFormat;
            }
        }

        this.maskOptions = this.composeMaskForFormat(this.format, this.type);
        if (this.maskOptions && !this.disableMaskValidation) {
            this.cleaveInstance = new Cleave(this.validationTarget!, this.maskOptions);
        }

        this.initializeComponent();
        this.setInitialValue();
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        const options = this.getDynamicOptions();
        const dynamicAttributes = ['disabled', 'readonly', 'minDate', 'maxDate', 'minTime', 'maxTime'];

        if (dynamicAttributes.some((prop) => changedProperties.has(prop))) {
            this.updateOptionsForInstance(options);
        }

        if (changedProperties.has('value')) {
            // alleen als de inputValue niet aangepast is, updaten we deze met de nieuwe waarde
            // dit gebeurt typisch wanneer de waarde van buitenaf aangepast wordt
            if (!changedProperties.has('inputValue') && typeof this.value === 'string') {
                switch (this.type) {
                    case 'date-time':
                    case 'date': {
                        const date = flatpickr.parseDate(this.value, 'Z');
                        if (date) {
                            this.inputValue = flatpickr.formatDate(date, this.format);
                        } else if (!date && !this.value) {
                            this.flatpickrInstance?.clear();
                            this.inputValue = '';
                        }
                        break;
                    }
                    case 'time': {
                        const date = flatpickr.parseDate(this.value, this.format);
                        if (date) {
                            this.inputValue = flatpickr.formatDate(date, this.format);
                        } else if (!date && !this.value) {
                            this.flatpickrInstance?.clear();
                            this.inputValue = '';
                        }
                        break;
                    }
                    default:
                        this.inputValue = this.value;
                }
            }
        }

        if (changedProperties.has('inputValue')) {
            this.updateFormControlValue(this.inputValue ?? '');
        }

        if (changedProperties.has('block')) {
            if (this.block) {
                this.getFlatpickrWrapper()?.classList.add('flatpickr-wrapper--block');
            } else {
                this.getFlatpickrWrapper()?.classList.remove('flatpickr-wrapper--block');
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.flatpickrInstance?.destroy();
    }

    render(): TemplateResult {
        const inputClasses = {
            'vl-input-field': true,
            'js-vl-datepicker-toggle': true,
            'vl-input-field--error': this.error || this.isInvalid,
            'vl-input-field--success': this.success,
            'vl-input-field--block': this.block,
            'vl-input-field--disabled': this.disabled,
        };

        const buttonClasses = {
            'vl-input-addon': true,
            'js-vl-datepicker-toggle': true,
            'vl-input-addon--error': this.error || this.isInvalid,
            'vl-input-addon--success': this.success,
            'vl-input-addon--disabled': this.disabled,
        };

        return html`
            <div class="vl-input-group" id="datepicker-wrapper">
                <input
                    id=${this.id || nothing}
                    name=${this.name || nothing}
                    class=${classMap(inputClasses)}
                    type="text"
                    aria-label=${this.label || nothing}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${live(this.inputValue)}
                    placeholder=${this.placeholder || nothing}
                    autocomplete=${this.autocomplete || nothing}
                    pattern=${this.pattern || nothing}
                    @input=${!this.cleaveInstance ? this.onInput : nothing}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${classMap(buttonClasses)}
                    ?disabled=${this.disabled}
                    aria-label="toggle calendar"
                    @click=${this.toggleCalendar}
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl() {
        super.resetFormControl();

        this.setInitialValue();
    }

    getRawValue(): string | undefined {
        return this.cleaveInstance?.getRawValue();
    }

    getDates(): Date[] | undefined {
        return this.flatpickrInstance?.selectedDates;
    }

    private setInitialValue() {
        const initialDate = this.flatpickrInstance?.parseDate(this.initialValue, 'Z');
        this.value = this.initialValue;

        if (initialDate instanceof Date && !isNaN(initialDate as unknown as number) && this.type !== 'range') {
            this.flatpickrInstance?.setDate(initialDate, true);
            this.inputValue = flatpickr.formatDate(initialDate, this.format);
        } else if (this.type === 'time' && this.initialValue) {
            this.inputValue = this.initialValue;
        } else {
            this.flatpickrInstance?.clear();
            this.inputValue = '';
        }
    }

    private parseTodayDate(dateString: 'today' | string | undefined): string | undefined {
        const formatDate = (date: Date) => flatpickr.formatDate(date, this.format);

        if (dateString === 'today') {
            return formatDate(new Date());
        } else if (dateString) {
            const parsedDate = flatpickr.parseDate(dateString, 'Z');
            return parsedDate ? formatDate(parsedDate) : undefined;
        } else {
            return undefined;
        }
    }

    private getDynamicOptions(): Options {
        const minimumDateTime = flatpickr.parseDate(this.minTime, this.format);
        return {
            allowInput: !(this.disabled || this.readonly),
            maxDate: this.maxDate,
            minDate: this.minDate,
            minTime: this.minTime,
            maxTime: this.maxTime,
            defaultHour: minimumDateTime?.getHours() ?? 12,
            defaultMinute: minimumDateTime?.getMinutes() ?? 0,
        };
    }

    private getOptions(): Options {
        const datepickerButton = this.shadowRoot?.querySelector('button');
        const datepicker = this.shadowRoot?.querySelector('#datepicker-wrapper') as HTMLInputElement;
        const defaultDate = this.type !== 'range' && this.parseTodayDate(this.initialValue);
        const staticOptions = {
            dateFormat: this.format,
            locale: Dutch.nl,
            clickOpens: false,
            onChange: this.handleDatePickerChange,
            positionElement: datepickerButton,
            static: true,
            appendTo: datepicker,
            defaultDate: defaultDate,
            enableTime: this.type === 'time' || this.type === 'date-time',
            noCalendar: this.type === 'time',
            time_24hr: !this.amPm,
            mode: this.type !== 'range' ? 'single' : 'range',
        };

        const options = {
            ...staticOptions,
            ...this.getDynamicOptions(),
        } as Options;

        Object.keys(options).forEach((key) => {
            if (options[key as keyof Options] === undefined) delete options[key as keyof Options];
        });
        return options;
    }

    private getDatePicker(): HTMLDivElement | undefined | null {
        return this.shadowRoot?.querySelector('#datepicker-wrapper') as HTMLDivElement;
    }

    private getFlatpickrWrapper(): HTMLDivElement {
        return this.shadowRoot?.querySelector('.flatpickr-wrapper') as HTMLDivElement;
    }

    private updateOptionsForInstance(options: Options) {
        Object.keys(options)
            .map((key) => key as keyof Options)
            .forEach((key) => {
                this.flatpickrInstance?.set(key, options[key as keyof Options]);
            });
    }

    private initializeComponent() {
        if (this.getDatePicker() && !this.flatpickrInstance) {
            this.flatpickrInstance = flatpickr(this.getDatePicker()!, this.getOptions()) as unknown as Instance;
            this.getDatePicker()?.classList.add('static');
        }
    }

    private toggleCalendar = () => {
        this.flatpickrInstance?.toggle();
    };

    private onInput = (event: Event & { target: HTMLInputElement }) => {
        this.handleInputValueChanged(event.target?.value ?? '');
    };

    private getISODateString(date?: Date, date2?: Date): string {
        if (!date) return '';
        switch (this.type) {
            case 'time':
                return flatpickr.formatDate(date, this.format?.includes('S') ? 'H:i:S' : 'H:i');
            case 'date-time':
                return flatpickr.formatDate(date, 'Y-m-dTH:i');
            case 'range':
                return `${flatpickr.formatDate(date, 'Y-m-d')}${
                    date2 ? '/' + flatpickr.formatDate(date2, 'Y-m-d') : ''
                }`;
            case 'date':
            default:
                return flatpickr.formatDate(date, 'Y-m-d');
        }
    }

    // functie die de start- en einddatum zal extraheren uit de geformatteerde invoerwaarde met scheidingsteken (tot en met)
    private getDatesFromInputValue(inputValue: string): Date[] | undefined {
        const rangeSeparator = Dutch?.nl?.rangeSeparator;
        const dateStrings = (rangeSeparator && inputValue.split(rangeSeparator)) || [];
        const dates = dateStrings?.map((dateString) => flatpickr.parseDate(dateString, this.format));
        return dates.length && dates.every((date) => date instanceof Date) ? (dates as Date[]) : undefined;
    }

    private handleInputValueChanged(dateString: string, isValidDateString = true) {
        let parsedDate, isValidFormat;
        // we verwachten een fout die opgeworpen wordt wanneer de waarde niet conform het formaat is
        // daarom gebruiken we een try-catch
        try {
            // indien een RegExp opgegeven is, controleren we of de waarde conform het formaat is
            const patternRegExp = this.pattern ? new RegExp(this.pattern) : undefined;
            const regex = this.regex || patternRegExp;
            isValidFormat = regex ? regex.test(dateString) : true;
            if (isValidFormat) parsedDate = flatpickr.parseDate(dateString, this.format);
        } catch (error) {
            // we vangen de error op, maar behandelen we die niet en gaan verder met de default waarde
        } finally {
            if (isValidDateString && isValidFormat && parsedDate && this.type !== 'range') {
                this.value = this.getISODateString(parsedDate);
            } else if (this.type === 'range') {
                const dates = this.getDatesFromInputValue(dateString);
                if (dates?.length) {
                    this.value = this.getISODateString(dates[0], dates[1]);
                } else {
                    this.value = dateString;
                }
                this.inputValue = dateString;
            } else {
                // indien de waarde niet conform het verwachte formaat is of niet kon geconverteerd worden
                // stellen we de value gelijk aan de inputValue
                this.inputValue = dateString;
                this.value = dateString;
            }
            if (parsedDate instanceof Date && !isNaN(parsedDate as unknown as number)) {
                this.flatpickrInstance?.setDate(dateString, false, this.format);
            }
        }
    }

    private handleDatePickerChange = (dates: Date[]) => {
        const format = (date: Date) => flatpickr.formatDate(date, this.format);
        if (dates.length === 1) {
            this.inputValue = format(dates[0]);
            this.value = this.getISODateString(dates[0]);
        } else if (dates.length === 2) {
            this.value = this.getISODateString(dates[0], dates[1]);
            this.inputValue = `${format(dates[0])}${Dutch?.nl?.rangeSeparator}${format(dates[1])}`;
        }
    };

    private updateFormControlValue = (inputValue: string) => {
        const detail = { value: this.value };
        const date = this.flatpickrInstance?.parseDate(inputValue, this.format);
        // indien de waarde getypt wordt, updaten we de flatpickr instance zodat deze de nieuwe waarde toont
        if (this.inputValue !== this.flatpickrInstance?.input.value && date) {
            this.flatpickrInstance?.setDate(date, false, this.format);
        }
        this.setValue(this.value ?? '');
        this.dispatchEvent(new CustomEvent('vl-input', { composed: true, bubbles: true, detail }));
        this.dispatchEventIfValid(detail);
    };

    private composeMaskForFormat(format: string, type: string): MaskOptions | null {
        if (!format) return null;
        let maskOptions: MaskOptions | null = null;
        switch (type) {
            case 'date':
                maskOptions = createDateMask(format, this.minDate, this.maxDate);
                break;
            case 'time':
                maskOptions = createTimeMask(format);
                break;
            default:
                break;
        }
        return maskOptions
            ? {
                  ...maskOptions,
                  // als we een cleave mask gebruiken, willen we de transformed value verkrijgen
                  onValueChanged: ({
                      target: { value, rawValue },
                  }: {
                      target: { value: string; rawValue: string };
                  }) => {
                      // flatpickr gaat soms een string parsen naar een Date, ook al is de string niet conform het verwachte formaat
                      // daarom voegen we hier nog een extra check toe om te voorkomen dat we een ongeldige datum in de flatpickr instance instellen
                      const isValidDateString = maskOptions?.regex?.test(rawValue);
                      this.handleInputValueChanged(value ?? '', isValidDateString);
                  },
              }
            : null;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-datepicker-next': VlDatepickerComponent;
    }
}
