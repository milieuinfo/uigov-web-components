import { VlAccordionComponent, VlCascaderComponent, VlInfoTile } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import './app.element.scss';
import { getItemList } from './vl-cascader.utils';
import { cascaderItemTemplates } from './vl-cascader.templates';
import { nodeData } from './vl-cascader.data';

export class AppElement extends HTMLElement {
    static {
        document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
        registerWebComponents([VlInputFieldComponent, VlErrorMessageComponent, VlTextareaComponent]);
    }

    constructor() {
        super();

        this.innerHTML = `
                        <main>
                            <vl-side-sheet
                            data-vl-left data-vl-custom-css=""
                            data-vl-open data-vl-custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"
                            >
                                <h4 is="vl-h4" class="vl-title--has-border">Kies uit kantoren</h4>
                                <vl-cascader id="cascader" ></vl-cascader>
                            </vl-side-sheet>
                        </main>
        `;

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputKids = this.onInputKids.bind(this);
        this.onResetKids = this.onResetKids.bind(this);
        this.onInputAge = this.onInputAge.bind(this);
    }

    connectedCallback(): void {
        const cascader: VlCascaderComponent = this.querySelector('#cascader');
        console.log('cascader', cascader);
        if (cascader) {
            //                     <vl-cascader .items=${nodeData} .itemListFn=${getItemList} .templates=${cascaderItemTemplates}>
            cascader.items = nodeData;
            cascader.itemListFn = getItemList;
            cascader.templates = cascaderItemTemplates;
        } else {
            console.error('cascader not found');
        }
        console.log('cascader.items', cascader.items);
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
