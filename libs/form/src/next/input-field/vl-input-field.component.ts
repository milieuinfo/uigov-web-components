import { CSSResult, TemplateResult, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { inputFieldStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { maxValueValidator, minValueValidator } from './validators';
import { patternValidator } from '@open-wc/form-control';
import { FormControl, formControlDefaults } from '../form-control/form-control';

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
    pattern: '' as string,
} as const;

@customElement('vl-input-field-next')
export class VlInputFieldComponent extends FormControl {
    // Properties
    @property({ type: Boolean })
    accessor block = inputFieldDefaults.block;

    @property({ type: Boolean })
    accessor readonly = inputFieldDefaults.readonly;

    @property({ type: String })
    accessor type = inputFieldDefaults.type;

    @property({ type: String, reflect: true })
    accessor value = inputFieldDefaults.value;

    @property({ type: String })
    accessor placeholder = inputFieldDefaults.placeholder;

    @property({ type: String })
    accessor autocomplete = inputFieldDefaults.autocomplete;

    @property({ type: Number, attribute: 'min-length' })
    accessor minLength = inputFieldDefaults.minLength;

    @property({ type: Number, attribute: 'max-length' })
    accessor maxLength = inputFieldDefaults.maxLength;

    @property({ type: Number })
    accessor min = inputFieldDefaults.min;

    @property({ type: Number })
    accessor max = inputFieldDefaults.max;

    @property({ type: String })
    accessor pattern = inputFieldDefaults.pattern;

    // Variables
    protected initialValue = '';

    static formControlValidators = [
        ...FormControl.formControlValidators,
        minValueValidator,
        maxValueValidator,
        patternValidator,
    ];

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle];
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
                id=${this.id}
                name=${this.name || this.id}
                class=${classMap(classes)}
                aria-label=${this.label || nothing}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                type=${this.type}
                .value=${live(this.value)}
                placeholder=${this.placeholder || nothing}
                autocomplete=${this.autocomplete || nothing}
                minlength=${this.minLength ?? nothing}
                maxlength=${this.maxLength ?? nothing}
                min=${this.min ?? nothing}
                max=${this.max ?? nothing}
                pattern=${this.pattern || nothing}
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
