import { awaitUntil } from '@domg-wc/common-utilities';
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import '@govflanders-v14/vl-ui-core/dist/js/core.js';
import './vl-form-validation.lib.js';

// TODO: onduidelijk waarom
//  - er een vlFormValidation en een vlFormValidationElement is -> vooral of vlFormValidation dan wel een goede naam is ?
//  - waarom VlFormValidation en vlFormValidation bestaat

declare const vl: any;
declare const window: any;

/**
 * De formulier validatie mixin in combinatie met een input field verzekert dat bij het invullen van het formulier de input van de gebruiker geldig is.
 * @mixin vlFormValidation
 *
 * @property {(email | date | rrn | uuid | phone | iban | select | numerical)} data-vl-validation-type - Attribuut wordt gebruikt om aan te duiden welke validatie van toepassing is.
 * @property {string} data-vl-required - Attribuut wordt gebruikt om aan te duiden dat het veld verplicht is.
 * @property {string} data-vl-error-message - Attribuut wordt gebruikt om de tekst die verschijnt in de vl-form-validation component te bepalen.
 * @property {string} data-vl-error-placeholder - Attribuut wordt gebruikt om de koppeling met de bijhorende vl-form-validation component te maken met id attribuut `data-vl-error-id`.
 * @property {string} data-vl-success-class - Attribuut wordt gebruikt om de klasse te zetten als een vl-form-validation component succesvol gevalideerd is.
 * @property {string} data-vl-error-class - Attribuut wordt gebruikt om de klasse te zetten als een vl-form-validation component foutief gevalideerd is.
 * @property {boolean} data-vl-numerical-only-integer - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie enkel gehele getallen geldig zijn.
 * @property {number} data-vl-numerical-greater-than - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal groter moet zijn dan het getal in dit attribuut.
 * @property {number} data-vl-numerical-greater-than-or-equal-to - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal groter of gelijk moet zijn aan het getal in dit attribuut.
 * @property {number} data-vl-numerical-less-than - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal kleiner moet zijn dan het getal in dit attribuut.
 * @property {number} data-vl-numerical-less-than-or-equal-to - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal kleiner of gelijk moet zijn aan het getal in dit attribuut.
 */
export const vlFormValidation = {
    /**
     * Wacht tot de form validatie initialisatie klaar is.
     *
     * @return {Promise}
     */
    ready() {
        return awaitUntil(() => window.vl && window.vl.formValidation);
    },

    /**
     * Initialiseer de form validatie.
     *
     * @param {HTMLElement} element
     */
    dress(element: any) {
        if (
            element &&
            element.hasAttribute('data-vl-validate') &&
            !element.hasAttribute('data-vl-formvalidation-dressed')
        ) {
            vl.formValidation.dress(element);
        }
    },

    _observedAttributes() {
        return ['name', 'required', 'data-required', 'error-placeholder'];
    },
};

export const VlFormValidation = vlFormValidation;
