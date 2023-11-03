import { checkboxStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { CSSResult, html, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { classMap } from 'lit/directives/class-map.js';
import { BaseFormControl } from '../BaseFormControl';

export const CheckboxDefaults = {
    value: '',
    checked: false,
    isSwitch: false,
    disabled: false,
};

@customElement('vl-checkbox-next')
export class VlCheckboxComponent extends BaseFormControl {
    private value = CheckboxDefaults.value;
    private checked = CheckboxDefaults.checked;
    private isSwitch = CheckboxDefaults.isSwitch;
    private disabled = CheckboxDefaults.disabled;

    static get styles(): (CSSResult | CSSResult[])[] {
        // TODO: why do we need to add vlElementStyle here?
        return [resetStyle, baseStyle, checkboxStyle, vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            checked: { type: Boolean, attribute: 'checked', reflect: true },
            isSwitch: { type: Boolean, attribute: 'switch', reflect: true },
            value: { type: String, attribute: 'value', reflect: true },
            disabled: { type: Boolean, attribute: 'disabled', reflect: true },
        };
    }

    updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('checked')) {
            if (this.checked) {
                this.setValue(this.value || 'true');
            } else {
                this.setValue('');
            }
        }
    }

    render(): TemplateResult {
        return html` ${!this.isSwitch ? this.renderCheckboxDefault() : this.renderCheckboxSwitch()} `;
    }

    renderCheckboxDefault(): TemplateResult {
        const classes = {
            'vl-checkbox': true,
            'vl-checkbox--block': this.block,
            'vl-checkbox--disabled': this.disabled,
            'vl-checkbox--error': this.isInvalid,
        };

        return html`
            <label class=${classMap(classes)} for=${this.id}>
                <input
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    id=${this.id}
                    name=${this.name}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    .value=${this.value}
                    @click=${this.toggle}
                    aria-label=${this.label}
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
            'vl-checkbox--block': this.block,
            'vl-checkbox--disabled': this.disabled,
            'vl-checkbox--error': this.isInvalid,
        };

        return html`
            <div class="vl-checkbox--switch__wrapper ${classMap(classes)}">
                <input
                    class="vl-checkbox--switch"
                    type="checkbox"
                    id=${this.id}
                    name=${this.name}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    .value=${this.value}
                    aria-label=${this.label}
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
        this.checked = !this.checked;
    }

    get validationTarget(): HTMLInputElement | undefined | null {
        return this.shadowRoot?.querySelector('input');
    }

    resetFormControl(): void {
        super.resetFormControl();

        this.checked = CheckboxDefaults.checked;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-checkbox-next': VlCheckboxComponent;
    }
}
