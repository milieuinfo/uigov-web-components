import { customElement } from 'lit/decorators.js';
import { Validator } from '@open-wc/form-control';
import { CSSResult, LitElement, PropertyDeclarations, html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlInputFieldComponent } from '@domg-wc/form/next/input-field';
import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';
import { vlElementsStyle } from '@domg-wc/elements';

const fooValidator: Validator = {
    key: 'customError',
    message: `Value does not equal 'foo'`,
    isValid(_instance: HTMLElement, value: string): boolean {
        if (!value) {
            return true;
        }

        if (value !== 'foo') {
            return false;
        }

        return true;
    },
};

@customElement('vl-input-field-with-foo-validator')
export class VlInputFieldWithFooValidatorComponent extends VlInputFieldComponent {
    static formControlValidators = [...VlInputFieldComponent.formControlValidators, fooValidator];
}

@customElement('vl-custom-validation-form')
export class CustomValidationFormComponent extends LitElement {
    private success = false;

    static {
        registerWebComponents([VlInputFieldWithFooValidatorComponent, VlErrorMessageComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            success: { type: Boolean, state: true },
        };
    }

    render() {
        return html`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-col--2-12">
                        <label class="vl-form__label vl-form__label--block" for="waarde">Waarde *</label>
                    </div>
                    <div class="vl-col--4-12">
                        <vl-input-field-with-foo-validator
                            id="waarde"
                            name="waarde"
                            block
                            required
                            ?success=${this.success}
                        ></vl-input-field-with-foo-validator>
                        <vl-error-message-next for="waarde" state="valueMissing"
                            >Gelieve een waarde in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="waarde" state="customError"
                            >Gelieve 'foo' als waarde in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-col--6-12 vl-push--2-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        `;
    }

    private onSubmit(e: Event) {
        e.preventDefault();
        this.success = true;
    }

    private onReset() {
        this.success = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-with-foo-validator': VlInputFieldWithFooValidatorComponent;
        'vl-custom-validation-form': CustomValidationFormComponent;
    }
}
