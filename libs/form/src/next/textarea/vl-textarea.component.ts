import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { textareaStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl, FormControlDefaults } from '../form-control/form-control';

export const TextareaDefaults = {
    ...FormControlDefaults,
    block: false,
    readonly: false,
    value: '',
    minLength: null,
    maxLength: null,
    rows: null,
    cols: null,
};

@customElement('vl-textarea-next')
export class VlTextareaComponent extends FormControl {
    // Properties
    private block = TextareaDefaults.block;
    private readonly = TextareaDefaults.readonly;
    private value = TextareaDefaults.value;
    private minLength: number | null = TextareaDefaults.minLength;
    private maxLength: number | null = TextareaDefaults.maxLength;
    private rows: number | null = TextareaDefaults.rows;
    private cols: number | null = TextareaDefaults.cols;

    // Variables
    private initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, textareaStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean },
            readonly: { type: Boolean },
            value: { type: String, reflect: true },
            minLength: { type: Number, attribute: 'min-length' },
            maxLength: { type: Number, attribute: 'max-length' },
            rows: { type: Number },
            cols: { type: Number },
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
            'vl-textarea': true,
            'vl-textarea--disabled': this.disabled,
            'vl-textarea--error': this.isInvalid || this.error,
            'vl-textarea--success': this.success,
            'vl-textarea--block': this.block,
        };

        return html`
            <textarea
                id=${this.id}
                name=${this.name || this.id}
                class=${classMap(classes)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${live(this.value)}
                minlength=${this.minLength}
                maxlength=${this.maxLength}
                rows=${this.rows}
                cols=${this.cols}
                @input=${this.onInput}
            />
        `;
    }

    get validationTarget(): HTMLTextAreaElement | undefined | null {
        return this.shadowRoot?.querySelector('textarea');
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
        'vl-textarea-next': VlTextareaComponent;
    }
}
