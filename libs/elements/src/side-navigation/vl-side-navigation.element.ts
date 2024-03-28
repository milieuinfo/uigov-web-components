import { BaseElementOfType, unwrap, VL, webComponent } from '@domg-wc/common-utilities';
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
    static get _observedAttributes() {
        return ['side-navigation-id'];
    }

    static initializedSideNavigationId = '';

    constructor() {
        super();
        this._processAttributes();
        this._processClasses();
        this._rerender();
    }

    _dress(): void {
        vl.sideNavigation.dress(this._element);
        this.style.position = '';
    }

    _rerender() {
        const sideNavigationId = this.getAttribute('side-navigation-id');

        /* 
            Hack voor UIG-2897
            Proza messages werden niet afgebeeld tot er een resize van de window gebeurde.
            Door de undress() - dress() niet in een timeout te wrappen is dit probleem opgelost.
            Dit zorgt echter voor andere problemen als de side navigation overgaat van desktop naar mobile view.
            Omdat dit component bij elke resize volledig afgebroken en opnieuw opgebouwd wordt, is het onmogelijk om state bij te houden als er geresized wordt.
            Als oplossing moet de afnemer een uniek side-navigation-id attribuut meegeven, dit id stoppen we in een static variabele. 
            Als de static variabele nog niet is ingevuld of is ingevuld met het id van een andere side-navigation,
            kunnen we er van uitgaan dat dit de eerste keer is dat deze side-navigation rendert en de correcte code uitvoeren.
        */
        if (sideNavigationId && VlSideNavigation.initializedSideNavigationId !== sideNavigationId) {
            VlSideNavigation.initializedSideNavigationId = sideNavigationId;
            this._undress();
            this._dress();
        } else {
            setTimeout(() => {
                this._undress();
                this._dress();
            }, 200);
        }
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
