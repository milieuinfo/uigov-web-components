import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import './vl-column.element';
import './vl-layout.element';
import './vl-region.element';

/**
 * VlGrid
 * @class
 * @classdesc De grid(.vl-grid) dient om de lay-out van jouw pagina in orde te brengen. Je kan vl-grid vergelijken met de Row element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-is-stacked - Voeg marge toe tussen gestapelde kolommen.
 * @property {boolean} data-vl-is-stacked-small - Voeg wat minder marge toe tussen gestapelde kolommen. Het gebruik van "data-vl-is-stacked" is in dit geval overbodig.
 * @property {boolean} data-vl-is-stacked-large - Voeg wat meer marge toe tussen gestapelde kolommen. Het gebruik van "data-vl-is-stacked" is in dit geval overbodig.
 * @property {boolean} data-vl-align-start - Aligneer een of meerdere kolommen links.
 * @property {boolean} data-vl-align-center - Centreer een of meerdere kolommen horizontaal.
 * @property {boolean} data-vl-align-end - Aligneer een of meerdere kolommen rechts.
 * @property {boolean} data-vl-align-space-between - Laat zoveel mogelijke ruimte tussen kolommen.
 * @property {boolean} data-vl-align-space-around - Laat zoveel mogelijke ruimte rond kolommen..
 * @property {boolean} data-vl-v-top - Aligneer een of meerdere kolommen bovenaan.
 * @property {boolean} data-vl-v-center - Centreer een of meerdere kolommen verticaal.
 * @property {boolean} data-vl-v-bottom - Aligneer een of meerdere kolommen onderaan.
 * @property {boolean} data-vl-v-stretch - Rek de kolommen tot aan hun maximum hoogte.
 */

export class VlGridElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedClassAttributes() {
        return [
            'is-stacked',
            'is-stacked-small',
            'is-stacked-large',
            'align-start',
            'align-center',
            'align-end',
            'align-space-between',
            'align-space-around',
            'v-top',
            'v-center',
            'v-bottom',
            'v-stretch',
        ];
    }

    connectedCallback() {
        this.classList.add('vl-grid');
    }

    get _classPrefix() {
        return 'vl-grid--';
    }
}

define('vl-grid', VlGridElement, { extends: 'div' });
