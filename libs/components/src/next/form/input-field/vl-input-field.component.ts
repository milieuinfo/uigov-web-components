import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { inputFieldStyle } from '@domg/govflanders-style/component';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl } from '../form-control/FormControl';

@customElement('vl-input-field-next')
export class VlInputFieldComponent extends FormControl {
    private value = '';
    private type = 'text';
    private minLength: number | null = null;
    private maxLength: number | null = null;
    private min: number | null = null;
    private max: number | null = null;
    private pattern: string | null = '';

    private initialValue = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            type: { type: String, reflect: true },
            value: { type: String, reflect: true },
            minLength: { type: Number, reflect: true, attribute: 'min-length' },
            maxLength: { type: Number, reflect: true, attribute: 'max-length' },
            min: { type: Number, reflect: true },
            max: { type: Number, reflect: true },
            pattern: { type: String, reflect: true },
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
            'vl-input-field--block': this.block,
            'vl-input-field--disabled': this.disabled,
            'vl-input-field--error': this.isInvalid || this.error,
        };

        return html`
            <input
                id=${this.id}
                name=${this.name || this.id}
                class=${classMap(classes)}
                type=${this.type}
                .value=${live(this.value)}
                aria-label=${this.label}
                @input=${this.onInput}
                ?required=${this.required}
                ?disabled=${this.disabled}
                minlength=${this.minLength}
                maxlength=${this.maxLength}
                min=${this.min}
                max=${this.max}
                pattern=${this.pattern}
            />
        `;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
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
        'vl-input-field-next': VlInputFieldComponent;
    }
}
