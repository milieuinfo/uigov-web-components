import { CSSResult, html, LitElement, PropertyDeclarations, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlInputFieldComponent } from '@domg-wc/components/next/form/input-field';
import { VlErrorMessageComponent } from '@domg-wc/components/next/form/error-message';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';
import { cascaderItemTemplates } from './vl-cascader.templates';
import { getItemList } from './vl-cascader.utils';
import { nodeData } from './vl-cascader.data';

@customElement('app-element')
export class AppElement extends LitElement {
    private firstName = '';
    private showAddressField = false;
    private addressFieldRequired = false;

    static {
        registerWebComponents([VlInputFieldComponent, VlErrorMessageComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            firstName: { type: String, state: true },
            showAddressField: { type: Boolean, state: true },
            addressFieldRequired: { type: Boolean, state: true },
        };
    }

    render(): TemplateResult {
        return html`
            <div class="container">
                <form id="form" class="vl-form" @submit=${this.onSubmit}>
                    <div class="vl-form-grid vl-form-grid--is-stacked">
                        <div class="vl-col--3-12">
                            <label class="vl-form__label vl-form__label--block" for="voornaam">Voornaam *</label>
                        </div>
                        <div class="vl-col--9-12">
                            <vl-input-field-next
                                id="voornaam"
                                name="voornaam"
                                block
                                required
                                min-length="5"
                                max-length="10"
                                value=${this.firstName}
                                @input=${this.onInputFirstName}
                            ></vl-input-field-next>
                            <vl-error-message-next input="voornaam" state="valueMissing"
                                >Gelieve een voornaam in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="voornaam" state="tooShort"
                                >Gelieve minimum 5 karakters te gebruiken.</vl-error-message-next
                            >
                            <vl-error-message-next input="voornaam" state="tooLong"
                                >Gelieve maximum 10 karakters te gebruiken.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--3-12">
                            <label class="vl-form__label vl-form__label--block" for="achternaam">Achternaam *</label>
                        </div>
                        <div class="vl-col--9-12">
                            <vl-input-field-next
                                id="achternaam"
                                name="achternaam"
                                block
                                required
                                pattern="Van(.*)"
                            ></vl-input-field-next>
                            <vl-error-message-next input="achternaam" state="valueMissing"
                                >Gelieve een achternaam in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="achternaam" state="patternMismatch"
                                >Gelieve een achternaam in te vullen die begint met "Van".</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--3-12">
                            <label class="vl-form__label vl-form__label--block" for="leeftijd">Leeftijd *</label>
                        </div>
                        <div class="vl-col--9-12">
                            <vl-input-field-next
                                id="leeftijd"
                                name="leeftijd"
                                block
                                required
                                type="number"
                                min="1"
                                max="99"
                                @input=${this.onInputAge}
                            ></vl-input-field-next>
                            <vl-error-message-next input="leeftijd" state="valueMissing"
                                >Gelieve een leeftijd in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="leeftijd" state="rangeUnderflow"
                                >De minimum leeftijd is 1 jaar.</vl-error-message-next
                            >
                            <vl-error-message-next input="leeftijd" state="rangeOverflow"
                                >De maximum leeftijd is 99 jaar.</vl-error-message-next
                            >
                        </div>
                        <div class="vl-col--3-12">
                            <label class="vl-form__label vl-form__label--block" for="kinderen">Aantal kinderen *</label>
                        </div>
                        <div class="vl-col--9-12">
                            <vl-input-field-next
                                id="kinderen"
                                name="kinderen"
                                block
                                type="number"
                                required
                                min="0"
                                @input=${this.onInputKids}
                                @reset=${this.onResetKids}
                            ></vl-input-field-next>
                            <vl-error-message-next input="kinderen" state="valueMissing"
                                >Gelieve een aantal kinderen in te vullen.</vl-error-message-next
                            >
                            <vl-error-message-next input="kinderen" state="rangeUnderflow"
                                >Het minimum aantal kinderen is 0.</vl-error-message-next
                            >
                        </div>
                        ${this.showAddressField
                            ? html`
                                  <div class="vl-col--3-12">
                                      <label class="vl-form__label vl-form__label--block" for="adres"
                                          >Adres ${this.addressFieldRequired ? '*' : ''}</label
                                      >
                                  </div>
                                  <div class="vl-col--9-12">
                                      <vl-input-field-next
                                          id="adres"
                                          name="adres"
                                          block
                                          ?required=${this.addressFieldRequired}
                                      ></vl-input-field-next>
                                      <vl-error-message-next input="adres" state="valueMissing"
                                          >Gelieve een adres in te vullen.</vl-error-message-next
                                      >
                                  </div>
                              `
                            : ''}
                        <div class="vl-col--9-12 vl-push--3-12">
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

    private onInputFirstName({ target }: Event & { target: HTMLInputElement }): void {
        this.firstName = target.value;
    }

    private onInputKids({ target }: Event & { target: HTMLInputElement }): void {
        const countOfKids = parseInt(target.value);

        if (countOfKids > 0) {
            this.showAddressField = true;
        } else {
            this.showAddressField = false;
        }

        if (countOfKids > 1) {
            this.addressFieldRequired = true;
        } else {
            this.addressFieldRequired = false;
        }
    }

    private onResetKids(): void {
        this.showAddressField = false;
        this.addressFieldRequired = false;
    }

    private onInputAge({ target }: Event & { target: HTMLInputElement }): void {
        const age = parseInt(target.value);

        if (age === 32) {
            this.firstName = 'Kristof';
        }
    }
}
