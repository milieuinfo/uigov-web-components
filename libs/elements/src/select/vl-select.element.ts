import { type VL, awaitUntil, BaseElementOfType, webComponentPromised } from '@domg-wc/common-utilities';
import { vlFormValidation } from '../form-validation/vl-form-validation';
import { vlFormValidationElement } from '../form-validation/vl-form-validation.element';
import './vl-select.lib.js';
import { elementStyles } from '../vl-elements.uig-css';

declare const vl: VL;

export const SELECT_POSITION = {
    AUTO: 'auto',
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;

export type SelectPosition = (typeof SELECT_POSITION)[keyof typeof SELECT_POSITION];

/**
 * VlSelect
 * @class
 * @classdesc Gebruik de select component om gebruikers toe te laten een selectie te maken uit een lijst met voorgedefinieerde opties. Het is aangeraden om enkel deze component te gebruiken als er 5 of meer opties zijn. Bij minder opties, kan er gebruik gemaakt worden van de radio component.
 *
 * @extends HTMLSelectElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-block - Beeldt de textarea af als een block element en waardoor die de breedte van de parent zal aannemen.
 * @property {boolean} data-vl-error - Duidt aan dat het select element niet correct werd ingevuld.
 * @property {boolean} data-vl-success - Duidt aan dat het select element correct werd ingevuld.
 * @property {boolean} data-vl-disabled - Schakelt het select element uit.
 * @property {string} data-vl-position - De positie naar waar de uitgebreide select geopend wordt: 'auto', 'top', 'bottom'. De default waarde is 'auto'.
 * @property {boolean} data-vl-select - Activeert de uitgebreide select functionaliteit. Maakt achterliggend gebruik van Choices.js.
 * @property {boolean} data-vl-select-search - [DEPRECATED] Gebruik in de plaats het 'data-vl-select-disable-search' attribuut. Activeert of deactiveert de zoek functionaliteit.
 * @property {boolean} data-vl-select-disable-search - Deactiveert de zoek functionaliteit.
 * @property {boolean} data-vl-select-search-empty-text - [DEPRECATED] Gebruik in de plaats het 'data-vl-search-no-results-text' attribuut. De tekst die getoond wordt wanneer er geen resultaten zijn.
 * @property {string} data-vl-search-no-results-text - De tekst die getoond wordt wanneer er geen resultaten zijn.
 * @property {boolean} data-vl-select-search-result-limit - Limiteert het aantal resultaten.
 * @property {boolean} data-vl-select-search-no-result-limit - Deactiveert het limiet voor het aantal resultaten.
 * @property {boolean} data-vl-select-deletable - Zorgt ervoor dat het geselecteerde verwijderd kan worden.
 * @property {string} data-vl-search-placeholder - De placeholder van het zoekveld.
 * @property {string} data-vl-no-more-options - De tekst die getoond wordt wanneer er geen keuzes meer zijn.
 */
@elementStyles()
@webComponentPromised([vlFormValidation.ready()], 'vl-select', { extends: 'select' })
export class VlSelect extends vlFormValidationElement(BaseElementOfType(HTMLSelectElement)) {
    static get readyEvent() {
        return 'VlSelectReady';
    }

    static get _observedAttributes() {
        return vlFormValidation._observedAttributes().concat(['error', 'success', 'disabled']);
    }

    static get _observedChildClassAttributes() {
        return ['block', 'disabled'];
    }

    connectedCallback() {
        this.classList.add('vl-select');
        if (this._hasDressedAttribute) {
            this.dress();
        } else {
            this._dressFormValidation();
            this._setValidationParentAttribute();
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        const searchInputElement = this._choices?.input;
        searchInputElement?.removeEventListener('input', this.onSearchInput);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'data-vl-disabled' || name === 'disabled') {
            this._disabledChangedCallback(newValue);
        } else {
            super.attributeChangedCallback(name, oldValue, newValue);
        }
    }

    /**
     * Geeft de ready event naam.
     *
     * @return {string}
     */
    get readyEvent() {
        return VlSelect.readyEvent;
    }

    get DEFAULT_SEARCH_PLACEHOLDER() {
        return 'Zoek item';
    }

    get DEFAULT_SEARCH_NO_RESULT() {
        return 'Geen resultaten gevonden';
    }

    get DEFAULT_NO_MORE_OPTIONS() {
        return 'Geen resterende opties gevonden';
    }

    get _classPrefix() {
        return 'vl-select--';
    }

    get _dressed() {
        return !!this.getAttribute(VlSelect._dressedAttributeName);
    }

    get _hasDressedAttribute() {
        return this._dataVlSelectAttribute != null;
    }

    get _dataVlSelectAttribute() {
        return this.getAttribute('data-vl-select');
    }

    static get _dressedAttributeName() {
        return 'data-vl-select-dressed';
    }

    /**
     * @param oldValue {String} - wordt niet gebruikt, maar nodig voor de signature super.__changeAttribute
     * @param newValue {String}
     */
    _successChangedCallback(oldValue: string, newValue: string) {
        this.__stateChangedCallback(newValue, 'success');
    }

    /**
     * @param oldValue {String} - wordt niet gebruikt, maar nodig voor de signature super.__changeAttribute
     * @param newValue {String}
     */
    _errorChangedCallback(oldValue: string, newValue: string) {
        this.__stateChangedCallback(newValue, 'error');
    }

    __stateChangedCallback(newValue: string, type: string) {
        if (newValue != null) {
            (async () => {
                if (this._hasDressedAttribute || this._dressed) {
                    await awaitUntil(() => this._dressed);
                    this._wrapperElement.parentNode.classList.add('vl-input-field--' + type);
                } else {
                    this.classList.add('vl-select--' + type);
                }
            })();
        } else {
            if (this._hasDressedAttribute || this._dressed) {
                this._wrapperElement.parentNode.classList.remove('vl-input-field--' + type);
            } else {
                this.classList.remove('vl-select--' + type);
            }
        }
    }

    // NOTE: (UIG-2212) - we stellen hier zelf disabled in ipv dit te laten doen door vl.utils.select object van DV
    // we nemen de css van DV maar niet alle functionaliteit dit van de disable() fn komt
    _disabledChangedCallback(newValue: string) {
        if (newValue !== null) {
            this.setAttribute('disabled', '');
            vl.select.disable(this as unknown as HTMLSelectElement);
        } else {
            this.removeAttribute('disabled');
            vl.select.enable(this as unknown as HTMLSelectElement);
        }
    }

    /**
     * Extra wrapper rond de js-vl-select div om CSS classes op te zetten. Dit
     * is om de CSS hiearchy van web universum niet te breken.
     * @private
     */
    __wrap() {
        const wrapper = document.createElement('div');
        this._setValidationParentAttribute(wrapper);
        this._wrapperElement.parentNode.insertBefore(wrapper, this._wrapperElement);
        wrapper.appendChild(this._wrapperElement);
    }

    /**
     * Override van de __changeAttribute om rekening te houden dat de select component geinitialiseerd kan worden met de 'dress()' functie.
     *  - wanneer de component geinitialiseerd is, moet de CSS class op de parent van de js-vl-select div komen
     *  - wanneer de component native is, moet de CSS class op de select zelf komen
     * @param {HTMLElement} element
     * @param {String} oldValue
     * @param {String} newValue
     * @param {String} attribute
     * @param {String} classPrefix
     * @private
     */
    __changeAttribute(
        element: HTMLElement,
        oldValue: string,
        newValue: string,
        attribute: string,
        classPrefix: string
    ) {
        const el = this.__lookupElement(element);
        super.__changeAttribute(el, oldValue, newValue, attribute, classPrefix);
    }

    /**
     * Afhankelijk of de component dressed is, moet de CSS class op een ander element toegevoegd worden.
     * @param {HTMLElement} element
     * @return {HTMLElement|*} element waar de CSS class toegevoegd moet worden.
     * @private
     */
    __lookupElement(element: HTMLElement) {
        if (this._dressed) {
            return this._wrapperElement.parentElement;
        }
        return element;
    }

    set __searchPlaceholderTranslation(value: string) {
        this._changeTranslation('select.search_placeholder_value', value);
    }

    set __searchNoResultTranslation(value: string) {
        this._changeTranslation('select.no_results', value);
    }

    set __noMoreOptionsTranslation(value: string) {
        this._changeTranslation('select.no_more_options', value);
    }

    /**
     * Zet de mogelijkheden die gekozen kunnen worden.
     *
     * @param {Object[]} choices met value en label attribuut.
     */
    set choices(choices: any) {
        this._choices.setChoices(choices, 'value', 'label', true);
    }

    /**
     * Zet sorteer functie voor de mogelijke keuzes.
     *
     * @param {function(unknown, unknown): number} fn bi-functie die de mogelijke keuzes sorteert.
     */
    set sortFilter(fn: (a: unknown, b: unknown) => number) {
        this._choices.config.sortFilter = fn;
    }

    /**
     * Zet het geselecteerd option element op basis van de option value.
     *
     * @param {as unknown as HTMLElement} this - het option element dat gekozen moet worden.
     * @param {string} value - de option value van het option element dat gekozen moet worden.
     */
    set value(value: string) {
        if (this._dressed) {
            vl.select.setValueByChoice(this as unknown as HTMLElement, value);
        } else {
            super.value = value;
        }
    }

    /**
     * Geeft de waarde van het eerst geselecteerde option element indien deze er is, anders een lege string.
     *
     * @return {void}
     */
    get value() {
        return this.selectedOptions[0] ? this.selectedOptions[0].value : '';
    }

    /**
     * Geef de `Choices` instantie.
     *
     * @see https://www.npmjs.com/package/choices.js
     * @return {Choices} de `Choices` instantie of `null` als de component nog niet geïnitialiseerd is door `dress()`
     */
    get _choices() {
        return vl.select.selectInstances.find((instance: any) => {
            return instance.element === this;
        });
    }

    /**
     * Geef de 'js-vl-select' wrapper terug dat door de dress functie wordt gegenereerd
     * wordt.
     * @return {null|*|Element} geeft 'js-vl-select' div terug of 'null' als de component nog niet geinitialiseerd is door 'dress()'
     */
    get _wrapperElement() {
        return this._element.closest('.js-vl-select');
    }

    get __searchPlaceholder() {
        return this.getAttribute('data-vl-search-placeholder');
    }

    get __searchNoResults() {
        return this.getAttribute('data-vl-search-no-results-text');
    }

    get __noMoreOptions() {
        return this.getAttribute('data-vl-no-more-options');
    }

    _setTranslations() {
        this.__searchPlaceholderTranslation = this.__searchPlaceholder || this.DEFAULT_SEARCH_PLACEHOLDER;
        this.__searchNoResultTranslation = this.__searchNoResults || this.DEFAULT_SEARCH_NO_RESULT;
        this.__noMoreOptionsTranslation = this.__noMoreOptions || this.DEFAULT_NO_MORE_OPTIONS;
    }

    /**
     * Initialiseer de `Choices` config.
     *
     * @see https://www.npmjs.com/package/choices.js
     * @param {Object} params - object with callbackFn: function(select) with return value the items for `setChoices`
     * @fires VlSelect#VlSelectReady ready event wordt verstuurd wanneer veilige interactie met de webcomponent mogelijk is.
     */

    dress(params?: any) {
        setTimeout(() => {
            this._setTranslations();

            if (!this._dressed) {
                const position: string = this.getAttribute('position') || SELECT_POSITION.AUTO;

                vl.select.dress(this, params, { position });

                (async () => {
                    await this.ready();
                    this._copySlotAttribute();
                    this.__wrap();
                    this._dressFormValidation();
                    this.dispatchEvent(new CustomEvent(this.readyEvent));
                    // Fix voor Choices.js search event dat niet afgevuurd wordt als de search value verwijderd wordt.
                    const searchInputElement = this._choices?.input;
                    searchInputElement?.addEventListener('input', this.onSearchInput);
                })();
            }
        });
    }

    /**
     * Geeft een promise die 'resolved' wanneer de select initialisatie klaar is.
     *
     * @return {Promise} De promise
     */
    async ready() {
        await awaitUntil(() => this._dressed === true);
    }

    /**
     * Vernietigt de `Choices` instantie van deze component.
     *
     * @see https://www.npmjs.com/package/choices.js
     */
    undress() {
        if (this._dressed) {
            try {
                vl.select.undress(this._choices);
                vl.select.selectInstances.splice(vl.select.selectInstances.indexOf(this._choices));
            } catch (exception) {
                console.error(
                    'er liep iets fout bij de undress functie, controleer dat het vl-select element een id bevat! Foutmelding: ' +
                        exception
                );
            }
        }
    }

    /**
     * Activeer de component.
     */
    enable() {
        vl.select.enable(this as unknown as HTMLSelectElement);
    }

    /**
     * Deactiveer de component.
     */
    disable(): void {
        vl.select.disable(this as unknown as HTMLSelectElement);
    }

    /**
     * Verwijder de actieve geselecteerde optie.
     */
    removeActive() {
        vl.select.removeActive(this as unknown as HTMLElement);
    }

    /**
     * Verwijder al de actieve opties.
     */
    removeActiveItems() {
        this._choices.removeActiveItems();
    }

    /**
     * Toon de dropdown met de mogelijke keuzes.
     */
    showDropdown() {
        vl.select.showDropdown(this as unknown as HTMLElement);
    }

    /**
     * Verberg de dropdown met de mogelijke keuzes.
     */
    hideDropdown() {
        vl.select.hideDropdown(this as unknown as HTMLElement);
    }

    /**
     * Geeft focus aan het element.
     */
    focus() {
        if (this._dressed) {
            setTimeout(() => {
                this._wrapperElement.focus();
                this._wrapperElement.click();
            });
        } else {
            super.focus();
        }
    }

    _copySlotAttribute() {
        const attribute = this.getAttribute('slot');
        this.removeAttribute('slot');
        if (attribute) {
            this._wrapperElement.setAttribute('slot', attribute);
        }
    }

    _dressFormValidation() {
        const dress = this.dress;
        super._dressFormValidation();
        this.dress = dress;
    }

    _setValidationParentAttribute(element?: any) {
        (element || this).setAttribute('data-vl-validate-error-parent', '');
    }

    private onSearchInput = (event: Event): void => {
        const value = (event?.target as HTMLInputElement)?.value;
        this.dispatchEvent(new CustomEvent('vl-select-search', { bubbles: true, composed: true, detail: { value } }));
    };
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-select': VlSelect;
    }
}
