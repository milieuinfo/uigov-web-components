import { Validator } from '@open-wc/form-control';
import { CSSResult, LitElement, PropertyDeclarations, html, css } from 'lit';
import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlInputFieldComponent } from '@domg-wc/form/next/input-field';
import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';
import { VlFormLabelComponent } from '@domg-wc/form/next/form-label';
import { VlButtonComponent } from '@domg-wc/components/next/button';
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

@webComponent('vl-input-field-with-foo-validator')
export class VlInputFieldWithFooValidatorComponent extends VlInputFieldComponent {
    static override formControlValidators = [...VlInputFieldComponent.formControlValidators, fooValidator];
}

@webComponent('vl-form-custom-validation')
export class VlFormCustomValidationComponent extends LitElement {
    private success = false;

    static {
        registerWebComponents([
            VlInputFieldWithFooValidatorComponent,
            VlFormLabelComponent,
            VlErrorMessageComponent,
            VlButtonComponent,
        ]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlElementsStyle,
            css`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `,
        ];
    }

    static override get properties(): PropertyDeclarations {
        return {
            success: { type: Boolean, state: true },
        };
    }

    override render() {
        return html`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-col--4-12">
                        <vl-form-label-next for="waarde" label="Waarde *" block></vl-form-label-next>
                    </div>
                    <div class="vl-col--8-12">
                        <vl-input-field-with-foo-validator
                            id="waarde"
                            name="waarde"
                            block
                            required
                            ?success=${this.success}
                            @invalid=${() => {
                                this.success = false;
                            }}
                        ></vl-input-field-with-foo-validator>
                        <vl-error-message-next for="waarde" state="valueMissing"
                            >Gelieve een waarde in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="waarde" state="customError"
                            >Gelieve 'foo' als waarde in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-col--6-12 vl-push--4-12">
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
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
        'vl-form-custom-validation': VlFormCustomValidationComponent;
    }
}
