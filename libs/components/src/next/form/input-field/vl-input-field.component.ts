import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { inputFieldStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl, FormControlDefaults } from '../form-control/FormControl';

export const InputFieldDefaults = {
    ...FormControlDefaults,
    block: false,
    readonly: false,
    type: 'text',
    value: '',
    minLength: null,
    maxLength: null,
    min: null,
    max: null,
    pattern: '',
};

@customElement('vl-input-field-next')
export class VlInputFieldComponent extends FormControl {
    // Properties
    private block = InputFieldDefaults.block;
    private readonly = InputFieldDefaults.readonly;
    private type = InputFieldDefaults.type;
    private value = InputFieldDefaults.value;
    private minLength: number | null = InputFieldDefaults.minLength;
    private maxLength: number | null = InputFieldDefaults.maxLength;
    private min: number | null = InputFieldDefaults.min;
    private max: number | null = InputFieldDefaults.max;
    private pattern: string | null = InputFieldDefaults.pattern;

    // Variables
    private initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean, reflect: false },
            readonly: { type: Boolean, reflect: false },
            type: { type: String, reflect: false },
            value: { type: String, reflect: true },
            minLength: { type: Number, reflect: false, attribute: 'min-length' },
            maxLength: { type: Number, reflect: false, attribute: 'max-length' },
            min: { type: Number, reflect: false },
            max: { type: Number, reflect: false },
            pattern: { type: String, reflect: false },
        };
    }

    connectedCallback(): void {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
        }
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
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                type=${this.type}
                .value=${live(this.value)}
                minlength=${this.minLength}
                maxlength=${this.maxLength}
                min=${this.min}
                max=${this.max}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    protected onInput(event: Event & { target: HTMLInputElement }): void {
        this.value = event?.target?.value;
        this.dispatchEvent(
            new CustomEvent('vl-input', { composed: true, bubbles: true, detail: { value: this.value } })
        );
    }

    resetFormControl(): void {
        super.resetFormControl();

        this.value = this.initialValue;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-next': VlInputFieldComponent;
    }
}
