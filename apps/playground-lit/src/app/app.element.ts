import { CSSResult, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlErrorMessageComponent } from '@domg-wc/components/next/form/error-message';
import { VlInputFieldComponent } from '@domg-wc/components/next/form/input-field';
import { VlTextareaComponent } from '@domg-wc/components/next/form/textarea';
import { VlSelectComponent, SelectOption } from '@domg-wc/components/next/form/select';
import { VlCheckboxComponent } from '@domg-wc/components/next/form/checkbox';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';

@customElement('app-element')
export class AppElement extends LitElement {
    // Required state values
    private firstNameRequired = false;
    private lastNameRequired = false;
    private ageRequired = false;
    private kidsRequired = false;
    private interestsRequired = false;
    private birthplaceRequired = false;
    private hobbiesRequired = false;
    private addressFieldRequired = false;
    private filledInTruthfullyRequired = false;

    // Disabled state values
    private firstNameDisabled = false;
    private lastNameDisabled = false;
    private ageDisabled = false;
    private kidsDisabled = false;
    private interestsDisabled = false;
    private birthplaceDisabled = false;
    private hobbiesDisabled = false;
    private addressFieldDisabled = false;
    private filledInTruthfullyDisabled = false;

    // Other state values
    private showAddressField = false;

    // Form values
    private firstName = '';
    private lastName = '';
    private age: number = null;
    private kids: number = null;
    private interests = '';
    private birthplaces: SelectOption[] = [
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
    private addressField = '';
    private filledInTruthfully = false;
    private filledInTruthfullyValue = '';

    static {
        registerWebComponents([
            VlErrorMessageComponent,
            VlInputFieldComponent,
            VlTextareaComponent,
            VlSelectComponent,
            VlCheckboxComponent,
        ]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            firstNameRequired: { type: Boolean, state: true },
            lastNameRequired: { type: Boolean, state: true },
            interestsRequired: { type: Boolean, state: true },
            ageRequired: { type: Boolean, state: true },
            kidsRequired: { type: Boolean, state: true },
            birthplaceRequired: { type: Boolean, state: true },
            hobbiesRequired: { type: Boolean, state: true },
            addressFieldRequired: { type: Boolean, state: true },
            filledInTruthfullyRequired: { type: Boolean, state: true },
            firstNameDisabled: { type: Boolean, state: true },
            lastNameDisabled: { type: Boolean, state: true },
            ageDisabled: { type: Boolean, state: true },
            kidsDisabled: { type: Boolean, state: true },
            interestsDisabled: { type: Boolean, state: true },
            birthplaceDisabled: { type: Boolean, state: true },
            hobbiesDisabled: { type: Boolean, state: true },
            addressFieldDisabled: { type: Boolean, state: true },
            filledInTruthfullyDisabled: { type: Boolean, state: true },
            firstName: { type: String, state: true },
            lastName: { type: String, state: true },
            age: { type: Number, state: true },
            kids: { type: Number, state: true },
            interests: { type: String, state: true },
            birthplaces: { type: Array, state: true },
            hobbies: { type: Array, state: true },
            addressField: { type: String, state: true },
            filledInTruthfully: { type: Boolean, state: true },
            filledInTruthfullyValue: { type: String, state: true },
            showAddressField: { type: Boolean, state: true },
        };
    }

    render(): TemplateResult {
        return html`
            <div class="container">
                <div class="vl-action-group vl-action-group__top">
                    <button
                        class="vl-button"
                        type="button"
                        @click=${() => (this.showAddressField = !this.showAddressField)}
                    >
                        Toggle address field
                    </button>
                </div>
                <form id="form" class="vl-form" @submit=${this.onSubmit}>
                    <div class="vl-form-grid vl-form-grid--is-stacked">
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="voornaam"
                                >Voornaam${this.firstNameRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-input-field-next
                                id="voornaam"
                                name="voornaam"
                                block
                                ?required=${this.firstNameRequired}
                                ?disabled=${this.firstNameDisabled}
                                value=${this.firstName}
                                pattern="^[a-zA-Z]*$"
                                min-length=${2}
                                max-length=${20}
                                @input=${(e: InputEvent) => (this.firstName = (e.target as HTMLInputElement).value)}
                                @reset=${() => (this.firstName = '')}
                            ></vl-input-field-next>
                            <vl-error-message-next input="voornaam" state="valueMissing"
                                >Gelieve een voornaam in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="voornaam" state="tooShort"
                                >Gelieve minimum 2 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="voornaam" state="tooLong"
                                >Gelieve maximum 20 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="voornaam" state="patternMismatch"
                                >Gelieve geen nummers of speciale tekens in te vullen.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.firstNameRequired = !this.firstNameRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.firstNameDisabled = !this.firstNameDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.firstName = 'Karim')}
                                >
                                    Set 'Karim'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="achternaam"
                                >Achternaam${this.lastNameRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-input-field-next
                                id="achternaam"
                                name="achternaam"
                                block
                                ?required=${this.lastNameRequired}
                                ?disabled=${this.lastNameDisabled}
                                min-length=${2}
                                max-length=${20}
                                value=${this.lastName}
                                pattern="^[a-zA-Z]*$"
                                @input=${(e: InputEvent) => (this.lastName = (e.target as HTMLInputElement).value)}
                                @reset=${() => (this.lastName = '')}
                            ></vl-input-field-next>
                            <vl-error-message-next input="achternaam" state="valueMissing"
                                >Gelieve een achternaam in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="achternaam" state="tooShort"
                                >Gelieve minimum 2 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="achternaam" state="tooLong"
                                >Gelieve maximum 20 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="achternaam" state="patternMismatch"
                                >Gelieve geen nummers of speciale tekens in te vullen.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.lastNameRequired = !this.lastNameRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.lastNameDisabled = !this.lastNameDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.lastName = 'Spaas')}
                                >
                                    Set 'Spaas'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="interests"
                                >Interesses${this.interestsRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-textarea-next
                                id="interests"
                                name="interests"
                                block
                                ?required=${this.interestsRequired}
                                ?disabled=${this.interestsDisabled}
                                min-length=${5}
                                max-length=${100}
                                rows=${10}
                                value=${this.interests}
                                @input=${(e: InputEvent) => (this.interests = (e.target as HTMLInputElement).value)}
                                @reset=${() => (this.interests = '')}
                            ></vl-textarea-next>
                            <vl-error-message-next input="interests" state="valueMissing"
                                >Gelieve je interesses in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="interests" state="tooShort"
                                >Gelieve minimum 5 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="interests" state="tooLong"
                                >Gelieve maximum 100 karakters te gebruiken.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.interestsRequired = !this.interestsRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.interestsDisabled = !this.interestsDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.interests = 'Coding, spreadsheets')}
                                >
                                    Set 'Coding, spreadsheets'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="geboorteplaats"
                                >Geboorteplaats${this.birthplaceRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-select-next
                                id="geboorteplaats"
                                name="geboorteplaats"
                                ?required=${this.birthplaceRequired}
                                ?disabled=${this.birthplaceDisabled}
                                deletable
                                search
                                .options=${this.birthplaces}
                                result-limit="2"
                                placeholder="Selecteer je geboorteplaats"
                                no-results-text="Geen geboorteplaatsen gevonden"
                                search-placeholder="Zoek geboorteplaats"
                                @reset=${this.resetBirthplace}
                            >
                            </vl-select-next>
                            <vl-error-message-next input="geboorteplaats" state="valueMissing"
                                >Gelieve een geboorteplaats te selecteren.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.birthplaceRequired = !this.birthplaceRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.birthplaceDisabled = !this.birthplaceDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${this.selectBirthplace}
                                >
                                    Select 'Turnhout'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="hobby's"
                                >Hobby's${this.hobbiesRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-select-next
                                id="hobby's"
                                name="hobby's"
                                ?required=${this.hobbiesRequired}
                                ?disabled=${this.hobbiesDisabled}
                                deletable
                                multiple
                                .options=${this.hobbies}
                                placeholder="Selecteer je hobby's"
                                no-results-text="Geen hobbies gevonden"
                                no-choices-text="Geen resterende hobbies gevonden"
                                @reset=${this.resetHobbies}
                            >
                            </vl-select-next>
                            <vl-error-message-next input="hobby's" state="valueMissing"
                                >Gelieve een hobby te selecteren.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.hobbiesRequired = !this.hobbiesRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.hobbiesDisabled = !this.hobbiesDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button class="vl-button vl-button--secondary" type="button" @click=${this.selectHobby}>
                                    Select 'Boardgames'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="leeftijd"
                                >Leeftijd${this.ageRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-input-field-next
                                id="leeftijd"
                                name="leeftijd"
                                type="number"
                                block
                                ?required=${this.ageRequired}
                                ?disabled=${this.ageDisabled}
                                min=${0}
                                max=${99}
                                value=${this.age}
                                @input=${(e: InputEvent) => (this.age = Number((e.target as HTMLInputElement).value))}
                                @reset=${() => (this.age = null)}
                            ></vl-input-field-next>
                            <vl-error-message-next input="leeftijd" state="valueMissing"
                                >Gelieve een leeftijd in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="leeftijd" state="rangeUnderflow"
                                >De minimum leeftijd is 0 jaar.</vl-error-message-next
                            >
                            <vl-error-message-next input="leeftijd" state="rangeOverflow"
                                >De maximum leeftijd is 99 jaar.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.ageRequired = !this.ageRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.ageDisabled = !this.ageDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.age = 40)}
                                >
                                    Set '40'
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="kinderen"
                                >Aantal kinderen${this.kidsRequired ? ' *' : ''}</label
                            >
                        </div>
                        <div class="vl-col--4-12">
                            <vl-input-field-next
                                id="kinderen"
                                name="kinderen"
                                type="number"
                                block
                                ?required=${this.kidsRequired}
                                ?disabled=${this.kidsDisabled}
                                min=${0}
                                value=${this.kids}
                                @input=${(e: InputEvent) => (this.kids = Number((e.target as HTMLInputElement).value))}
                                @reset=${() => (this.kids = null)}
                            ></vl-input-field-next>
                            <vl-error-message-next input="kinderen" state="valueMissing"
                                >Gelieve een aantal kinderen in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="kinderen" state="rangeUnderflow"
                                >Het minimum aantal kinderen is 0.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.kidsRequired = !this.kidsRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.kidsDisabled = !this.kidsDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.kids = 0)}
                                >
                                    Set '0'
                                </button>
                            </div>
                        </div>
                        ${this.showAddressField
                            ? html`
                                  <div class="vl-col--2-12">
                                      <label class="vl-form__label vl-form__label--block" for="adres"
                                          >Adres${this.addressFieldRequired ? ' *' : ''}</label
                                      >
                                  </div>
                                  <div class="vl-col--4-12">
                                      <vl-input-field-next
                                          id="adres"
                                          name="adres"
                                          block
                                          ?required=${this.addressFieldRequired}
                                          ?disabled=${this.addressFieldDisabled}
                                          value=${this.addressField}
                                          @input=${(e: InputEvent) =>
                                              (this.addressField = (e.target as HTMLInputElement).value)}
                                          @reset=${() => (this.addressField = '')}
                                      ></vl-input-field-next>
                                      <vl-error-message-next input="adres" state="valueMissing"
                                          >Gelieve een adres in te vullen.</vl-error-message-next
                                      >
                                  </div>
                                  <div class="vl-col--6-12">
                                      <div class="vl-action-group">
                                          <button
                                              class="vl-button vl-button--secondary"
                                              type="button"
                                              @click=${() => (this.addressFieldRequired = !this.addressFieldRequired)}
                                          >
                                              Toggle required
                                          </button>
                                          <button
                                              class="vl-button vl-button--secondary"
                                              type="button"
                                              @click=${() => (this.addressFieldDisabled = !this.addressFieldDisabled)}
                                          >
                                              Toggle disabled
                                          </button>
                                          <button
                                              class="vl-button vl-button--secondary"
                                              type="button"
                                              @click=${() => (this.addressField = 'Koning Albert II-laan 20')}
                                          >
                                              Set 'Koning Albert II-laan 20'
                                          </button>
                                      </div>
                                  </div>
                              `
                            : ''}
                        <div class="vl-col--2-12">
                            <label class="vl-form__label vl-form__label--block" for="waarheidsgetrouw">
                                Waarheidsgetrouw${this.filledInTruthfullyRequired ? ' *' : ''}
                            </label>
                        </div>
                        <div class="vl-col--4-12">
                            <vl-checkbox-next
                                id="waarheidsgetrouw"
                                name="waarheidsgetrouw"
                                block
                                value=${this.filledInTruthfullyValue}
                                ?required=${this.filledInTruthfullyRequired}
                                ?disabled=${this.filledInTruthfullyDisabled}
                                ?checked=${this.filledInTruthfully}
                                @vl-checked=${(e: CustomEvent) => (this.filledInTruthfully = e.detail.checked)}
                                @reset=${() => {
                                    this.filledInTruthfully = false;
                                    this.filledInTruthfullyValue = '';
                                }}
                            >
                                Naar waarheid ingevuld
                            </vl-checkbox-next>
                            <vl-error-message-next input="waarheidsgetrouw" state="valueMissing">
                                Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                            </vl-error-message-next>
                        </div>
                        <div class="vl-col--6-12">
                            <div class="vl-action-group">
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.filledInTruthfullyRequired = !this.filledInTruthfullyRequired)}
                                >
                                    Toggle required
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.filledInTruthfullyDisabled = !this.filledInTruthfullyDisabled)}
                                >
                                    Toggle disabled
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.filledInTruthfullyValue = 'Zo waar als een koe')}
                                >
                                    Set 'Zo waar als een koe'
                                </button>
                                <button
                                    class="vl-button vl-button--secondary"
                                    type="button"
                                    @click=${() => (this.filledInTruthfully = true)}
                                >
                                    Check
                                </button>
                            </div>
                        </div>
                        <div class="vl-col--6-12 vl-push--2-12">
                            <div class="vl-action-group">
                                <button class="vl-button" type="submit">Verstuur</button>
                                <button class="vl-button" type="reset">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        `;
    }

    private onSubmit(e: Event): void {
        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);
        console.log(Object.fromEntries(data));
    }

    private selectBirthplace(): void {
        const birthplaces: SelectOption[] = this.birthplaces.map((birthplaceGroup) => {
            birthplaceGroup.choices = birthplaceGroup.choices?.map((birthplace) => {
                birthplace.selected = birthplace.value === 'turnhout';
                return birthplace;
            });
            return birthplaceGroup;
        });

        this.birthplaces = birthplaces;
    }

    private resetBirthplace(): void {
        this.birthplaces = [
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
    }

    private selectHobby(): void {
        const hobbies: SelectOption[] = [
            ...this.hobbies.map((hobby) => {
                hobby.selected = hobby.value === 'boardgames';
                return hobby;
            }),
        ];

        this.hobbies = hobbies;
    }

    private resetHobbies(): void {
        this.hobbies = [
            { label: 'Padel', value: 'padel' },
            { label: 'Dans', value: 'dans' },
            { label: 'Drummen', value: 'drummen' },
            { label: 'Zwemmen', value: 'zwemmen' },
            { label: 'Boardgames', value: 'boardgames' },
            { label: 'Fietsen', value: 'fietsen' },
        ];
    }
}
