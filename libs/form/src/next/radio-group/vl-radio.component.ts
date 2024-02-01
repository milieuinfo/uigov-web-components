import { CSSResult, html, nothing, PropertyDeclarations, TemplateResult, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { radioStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import radioUigStyle from './vl-radio.component.uig-css';
import { BaseLitElement } from '@domg-wc/common-utilities';

export const radioDefaults = {
    id: 'radio' as string,
    name: '' as string,
    value: '' as string,
    label: '' as string,
    block: false as boolean,
    readonly: false as boolean,
    disabled: false as boolean,
    error: false as boolean,
    success: false as boolean,
    checked: false as boolean,
} as const;

@customElement('vl-radio-next')
export class VlRadioComponent extends BaseLitElement {
    // Properties
    id = radioDefaults.id;
    private name = radioDefaults.name;
    private value = radioDefaults.value;
    private label = radioDefaults.label;
    private block = radioDefaults.block;
    private readonly = radioDefaults.readonly;
    private disabled = radioDefaults.disabled;
    private error = radioDefaults.error;
    private success = radioDefaults.success;
    private checked = radioDefaults.checked;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, radioStyle, radioUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            id: { type: String },
            name: { type: String },
            value: { type: String },
            label: { type: String },
            disabled: { type: Boolean },
            readonly: { type: Boolean },
            error: { type: Boolean },
            success: { type: Boolean },
            block: { type: Boolean },
            checked: { type: Boolean, reflect: true },
        };
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('checked') || changedProperties.has('value')) {
            if (this.checked) {
                const detail = { checked: true, value: this.value };

                this.dispatchEvent(
                    new CustomEvent('vl-checked', {
                        bubbles: true,
                        composed: true,
                        detail,
                    })
                );
                this.dispatchEvent(new CustomEvent('vl-valid', { composed: true, bubbles: true, detail }));
            }
        }
    }

    render(): TemplateResult {
        const classes = {
            'vl-radio': true,
            'vl-radio--block': this.block,
            'vl-radio--disabled': this.disabled,
            'vl-radio--error': this.error,
            'vl-radio--success': this.success,
        };
        return html`
            <label id="radio-label" class=${classMap(classes)} for=${this.id}>
                <input
                    id=${this.id}
                    name=${this.name || this.id}
                    class="vl-radio__toggle"
                    aria-label=${this.label || nothing}
                    type="radio"
                    .value=${live(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    private onChange() {
        this.checked = !this.checked;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-radio-next': VlRadioComponent;
    }
}
