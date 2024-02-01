import { CSSResult, html, nothing, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { checkboxStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import checkboxUigStyle from './vl-checkbox.component.uig-css';
import { FormControl, formControlDefaults } from '../form-control/form-control';

export const checkboxDefaults = {
    ...formControlDefaults,
    block: false as boolean,
    value: '' as string,
    checked: false as boolean,
    isSwitch: false as boolean,
} as const;

@customElement('vl-checkbox-next')
export class VlCheckboxComponent extends FormControl {
    // Properties
    private block = checkboxDefaults.block;
    private value = checkboxDefaults.value;
    private checked = checkboxDefaults.checked;
    private isSwitch = checkboxDefaults.isSwitch;

    // Variables
    private initialValue = '';
    private initialCheckedValue = false;

    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, checkboxStyle, checkboxUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            block: { type: Boolean },
            value: { type: String },
            checked: { type: Boolean, reflect: true },
            isSwitch: { type: Boolean, attribute: 'switch' },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
            this.initialCheckedValue = this.checked;
        }
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('checked') || changedProperties.has('value')) {
            const value = this.checked ? this.value || 'on' : '';
            const detail: { checked: boolean; value?: string } = { checked: this.checked };

            if (this.checked) {
                detail.value = value;
            }

            this.setValue(value);
            this.dispatchEvent(
                new CustomEvent('vl-checked', {
                    bubbles: true,
                    composed: true,
                    detail,
                })
            );
            this.dispatchEventIfValid(detail);
        }
    }

    render(): TemplateResult {
        return html` ${!this.isSwitch ? this.renderCheckboxDefault() : this.renderCheckboxSwitch()} `;
    }

    private renderCheckboxDefault(): TemplateResult {
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
                    name=${this.name || this.id}
                    type="checkbox"
                    class="vl-checkbox__toggle"
                    aria-label=${this.label || nothing}
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

    private renderCheckboxSwitch(): TemplateResult {
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
                    aria-label=${this.label || nothing}
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

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl() {
        super.resetFormControl();

        this.checked = this.initialCheckedValue;
        this.value = this.initialValue;
    }

    private toggle() {
        this.checked = !this.checked;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-checkbox-next': VlCheckboxComponent;
    }
}
