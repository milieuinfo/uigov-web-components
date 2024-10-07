import { css, CSSResult, html, LitElement } from 'lit';
import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlInputFieldComponent } from '@domg-wc/form/next/input-field';
import { SelectRichOption, VlSelectRichComponent } from '@domg-wc/form/next/select-rich';
import { parseFormData } from '@domg-wc/form/utils';
import { VlFormLabelComponent } from '@domg-wc/form/next/form-label';
import { VlButtonComponent } from '@domg-wc/components/next/button';

@webComponent('vl-form-data')
export class VlFormDataComponent extends LitElement {
    private hobbies: SelectRichOption[] = [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
        { label: 'Cocktails', value: 'cocktails' },
    ];
    private parsedFormData: { naam: FormDataEntryValue; hobbies: FormDataEntryValue[] } | null = null;

    static {
        registerWebComponents([
            VlFormLabelComponent,
            VlInputFieldComponent,
            VlSelectRichComponent,
            VlErrorMessageComponent,
            VlButtonComponent,
        ]);
    }

    static override get properties() {
        return {
            parsedFormData: { type: Object, state: true },
        };
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

    override render() {
        return html`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-rich-next
                            id="hobbies"
                            name="hobbies"
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                    ${this.parsedFormData
                        ? html`
                              <div class="vl-form-col--4-12">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-form-col--8-12">
                                  <pre>${JSON.stringify(this.parsedFormData, null, 10)}</pre>
                              </div>
                          `
                        : ''}
                </div>
            </form>
        `;
    }

    private onSubmit(event: Event): void {
        event.preventDefault();

        const data = <typeof this.parsedFormData>parseFormData(event.target as HTMLFormElement);
        this.parsedFormData = data;
        console.log(data);
    }

    private onReset(): void {
        this.parsedFormData = null;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-data': VlFormDataComponent;
    }
}
