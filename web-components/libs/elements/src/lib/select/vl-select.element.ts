import { BaseElementOfType, awaitUntil, define } from '@domg-wc/common-utilities';
import { vlFormValidation } from '../form-validation/vl-form-validation';
import { vlFormValidationElement } from '../form-validation/vl-form-validation.element';
import './vl-select.lib.js';

declare const vl: any;

Promise.all([vlFormValidation.ready()]).then(() => define('vl-select', VlSelect, { extends: 'select' }));

/**
 * VlSelect
 * @class
 * @classdesc Gebruik de select component om gebruikers toe te laten een selectie te maken uit een lijst met voorgedefinieerde opties. Het is aangeraden om enkel deze component te gebruiken als er 5 of meer opties zijn. Bij minder opties, kan er gebruik gemaakt worden van de radio component.
 *
 * @extends HTMLSelectElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.
 * @property {boolean} data-vl-success - Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.
 * @property {boolean} data-vl-select - Attribuut zorgt ervoor dat de zoek functionaliteit geïnitialiseerd wordt.
 * @property {boolean} data-vl-select-search - Attribuut om de zoek functionaliteit te activeren of deactiveren.
 * @property {boolean} data-vl-select-search-empty-text - Attribuut bepaalt de tekst die getoond wordt wanneer er geen resultaten gevonden zijn.
 * @property {boolean} data-vl-select-search-result-limit - Attribuut om het aantal resultaten te limiteren.
 * @property {boolean} data-vl-select-search-no-result-limit - Attribuut om het aantal resultaten te limiteren.
 * @property {boolean} data-vl-select-deletable - Attribuut om te activeren of deactiveren dat het geselecteerde kan verwijderd worden.
 * @property {string} data-vl-search-placeholder - Attribuut bepaalt de placeholder van het zoek adres input element.
 * @property {string} data-vl-search-no-results-text - Attribuut bepaalt de tekst wanneer er geen zoekresultaten meer zijn.
 * @property {string} data-vl-no-more-options - Attribuut bepaalt de tekst wanneer er geen keuzes meer mogelijk zijn.
 */
export class VlSelect extends vlFormValidationElement(BaseElementOfType(HTMLSelectElement)) {
    /**
     * Geeft de ready event naam.
     *
     * @return {string}
     */

    static get readyEvent() {
        return 'VlSelectReady';
    }

    static get _observedAttributes() {
        return vlFormValidation._observedAttributes().concat(['error', 'success']);
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

    _successChangedCallback(oldValue: string, newValue: string) {
        this.__stateChangedCallback(newValue, 'success');
    }

    _errorChangedCallback(oldValue: string, newValue: string) {
        this.__stateChangedCallback(newValue, 'error');
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
    __changeAttribute(element: any, oldValue: string, newValue: string, attribute: string, classPrefix: string) {
        const el = this.__lookupElement(element);
        super.__changeAttribute(el, oldValue, newValue, attribute, classPrefix);
    }

    /**
     * Afhankelijk of de component dressed is, moet de CSS class op een ander element toegevoegd worden.
     * @param {HTMLElement} element
     * @return {HTMLElement|*} element waar de CSS class toegevoegd moet worden.
     * @private
     */
    __lookupElement(element: any) {
        if (this._dressed) {
            return this._wrapperElement.parentElement;
        }
        return element;
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
     * @param {function(T, T)} fn bi-functie die de mogelijke keuzes sorteert.
     */
    set sortFilter(fn: any) {
        this._choices.config.sortFilter = fn;
    }

    /**
     * Zet het geselecteerd option element op basis van de option value.
     *
     * @param {string} value - de option value van het option element dat gekozen moet worden.
     */
    set value(value) {
        if (this._dressed) {
            vl.select.setValueByChoice(this, value);
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
                vl.select.dress(this, params);

                (async () => {
                    await this.ready();
                    this._copySlotAttribute();
                    this.__wrap();
                    this._dressFormValidation();
                    this.dispatchEvent(new CustomEvent(this.readyEvent));
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
        vl.select.enable(this);
    }

    /**
     * Deactiveer de component.
     */
    disable() {
        vl.select.disable(this);
    }

    /**
     * Verwijder de actieve geselecteerde optie.
     */
    removeActive() {
        vl.select.removeActive(this);
    }

    /**
     * Toon de dropdown met de mogelijke keuzes.
     */
    showDropdown() {
        vl.select.showDropdown(this);
    }

    /**
     * Verberg de dropdown met de mogelijke keuzes.
     */
    hideDropdown() {
        vl.select.hideDropdown(this);
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
}
