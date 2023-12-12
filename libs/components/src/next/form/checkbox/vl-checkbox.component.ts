import { CSSResult, html, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { checkboxStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import checkboxUigStyle from './vl-checkbox.component.uig-css';
import { FormControl, FormControlDefaults } from '../form-control/FormControl';

export const CheckboxDefaults = {
    ...FormControlDefaults,
    block: false,
    value: '',
    checked: false,
    isSwitch: false,
};

@customElement('vl-checkbox-next')
export class VlCheckboxComponent extends FormControl {
    // Properties
    private block = CheckboxDefaults.block;
    private value = CheckboxDefaults.value;
    private checked = CheckboxDefaults.checked;
    private isSwitch = CheckboxDefaults.isSwitch;

    // Variables
    private initialValue = '';
    private initialCheckedValue = false;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, checkboxStyle, checkboxUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean, reflect: false },
            value: { type: String, reflect: false },
            checked: { type: Boolean, reflect: true },
            isSwitch: { type: Boolean, reflect: false, attribute: 'switch' },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
            this.initialCheckedValue = this.checked;
        }
    }

    updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('checked')) {
            if (this.checked) {
                this.setValue(this.value || 'on');
            } else {
                this.setValue('');
            }
        }

        if (changedProperties.has('value')) {
            if (this.checked) {
                this.setValue(this.value || 'on');
            }
        }
    }

    render(): TemplateResult {
        return html` ${!this.isSwitch ? this.renderCheckboxDefault() : this.renderCheckboxSwitch()} `;
    }

    renderCheckboxDefault(): TemplateResult {
        const classes = {
            'vl-checkbox': true,
            'vl-checkbox--disabled': this.disabled,
            'vl-checkbox--error': this.isInvalid || this.error,
            'vl-checkbox--success': this.success,
            'vl-checkbox--block': this.block,
        };

        return html`
            <label class=${classMap(classes)}>
                <input
                    id=${this.id}
                    name=${this.name}
                    type="checkbox"
                    class="vl-checkbox__toggle"
                    aria-label=${this.label}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `;
    }

    renderCheckboxSwitch(): TemplateResult {
        const classes = {
            'vl-checkbox--switch__wrapper': true,
            'vl-checkbox--disabled': this.disabled,
            'vl-checkbox--error': this.isInvalid || this.error,
            'vl-checkbox--success': this.success,
            'vl-checkbox--block': this.block,
        };

        return html`
            <div class=${classMap(classes)}>
                <input
                    id=${this.id}
                    name=${this.name}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    aria-label=${this.label}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                />
                <label class="vl-checkbox__label" @click=${this.toggle}>
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `;
    }

    toggle(): void {
        if (!this.disabled) {
            this.checked = !this.checked;

            const detailObject: { checked: boolean; value?: string } = { checked: this.checked };
            if (this.checked) {
                detailObject.value = this.value || 'on';
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

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl(): void {
        super.resetFormControl();

        this.checked = this.initialCheckedValue;
        this.value = this.initialValue;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-checkbox-next': VlCheckboxComponent;
    }
}
