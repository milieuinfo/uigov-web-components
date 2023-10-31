import { BaseElementOfType, debounce, unwrap, VL, webComponent } from '@domg-wc/common-utilities';
import '@govflanders/vl-ui-util/dist/js/util.js';
import './vl-side-navigation.lib.js';
import { elementStyles } from '../vl-elements.uig-css';

declare const vl: VL;

/**
 * VlSideNavigation
 * @class
 * @classdesc Een compact navigatie element dat je aan een pagina kan toevoegen. Het vat de inhoud van lange pagina's
 * samen, leidt de gebruiker door de pagina inhoud en kan ook naar externe pagina's verwijzen.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
@elementStyles()
@webComponent('vl-side-navigation', { extends: 'nav' })
export class VlSideNavigation extends BaseElementOfType(HTMLElement) {
    constructor() {
        super();
        this._processAttributes();
        this._processClasses();
        this._rerender();
        this.addEventListener('resize', debounce(this._rerender, 200));
    }

    _dress(): void {
        vl.sideNavigation.dress(this._element);
        this.style.position = '';
    }

    _rerender() {
        setTimeout(() => {
            this._undress();
            this._dress();
        }, 200);
    }

    /**
     * DV's component doesn't foresee user changing breakpoint at runtime
     * without "undress" styles for mobile will be applied to desktop template & vice versa
     */
    _undress() {
        // remove .vl-u-no-overflow
        vl.util.removeClass(document.body, vl.ns + 'u-no-overflow');
        // delete .js-vl-scrollspy__toggle
        const scrollSpyToggleElements = this.getRootNode().querySelectorAll('.js-vl-scrollspy__toggle');
        if (scrollSpyToggleElements.length) {
            vl.util.each(Array.from(scrollSpyToggleElements), (element: Element) => element.remove());
        }
        // delete .js-vl-scrollspy__close
        const scrollSpyCloseElements = this.getRootNode().querySelectorAll('.js-vl-scrollspy__close');
        if (scrollSpyCloseElements.length) {
            vl.util.each(Array.from(scrollSpyCloseElements), (element: Element) => element.remove());
        }
        // unwrap .js-vl-scrollspy-placeholder - remove parent specific for mobile template, keeping child elements
        const scrollSpyPlaceholderElement = this.getRootNode().querySelector('.js-vl-scrollspy-placeholder');
        if (scrollSpyPlaceholderElement) unwrap(scrollSpyPlaceholderElement);
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

declare global {
    interface HTMLElementTagNameMap {
        'vl-side-navigation': VlSideNavigation;
    }
}
