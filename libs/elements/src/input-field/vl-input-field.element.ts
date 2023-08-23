import { BaseElementOfType, webComponentPromised } from '@domg-wc/common-utilities';
import { vlFormValidation } from '../form-validation/vl-form-validation';
import { vlFormValidationElement } from '../form-validation/vl-form-validation.element';
import { vlPattern } from '../pattern/vl-pattern.element';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlInputField
 * @class
 * @classdesc Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.
 *
 * @extend HTMLInputElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-block - Het input-veld zal de breedte van zijn parent aannemen
 * @property {boolean} data-vl-disabled - Schakelt interactie door de gebruiker uit
 * @property {boolean} data-vl-error - Zorgt ervoor da er een rode rand rond het input-veld verschijnt
 * @property {boolean} data-vl-small - Kleine variant van het input-field
 * @property {boolean} data-vl-success - Zorgt ervoor dat er een groene rand rond het input-veld verschijnt
 */
@elementStyles()
@webComponentPromised([vlFormValidation.ready(), vlPattern.ready()], 'vl-input-field', { extends: 'input' })
export class VlInputFieldElement extends vlFormValidationElement(BaseElementOfType(HTMLInputElement)) {
    static get _observedAttributes() {
        return vlFormValidation._observedAttributes();
    }

    static get _observedChildClassAttributes() {
        return ['block', 'small', 'error', 'success', 'disabled'];
    }

    connectedCallback() {
        this.classList.add('vl-input-field');
        this._dress();
    }

    get _classPrefix() {
        return 'vl-input-field--';
    }

    _dress() {
        this._dressFormValidation();
        this._dressPattern();
    }

    _dressPattern() {
        Object.assign(this, vlPattern);
        this.dress(this);
    }

    _disabledChangedCallback(oldValue: string, newValue: string) {
        // wanneer we disabledChangedCallBack gebruiken is er geen distinctie tussen "disabled" & "data-vl-disabled"
        // gezien we bij wijziging van "data-vl-disabled", "disabled" toevoegen, is er risico van oneindige loop (BaseElementOfType logica)
        // daarom willen we enkel "disabled" wijzigen wanneer de oude en de nieuwe waarde verschillen
        if (newValue !== oldValue) {
            this.disabled = newValue !== null;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field': VlInputFieldElement;
    }
}
