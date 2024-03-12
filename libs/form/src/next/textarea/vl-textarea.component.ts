import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { textareaStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl, formControlDefaults } from '../form-control/form-control';
import { webComponent } from '@domg-wc/common-utilities';

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

@webComponent('vl-textarea-next')
export class VlTextareaComponent extends FormControl {
    // Attributes
    protected block = textareaDefaults.block;
    protected readonly = textareaDefaults.readonly;
    protected value = textareaDefaults.value;
    protected placeholder = textareaDefaults.placeholder;
    protected autocomplete = textareaDefaults.autocomplete;
    protected minLength = textareaDefaults.minLength;
    protected maxLength = textareaDefaults.maxLength;
    protected rows = textareaDefaults.rows;
    protected cols = textareaDefaults.cols;

    // Variables
    protected initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, textareaStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean },
            readonly: { type: Boolean },
            value: { type: String, reflect: true },
            placeholder: { type: String },
            autocomplete: { type: String },
            minLength: { type: Number, attribute: 'min-length' },
            maxLength: { type: Number, attribute: 'max-length' },
            rows: { type: Number },
            cols: { type: Number },
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
                id=${this.id || nothing}
                name=${this.name || nothing}
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
