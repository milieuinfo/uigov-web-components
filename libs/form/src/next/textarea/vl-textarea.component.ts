import { CSSResult, TemplateResult, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { textareaStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl, formControlDefaults } from '../form-control/form-control';

export const textareaDefaults = {
    ...formControlDefaults,
    block: false as boolean,
    readonly: false as boolean,
    value: '' as string,
    placeholder: '' as string,
    autocomplete: '' as string,
    minLength: null as number | null,
    maxLength: null as number | null,
    rows: null as number | null,
    cols: null as number | null,
} as const;

@customElement('vl-textarea-next')
export class VlTextareaComponent extends FormControl {
    // Properties
    @property({ type: Boolean })
    accessor block = textareaDefaults.block;

    @property({ type: Boolean })
    accessor readonly = textareaDefaults.readonly;

    @property({ type: String, reflect: true })
    accessor value = textareaDefaults.value;

    @property({ type: String })
    accessor placeholder = textareaDefaults.placeholder;

    @property({ type: String })
    accessor autocomplete = textareaDefaults.autocomplete;

    @property({ type: Number, attribute: 'min-length' })
    accessor minLength = textareaDefaults.minLength;

    @property({ type: Number, attribute: 'max-length' })
    accessor maxLength = textareaDefaults.maxLength;

    @property({ type: Number })
    accessor rows = textareaDefaults.rows;

    @property({ type: Number })
    accessor cols = textareaDefaults.cols;

    // Variables
    private initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, textareaStyle];
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            const detail = { value: this.value };

            this.setValue(this.value);
            this.dispatchEvent(new CustomEvent('vl-input', { composed: true, bubbles: true, detail }));
            this.dispatchEventIfValid(detail);
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
                rows=${this.rows ?? nothing}
                cols=${this.cols ?? nothing}
                @input=${this.onInput}
            />
        `;
    }

    get validationTarget(): HTMLTextAreaElement | undefined | null {
        return this.shadowRoot?.querySelector('textarea');
    }

    resetFormControl() {
        super.resetFormControl();

        this.value = this.initialValue;
    }

    private onInput(event: Event & { target: HTMLTextAreaElement }) {
        this.value = event?.target?.value;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-textarea-next': VlTextareaComponent;
    }
}
