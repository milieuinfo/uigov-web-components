import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlPillElement
 * @class
 * @classdesc Gebruik de VlPillElement als base class om keywoorden (filters of tags) te visualiseren.
 *
 * @param {Object} SuperClass
 *
 * @property {boolean} data-vl-disabled - Attribuut om aan te geven dat het pill element disabled is.
 * @property {(success | warning | error)} data-vl-type - Attribuut bepaalt de soort van pill: succes, probleem of fout.
 */

export class VlButtonPillComponent extends BaseElementOfType(HTMLButtonElement) {
    static get _observedAttributes() {
        return ['type'];
    }

    static get _observedChildClassAttributes() {
        return ['disabled'];
    }

    get _classPrefix() {
        return 'vl-pill--';
    }

    _typeChangedCallback(oldValue: string, newValue: string) {
        if (['success', 'warning', 'error'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._classPrefix + oldValue);
        }
    }

    constructor() {
        super();
        this.classList.add('vl-pill');
        this.classList.add(`${this._classPrefix}clickable`);
    }
}

define('vl-button-pill', VlButtonPillComponent, { extends: 'button' });
