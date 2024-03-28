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
            value: { type: String, reflect: true },
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

        if (!this.initialValue) {
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
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        const options = this.getDynamicOptions();
        const dynamicAttributes = ['disabled', 'readonly', 'minDate', 'maxDate', 'minTime', 'maxTime'];

        if (dynamicAttributes.some((prop) => changedProperties.has(prop))) {
            this.updateOptionsForInstance(options);
        }

        if (changedProperties.has('value')) {
            this.updateValue(this.value);
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
                    .value=${live(this.value)}
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

        this.flatpickrInstance?.clear();
        this.value = this.initialValue;
        if (this.initialValue) this.flatpickrInstance?.setDate(this.initialValue, true, this.format);
    }

    getRawValue(): string | undefined {
        return this.cleaveInstance?.getRawValue();
    }

    private parseTodayDate(dateString: 'today' | string | undefined): string | undefined {
        const formatDate = (date: Date) => flatpickr.formatDate(date, this.format);
        if (dateString === 'today') {
            return formatDate(new Date());
        } else {
            return dateString;
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
        const defaultDate = this.parseTodayDate(this.initialValue);
        const staticOptions = {
            dateFormat: this.format,
            locale: Dutch.nl,
            clickOpens: false,
            onChange: this.handleDateChange,
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
        this.handleValueChanged(event.target?.value ?? '');
    };

    private handleValueChanged(dateString: string) {
        let parsedDate;
        try {
            parsedDate = flatpickr.parseDate(dateString, this.format);
        } finally {
            this.value = dateString;
            if (parsedDate instanceof Date && !isNaN(parsedDate as unknown as number)) {
                this.flatpickrInstance?.setDate(dateString, false, this.format);
            }
        }
    }

    private handleDateChange = (dates: Date[]) => {
        const format = (date: Date) => flatpickr.formatDate(new Date(date), this.format);
        if (dates.length !== 2) {
            this.value = format(dates[0]);
        } else {
            this.value = `${format(dates[0])}${Dutch?.nl?.rangeSeparator}${format(dates[1])}`;
        }
    };

    private updateValue = (value: string) => {
        const detail = { value: this.value };
        // indien de waarde getypt wordt, updaten we de flatpickr instance zodat deze de nieuwe waarde toont
        if (this.value !== this.flatpickrInstance?.input.value) {
            this.flatpickrInstance?.setDate(this.value, false, this.format);
        }
        this.setValue(value);
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
                  onValueChanged: ({ target: { value } }: { target: { value: string } }) => {
                      this.handleValueChanged(value ?? '');
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
