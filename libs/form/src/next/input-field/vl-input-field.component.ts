import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { inputFieldStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { maxValueValidator, minValueValidator, patternValidator } from './validators';
import { FormControl, formControlDefaults } from '../form-control/form-control';
import { webComponent } from '@domg-wc/common-utilities';
import { maxLengthValidator, minLengthValidator } from '@open-wc/form-control';

export const inputFieldDefaults = {
    ...formControlDefaults,
    block: false as boolean,
    readonly: false as boolean,
    type: 'text' as string,
    value: '' as string,
    placeholder: '' as string,
    autocomplete: '' as string,
    minLength: null as number | null,
    maxLength: null as number | null,
    min: null as number | null,
    max: null as number | null,
    minExclusive: false as boolean,
    maxExclusive: false as boolean,
    pattern: '' as string,
    regex: null as RegExp | null,
} as const;

@webComponent('vl-input-field-next')
export class VlInputFieldComponent extends FormControl {
    // Properties
    regex = inputFieldDefaults.regex; // Wordt enkel gebruikt in de pattern validator

    // Attributes
    private block = inputFieldDefaults.block;
    private readonly = inputFieldDefaults.readonly;
    private type = inputFieldDefaults.type;
    protected value = inputFieldDefaults.value;
    private placeholder = inputFieldDefaults.placeholder;
    private autocomplete = inputFieldDefaults.autocomplete;
    private minLength = inputFieldDefaults.minLength;
    private maxLength = inputFieldDefaults.maxLength;
    private min = inputFieldDefaults.min;
    private max = inputFieldDefaults.max;
    private minExclusive = inputFieldDefaults.minExclusive; // Wordt enkel gebruikt in de min validator
    private maxExclusive = inputFieldDefaults.maxExclusive; // Wordt enkel gebruikt in de max validator
    private pattern = inputFieldDefaults.pattern;

    // Variables
    protected initialValue = '';

    static formControlValidators = [
        ...FormControl.formControlValidators,
        minLengthValidator,
        maxLengthValidator,
        minValueValidator,
        maxValueValidator,
        patternValidator,
    ];

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean },
            readonly: { type: Boolean },
            type: { type: String },
            value: { type: String, reflect: true },
            placeholder: { type: String },
            autocomplete: { type: String },
            minLength: { type: Number, attribute: 'min-length' },
            maxLength: { type: Number, attribute: 'max-length' },
            min: { type: Number },
            max: { type: Number },
            minExclusive: { type: Boolean, attribute: 'min-exclusive' },
            maxExclusive: { type: Boolean, attribute: 'max-exclusive' },
            pattern: { type: String },
            regex: { type: Object },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        this.onUpdated(changedProperties);
    }

    render(): TemplateResult {
        const classes = {
            'vl-input-field': true,
            'vl-input-field--disabled': this.disabled,
            'vl-input-field--error': this.isInvalid || this.error,
            'vl-input-field--success': this.success,
            'vl-input-field--block': this.block,
        };

        return html`
            <input
                id=${this.id || nothing}
                name=${this.name || nothing}
                class=${classMap(classes)}
                type=${this.type}
                aria-label=${this.label || nothing}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${live(this.value)}
                placeholder=${this.placeholder || nothing}
                autocomplete=${this.autocomplete || nothing}
                minlength=${this.minLength ?? nothing}
                maxlength=${this.maxLength ?? nothing}
                min=${this.min ?? nothing}
                max=${this.max ?? nothing}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl() {
        super.resetFormControl();

        this.value = this.initialValue;
    }

    protected onInput(event: Event & { target: HTMLInputElement }) {
        this.value = event?.target?.value;
    }

    protected onUpdated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('value')) {
            const detail = { value: this.value };

            this.setValue(this.value);
            this.dispatchEvent(new CustomEvent('vl-input', { composed: true, bubbles: true, detail }));
            this.dispatchEventIfValid(detail);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-next': VlInputFieldComponent;
    }
}
