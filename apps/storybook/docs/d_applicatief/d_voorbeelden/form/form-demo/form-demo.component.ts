import { customElement } from 'lit/decorators.js';
import { CSSResult, LitElement, css, html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlInputFieldComponent } from '@domg-wc/form/next/input-field';
import { VlInputFieldMaskedComponent } from '@domg-wc/form/next/input-field-masked';
import { VlTextareaComponent } from '@domg-wc/form/next/textarea';
import { SelectOption, VlSelectComponent } from '@domg-wc/form/next/select';
import { VlCheckboxComponent } from '@domg-wc/form/next/checkbox';
import { VlRadioComponent, VlRadioGroupComponent } from '@domg-wc/form/next/radio-group';
import { VlDatepickerComponent } from '@domg-wc/form/next/datepicker';
import { VlUploadComponent } from '@domg-wc/form/next/upload';
import { parseFormData } from '@domg-wc/form/utils';

@customElement('vl-form-demo')
export class FormDemoComponent extends LitElement {
    private geboorteplaatsen: SelectOption[] = [
        {
            label: 'België',
            value: '',
            choices: [
                { label: 'Hasselt', value: 'hasselt' },
                { label: 'Turnhout', value: 'turnhout' },
                { label: 'Knokke-Heist', value: 'knokke-heist' },
                { label: 'Waregem', value: 'waregem' },
                { label: 'Lier', value: 'lier' },
            ],
        },
        {
            label: 'Puerto Rico',
            value: '',
            choices: [{ label: 'Rio Piedras', value: 'rio piedras' }],
        },
    ];

    private hobbies: SelectOption[] = [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
    ];

    static {
        registerWebComponents([
            VlInputFieldComponent,
            VlInputFieldMaskedComponent,
            VlTextareaComponent,
            VlDatepickerComponent,
            VlSelectComponent,
            VlRadioGroupComponent,
            VlRadioComponent,
            VlUploadComponent,
            VlCheckboxComponent,
            VlErrorMessageComponent,
        ]);
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
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="naam">Naam *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next
                            id="naam"
                            name="naam"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=${2}
                            max-length=${20}
                        ></vl-input-field-next>
                        <vl-error-message-next for="naam" state="valueMissing"
                            >Gelieve een naam in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooShort"
                            >Gelieve minimum 2 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooLong"
                            >Gelieve maximum 20 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="patternMismatch"
                            >Gelieve geen nummers of speciale tekens in te vullen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="rrn">Rijksregisternummer *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-masked-next
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                        ></vl-input-field-masked-next>
                        <vl-error-message-next for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="geboortedatum">Geboortedatum *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-datepicker-next
                            id="geboortedatum"
                            name="geboortedatum"
                            pattern="^(0?[1-9]|[12][0-9]|3[01])\\.(0?[1-9]|1[012])\\.([0-9]{4})$"
                            block
                            required
                        >
                        </vl-datepicker-next>
                        <vl-error-message-next for="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="geboortedatum" state="patternMismatch">
                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="geboorteplaats">Geboorteplaats *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            deletable
                            .options=${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="Selecteer je geboorteplaats"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-next>
                        <vl-error-message-next for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="hobbies">Hobbies *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="hobbies"
                            name="hobbies"
                            required
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
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="interesses">Interesses *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-textarea-next
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=${5}
                            max-length=${100}
                            rows=${10}
                        ></vl-textarea-next>
                        <vl-error-message-next for="interesses" state="valueMissing"
                            >Gelieve je interesses in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooShort"
                            >Gelieve minimum 5 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooLong"
                            >Gelieve maximum 100 karakters te gebruiken.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="leeftijd">Leeftijd *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            min=${0}
                            max=${99}
                        ></vl-input-field-next>
                        <vl-error-message-next for="leeftijd" state="valueMissing"
                            >Gelieve een leeftijd in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"
                            >De minimum leeftijd is 0 jaar.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeOverflow"
                            >De maximum leeftijd is 99 jaar.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="contactmethode">Contactmethode *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>
                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>
                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>
                            <vl-radio-next value="post">post</vl-radio-next>
                        </vl-radio-group-next>
                        <vl-error-message-next for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="foto">Pasfoto *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-upload-next
                            id="foto"
                            name="foto"
                            accepted-files="image/*"
                            required
                            url="http://httpbin.org/post"
                        ></vl-upload-next>
                        <vl-error-message-next for="foto" state="valueMissing">
                            Gelieve een foto te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="waarheidsgetrouw">Waarheidsgetrouw *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox-next>
                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        `;
    }

    private onSubmit(event: Event): void {
        event.preventDefault();

        const data = parseFormData(event.target as HTMLFormElement);
        console.log(data);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-demo': FormDemoComponent;
    }
}
