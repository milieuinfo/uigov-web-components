import { customElement } from 'lit/decorators.js';
import { css, CSSResult, html, LitElement } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlInputFieldComponent } from '@domg-wc/form/next/input-field';
import { SelectOption, VlSelectComponent } from '@domg-wc/form/next/select';
import { parseFormData } from '@domg-wc/form/utils';

@customElement('vl-form-data')
export class FormDataComponent extends LitElement {
    private hobbies: SelectOption[] = [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
        { label: 'Cocktails', value: 'cocktails' },
    ];
    private parsedFormData: { naam: FormDataEntryValue; hobbies: FormDataEntryValue[] };

    static {
        registerWebComponents([VlInputFieldComponent, VlSelectComponent, VlErrorMessageComponent]);
    }

    static get properties() {
        return {
            parsedFormData: { type: Object, state: true },
        };
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlElementsStyle,
            css`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `,
        ];
    }

    render() {
        return html`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="naam">Naam *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="hobbies">Hobbies *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="hobbies"
                            name="hobbies"
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
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
        this.parsedFormData = undefined;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-data': FormDataComponent;
    }
}