import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import './vl-side-navigation.lib.js';
import './vl-side-navigation-reference.element';
import './vl-side-navigation-title.element';
import './vl-side-navigation-content.element';
import './vl-side-navigation-group.element';
import './vl-side-navigation-item.element';
import './vl-side-navigation-toggle.element';

declare const vl: any;

/**
 * VlSideNavigation
 * @class
 * @classdesc Een compact navigatie element dat je aan een pagina kan toevoegen. Het vat de inhoud van lange pagina's samen, leidt de gebruiker door de pagina inhoud en kan ook naar externe pagina's verwijzen.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
export class VlSideNavigation extends BaseElementOfType(HTMLElement) {
    constructor() {
        super();
        this._processAttributes();
        this._processClasses();
        this._dress();
    }

    _dress() {
        setTimeout(() => {
            vl.sideNavigation.dress(this._element);
            this.style.position = '';
        });
    }

    _processAttributes() {
        this.setAttribute('data-vl-side-navigation', '');
        this.setAttribute('data-vl-side-navigation-scrollable', '');
        this.setAttribute('data-vl-scrollspy', '');
        this.setAttribute('data-vl-scrollspy-mobile', 'Navigatie');
        this.setAttribute('data-vl-sticky', '');
        this.setAttribute('data-vl-sticky-offset-top', '43');
    }

    _processClasses() {
        this.classList.add('vl-side-navigation');
        this.classList.add('js-vl-side-navigation');
        this.classList.add('js-vl-sticky');
        this.classList.add('js-vl-scrollspy');
    }
}

define('vl-side-navigation', VlSideNavigation, { extends: 'nav' });
