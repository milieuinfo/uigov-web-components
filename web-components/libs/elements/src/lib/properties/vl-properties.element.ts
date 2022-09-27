import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import './vl-properties-column.element';
import './vl-properties-list.element';
import './vl-property-term.element';
import './vl-property-value.element';

/**
 * VlProperties
 * @class
 * @classdesc De properties webcomponent vormt de container van een lijst van kenmerken van een onderwerp. Deze component wordt meestal gebruikt om informatie te tonen dat ingevuld werd in een formulier.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-full-width - Attribuut wordt gebruikt om de maximale breedte van het label te benutten.
 */
export class VlPropertiesComponent extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return ['full-width'];
    }

    connectedCallback() {
        this.classList.add('vl-properties');
        this._setPropertiesTitle();
    }

    get _titles() {
        return this.querySelectorAll('h1,h2,h3,h4,h5,h6');
    }

    get _classPrefix() {
        return 'vl-properties--';
    }

    _setPropertiesTitle() {
        this._titles.forEach((title: Element) => {
            title.classList.add('vl-properties__title');
        });
    }
}

define('vl-properties', VlPropertiesComponent, { extends: 'div' });
