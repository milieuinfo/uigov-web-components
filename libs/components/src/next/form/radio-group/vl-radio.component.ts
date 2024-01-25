import { CSSResult, html, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { radioStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import radioUigStyle from './vl-radio.component.uig-css';
import { BaseLitElement } from '@domg-wc/common-utilities';

export const RadioDefaults = {
    id: 'radio',
    value: '',
    name: '',
    label: '',
    block: false,
    readonly: false,
    disabled: false,
    error: false,
    success: false,
    checked: false,
};

@customElement('vl-radio-next')
export class VlRadioComponent extends BaseLitElement {
    // Properties
    id = RadioDefaults.id;
    private value = RadioDefaults.value;
    private name = RadioDefaults.name;
    private label = RadioDefaults.label;
    private block = RadioDefaults.block;
    private readonly = RadioDefaults.readonly;
    private disabled = RadioDefaults.disabled;
    private error = RadioDefaults.error;
    private success = RadioDefaults.success;
    private checked = RadioDefaults.checked;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, radioStyle, radioUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            id: { type: String },
            value: { type: String },
            name: { type: String },
            label: { type: String },
            disabled: { type: Boolean },
            readonly: { type: Boolean },
            error: { type: Boolean },
            success: { type: Boolean },
            block: { type: Boolean },
            checked: { type: Boolean, reflect: true },
        };
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
                    class="vl-radio__toggle"
                    type="radio"
                    id=${this.id}
                    name=${this.name}
                    aria-label=${this.label}
                    .value=${live(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @click=${this.onClick}
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

    focus() {
        this.validationTarget?.focus();
    }

    private onClick = () => {
        this.checked = true;
    };

    private onChange(event: Event) {
        this.checked = (event.target as HTMLInputElement).checked;

        const detailObject: { checked: boolean; value?: string } = { checked: this.checked };

        if (this.checked) {
            detailObject.value = this.value;
        }

        this.dispatchEvent(
            new CustomEvent('vl-checked', {
                bubbles: true,
                composed: true,
                detail: detailObject,
            })
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-radio-next': VlRadioComponent;
    }
}
