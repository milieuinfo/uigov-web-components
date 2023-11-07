import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { textareaStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl } from '../form-control/FormControl';

@customElement('vl-textarea-next')
export class VlTextareaComponent extends FormControl {
    // Properties
    private value = '';
    private minLength: number | null = null;
    private maxLength: number | null = null;
    private rows: number | null = null;
    private cols: number | null = null;

    // Variables
    private initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, textareaStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            value: { type: String, reflect: true },
            minLength: { type: Number, reflect: true, attribute: 'min-length' },
            maxLength: { type: Number, reflect: true, attribute: 'max-length' },
            rows: { type: Number, reflect: true },
            cols: { type: Number, reflect: true },
        };
    }

    connectedCallback(): void {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
        }
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
        }
    }

    render(): TemplateResult {
        const classes = {
            'vl-textarea': true,
            'vl-textarea--block': this.block,
            'vl-textarea--disabled': this.disabled,
            'vl-textarea--error': this.isInvalid || this.error,
            'vl-textarea--success': this.success,
        };

        return html`
            <textarea
                id=${this.id}
                name=${this.name || this.id}
                class=${classMap(classes)}
                .value=${live(this.value)}
                aria-label=${this.label}
                @input=${this.onInput}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?error=${this.error}
                minlength=${this.minLength}
                maxlength=${this.maxLength}
                rows=${this.rows}
                cols=${this.cols}
            />
        `;
    }

    get validationTarget(): HTMLTextAreaElement | undefined | null {
        return this.shadowRoot?.querySelector('textarea');
    }

    protected onInput(event: Event & { target: HTMLInputElement }): void {
        this.value = event?.target?.value;
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
