import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlRegion
 * @class
 * @classdesc Het region element (vl-region) wordt gebruikt om secties te definiëren op je website. Het zorgt ervoor dat er consistente spacing is tussen verschillende secties beschikbaar op een pagina. Als een voorbeeld: een pagina die de modules "intro", "portfolio", "nieuws" en "contact" bevat, zal in vier verschillende regions worden gewrapped.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-alt - Maakt de achtergrond lichtgrijs.
 * @property {boolean} data-vl-no-space - Gebruik geen marges.
 * @property {boolean} data-vl-no-space-bottom - Gebruik geen marges onderaan.
 * @property {boolean} data-vl-no-space-top - Gebruik geen marges bovenaan.
 * @property {boolean} data-vl-small - Gebruik kleinere marges.
 * @property {boolean} data-vl-medium - Gebruik middelgrote marges.
 * @property {boolean} data-vl-bordered - Teken een rand.
 */
@elementStyles()
@webComponent('vl-region', { extends: 'section' })
export class VlRegionElement extends BaseElementOfType(HTMLElement) {
    static get _observedClassAttributes() {
        return ['no-space', 'no-space-bottom', 'no-space-top', 'alt', 'small', 'medium', 'bordered', 'overlap'];
    }

    connectedCallback() {
        this.classList.add('vl-region');
    }

    get _classPrefix() {
        return 'vl-region--';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-region': VlRegionElement;
    }
}
