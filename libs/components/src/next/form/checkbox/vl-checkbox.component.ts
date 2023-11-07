import { CSSResult, html, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { checkboxStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { vlElementsStyle } from '@domg-wc/elements';
import checkboxUigStyle from './vl-checkbox.component.uig-css';
import { FormControl, FormControlDefaults } from '../form-control/FormControl';

export const CheckboxDefaults = {
    ...FormControlDefaults,
    value: 'true',
    isSwitch: false,
    checked: false,
};

@customElement('vl-checkbox-next')
export class VlCheckboxComponent extends FormControl {
    private checked = CheckboxDefaults.checked;
    private isSwitch = CheckboxDefaults.isSwitch;
    private initialCheckedValue: boolean | undefined = undefined;
    private value = CheckboxDefaults.value;
    private initialValue: string = '';
    static get styles(): (CSSResult | CSSResult[])[] {
        return [resetStyle, baseStyle, vlElementsStyle, checkboxStyle, checkboxUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            checked: { type: Boolean, reflect: true },
            value: { type: String },
            isSwitch: { type: Boolean, attribute: 'switch' },
        };
    }

    constructor() {
        super();
        this.checked = false;
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.initialValue) {
            this.initialValue = this.value;
            if (this.checked) this.initialCheckedValue = this.checked;
        }
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);
        if (changedProperties.has('checked')) {
            if (this.checked) {
                this.setValue(this.value || 'on');
            } else {
                this.setValue('');
            }
            /* // reactive validatie
            if (this.touched || this.initialCheckedValue !== this.checked) {
                this.checkValidity();
            }
            // */
            if (!this.touched) {
                this.touched = true;
            }
        }
    }

    render(): TemplateResult {
        return html` ${!this.isSwitch ? this.renderCheckboxDefault() : this.renderCheckboxSwitch()} `;
    }

    renderCheckboxDefault(): TemplateResult {
        const classes = {
            'vl-checkbox': true,
            'vl-checkbox--block': this.block ?? true,
            'vl-checkbox--disabled': this.disabled ?? true,
            'vl-checkbox--error': (this.error || this.isInvalid) ?? true,
        };
        return html`
            <label id="label" class=${classMap(classes)}>
                <input
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    id=${this.id}
                    name=${this.name}
                    aria-labelledby=${this.label}
                    .value=${live(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
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
            'vl-checkbox--block': this.block ?? true,
            'vl-checkbox--disabled': this.disabled ?? true,
            'vl-checkbox--error': (this.error || this.isInvalid) ?? true,
        };
        return html`
            <div class=${classMap(classes)}>
                <input
                    class="vl-checkbox--switch"
                    type="checkbox"
                    id=${this.id}
                    name=${this.name}
                    aria-labelledby=${this.label}
                    .value=${live(this.value)}
                    .checked=${live(this.checked)}
                    ?disabled=${this.disabled}
                />
                <label for=${this.id} class="vl-checkbox__label" @click=${() => !this.disabled && this.toggle()}>
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
        this.checked = !this.checked;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl(): void {
        super.resetFormControl();
        this.value = String(this.initialValue);
        this.checked = <boolean>this.initialCheckedValue;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-checkbox-next': VlCheckboxComponent;
    }
}
