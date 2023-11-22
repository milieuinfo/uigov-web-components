import { VlInputFieldComponent } from '@domg-wc/components/next/form/input-field';
import { VlErrorMessageComponent } from '@domg-wc/components/next/form/error-message';
import { VlTextareaComponent } from '@domg-wc/components/next/form/textarea';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import './app.element.scss';

export class AppElement extends HTMLElement {
    static {
        document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
        registerWebComponents([VlInputFieldComponent, VlErrorMessageComponent, VlTextareaComponent]);
    }

    constructor() {
        super();

        this.innerHTML = `
            <div class="container">
                <form id="form" class="vl-form">
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
                                max-length="10">
                            </vl-input-field-next>
                            <vl-error-message-next input="voornaam" state="valueMissing">
                                Gelieve een voornaam in te vullen.
                            </vl-error-message-next>
                            <vl-error-message-next input="voornaam" state="tooShort">
                                Gelieve minimum 5 karakters te gebruiken.
                            </vl-error-message-next>
                            <vl-error-message-next input="voornaam" state="tooLong">
                                Gelieve maximum 10 karakters te gebruiken.
                            </vl-error-message-next>
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
                                pattern="Van(.*)">
                            </vl-input-field-next>
                            <vl-error-message-next input="achternaam" state="valueMissing">
                                Gelieve een achternaam in te vullen.
                            </vl-error-message-next>
                            <vl-error-message-next input="achternaam" state="patternMismatch">
                                Gelieve een achternaam in te vullen die begint met "Van".
                            </vl-error-message-next>
                        </div>
                        <div class="vl-col--3-12">
                            <label class="vl-form__label vl-form__label--block" for="hobby">Hobby's *</label>
                        </div>
                        <div class="vl-col--9-12">
                            <vl-textarea-next
                                id="hobby"
                                name="hobby"
                                block
                                required
                                min-length="10"
                                max-length="100"
                                value="Mijn hobby's zijn ..."
                                rows="10">
                            </vl-textarea-next>
                            <vl-error-message-next input="hobby" state="valueMissing">
                                Gelieve je hobby's in te vullen.
                            </vl-error-message-next>
                            <vl-error-message-next input="hobby" state="tooShort">
                                Gelieve minimum 10 karakters te gebruiken.
                            </vl-error-message-next>
                            <vl-error-message-next input="hobby" state="tooLong">
                                Gelieve maximum 100 karakters te gebruiken.
                            </vl-error-message-next>
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
                                max="99">
                            </vl-input-field-next>
                            <vl-error-message-next input="leeftijd" state="valueMissing">
                                Gelieve een leeftijd in te vullen.
                            </vl-error-message-next>
                            <vl-error-message-next input="leeftijd" state="rangeUnderflow">
                                De minimum leeftijd is 1 jaar.
                            </vl-error-message-next>
                            <vl-error-message-next input="leeftijd" state="rangeOverflow">
                                De maximum leeftijd is 99 jaar.
                            </vl-error-message-next>
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
                                min="0">
                            </vl-input-field-next>
                            <vl-error-message-next input="kinderen" state="valueMissing">
                                Gelieve een aantal kinderen in te vullen.
                            </vl-error-message-next>
                            <vl-error-message-next input="kinderen" state="rangeUnderflow">
                                Het minimum aantal kinderen is 0.
                            </vl-error-message-next>
                        </div>
                        <div id="address-field-placeholder" hidden></div>
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

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputKids = this.onInputKids.bind(this);
        this.onResetKids = this.onResetKids.bind(this);
        this.onInputAge = this.onInputAge.bind(this);
    }

    connectedCallback(): void {
        const form = this.querySelector('form');
        form?.addEventListener('submit', this.onSubmit);

        const inputKids = this.querySelector('vl-input-field-next[name="kinderen"]');
        inputKids?.addEventListener('input', this.onInputKids);
        inputKids?.addEventListener('reset', this.onResetKids);

        const inputAge = this.querySelector('vl-input-field-next[name="leeftijd"]');
        inputAge?.addEventListener('input', this.onInputAge);
    }

    disconnectedCallback(): void {
        const form = this.querySelector('form');
        form?.removeEventListener('submit', this.onSubmit);

        const inputKids = this.querySelector('vl-input-field-next[name="kinderen"]');
        inputKids?.removeEventListener('input', this.onInputKids);
        inputKids?.removeEventListener('reset', this.onResetKids);

        const inputAge = this.querySelector('vl-input-field-next[name="leeftijd"]');
        inputAge?.removeEventListener('input', this.onInputAge);
    }

    private onSubmit(e: Event): void {
        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);
        console.log(Object.fromEntries(data));
    }

    private onInputKids({ target }: Event & { target: HTMLInputElement }): void {
        const countOfKids = parseInt(target.value);

        if (countOfKids > 0) {
            this.showAddressField();
        } else {
            this.hideAddressField();
        }

        const addressInput = this.querySelector('vl-input-field-next[name="adres"]');
        const addressLabel = this.querySelector('label[for="adres"]');

        if (countOfKids > 1) {
            addressInput?.setAttribute('required', '');
            addressLabel.innerHTML = 'Adres *';
        } else {
            addressInput?.removeAttribute('required');

            if (addressLabel) {
                addressLabel.innerHTML = 'Adres';
            }
        }
    }

    private onResetKids(): void {
        this.hideAddressField();
    }

    private onInputAge({ target }: Event & { target: HTMLInputElement }): void {
        const age = parseInt(target.value);

        if (age === 32) {
            const inputFirstname = this.querySelector('vl-input-field-next[name="voornaam"]');
            inputFirstname?.setAttribute('value', 'Kristof');
        }
    }

    private showAddressField(): void {
        const addressField = this.querySelector('vl-input-field-next[name="adres"]');

        if (addressField) {
            return;
        }

        const addressFieldTemplate = document.createElement('template');

        addressFieldTemplate.innerHTML = `
            <div id="adress-field-label-col" class="vl-col--3-12">
                <label class="vl-form__label vl-form__label--block" for="adres">
                    Adres
                </label>
            </div>
            <div id="adress-field-input-col" class="vl-col--9-12">
                <vl-input-field-next
                    id="adres"
                    name="adres"
                    block>
                </vl-input-field-next>
                <vl-error-message-next input="adres" state="valueMissing">
                    Gelieve een adres in te vullen.
                </vl-error-message-next>
            </div>
        `;

        const addressFieldPlaceholder = this.querySelector('#address-field-placeholder');
        addressFieldPlaceholder?.replaceWith(addressFieldTemplate.content);
    }

    private hideAddressField(): void {
        const addressLabelCol = this.querySelector('#adress-field-label-col');
        addressLabelCol?.remove();

        const addressFieldPlaceholderTemplate = document.createElement('template');
        addressFieldPlaceholderTemplate.innerHTML = '<div id="address-field-placeholder" hidden></div>';

        const addressInputCol = this.querySelector('#adress-field-input-col');
        addressInputCol?.replaceWith(addressFieldPlaceholderTemplate.content);
    }
}
customElements.define('app-element', AppElement);
