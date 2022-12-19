import { BaseElementOfType } from '@domg-wc/common-utilities';

/**
 * VlTitle
 * @class
 * @classdesc Gebruik de vl-title om titels en subtitels als leidraad voor de gebruiker om door de content te gaan.
 *
 * @extends HTMLHeadingElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-sans - Attribuut wordt gebruikt om de font te wijzigen van Flanders Serif naar Flanders Sans.
 * @property {boolean} data-vl-has-border - Attribuut wordt gebruikt om een subtiele lijn toe te voegen onder de titel.
 * @property {boolean} data-vl-alt - Attribuut wordt gebruikt voor een alt titel en zal altijd een lijn toevoegen onder de titel.
 * @property {boolean} data-vl-no-space-bottom - Attribuut wordt gebruikt wanneer een titel gecombineerd wordt met de grid component.
 */
export class BaseTitleOfType extends BaseElementOfType(HTMLHeadingElement) {
    static get _observedClassAttributes() {
        return ['sans', 'has-border', 'alt', 'no-space-bottom'];
    }

    connectedCallback() {
        this.classList.add('vl-title');
        this.classList.add('vl-title--' + this.tagName.toLowerCase());
    }

    get _classPrefix() {
        return 'vl-title--';
    }
}
