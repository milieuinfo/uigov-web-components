import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import {
    datepickerStyle,
    iconStyle,
    inputAddonStyle,
    inputFieldStyle,
    inputGroupStyle,
    tooltipStyle,
} from '@domg/govflanders-style/component';
import { patternValidator } from '@open-wc/form-control';
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

export const DATEPICKER_TYPES = ['date', 'range', 'time', 'date-time'] as const;

export const datepickerDefaults = {
    ...formControlDefaults,
    block: false as boolean,
    readonly: false as boolean,
    value: '' as string,
    placeholder: '' as string,
    autocomplete: '' as string,
    type: 'date' as (typeof DATEPICKER_TYPES)[number],
    format: 'd.m.Y' as string,
    amPm: false as boolean,
    minDate: '' as string,
    maxDate: '' as string,
    minTime: '' as string,
    maxTime: '' as string,
    pattern: '' as string,
} as const;

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
    private pattern = datepickerDefaults.pattern;

    // Variables
    private instance: Instance | null = null;
    private initialValue = '';
    private inputHasFocus = false;

    static {
        registerWebComponents([VlButtonInputAddon, VlIconElement]);
    }

    static formControlValidators = [...FormControl.formControlValidators, patternValidator];

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
            pattern: { type: String },
            inputHasFocus: { type: Boolean, state: true },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        if (Dutch?.nl) {
            Dutch.nl.rangeSeparator = ' tot en met ';
            flatpickr.l10ns.default.rangeSeparator = ' tot en met ';
        }

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    firstUpdated(changedProperties: Map<string, unknown>) {
        super.firstUpdated(changedProperties);

        this.initializeComponent();
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        const options = this.getDynamicOptions();
        this.updateOptionsForInstance(options);

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

        this.instance?.destroy();
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
                    @focus="${this.onInputFocus}"
                    @blur="${this.onInputBlur}"
                    @input=${this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${classMap(buttonClasses)}
                    ?disabled=${this.disabled}
                    aria-label="datumkiezer"
                    aria-expanded=${this.instance?.isOpen}
                    aria-controls=${this.id || nothing}
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

        this.instance?.clear();
        this.value = this.initialValue;
        if (this.initialValue) this.instance?.setDate(this.initialValue, true, this.format);
    }

    private parseDate(dateString: 'today' | string | undefined): string | undefined {
        const formatDate = (date: Date) => flatpickr.formatDate(date, this.format);
        if (dateString === 'today') {
            return formatDate(new Date());
        } else {
            return dateString;
        }
    }

    private getDynamicOptions(): Options {
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

        const defaultDate = this.parseDate(this.initialValue);
        return {
            allowInput: this.inputHasFocus && !(this.disabled || this.readonly),
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

    private getOptions(): Options {
        const datepickerButton = this.shadowRoot?.querySelector('button');
        const datepicker = this.shadowRoot?.querySelector('#datepicker-wrapper') as HTMLInputElement;

        const staticOptions = {
            autoFillDefaultTime: true,
            locale: Dutch.nl,
            clickOpens: false,
            onChange: this.handleDateChange,
            positionElement: datepickerButton,
            static: true,
            appendTo: datepicker,
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
                this.instance?.set(key, options[key as keyof Options]);
            });
    }

    private initializeComponent() {
        if (this.getDatePicker() && !this.instance) {
            this.instance = flatpickr(this.getDatePicker()!, this.getOptions()) as unknown as Instance;
            this.getDatePicker()?.classList.add('static');
        }
    }

    private toggleCalendar = () => {
        console.log('instance', this.instance);
        this.instance?.toggle();
    };

    private onInputFocus = () => {
        console.log('onFocus');
        this.inputHasFocus = true;
    };

    private onInputBlur = () => {
        console.log('onBlur');
        this.inputHasFocus = false;
    };

    private onInput = (event: Event & { target: HTMLInputElement }) => {
        const dateString = event.target.value;
        if (this.pattern) {
            if (!dateString.match(this.pattern)) {
                this.value = dateString;
                return;
            }
        }
        let parsedDate;
        try {
            parsedDate = flatpickr.parseDate(dateString, this.format);
        } finally {
            this.value = dateString;
            if (parsedDate instanceof Date && !isNaN(parsedDate as unknown as number)) {
                this.instance?.setDate(dateString, false, this.format);
            }
        }
    };

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

        this.setValue(value);
        this.dispatchEvent(new CustomEvent('vl-input', { composed: true, bubbles: true, detail }));
        this.dispatchEventIfValid(detail);
    };
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-datepicker-next': VlDatepickerComponent;
    }
}
