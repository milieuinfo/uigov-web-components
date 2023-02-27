/* eslint-disable no-undef */
import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import '@govflanders-v14/vl-ui-util/dist/js/util.js';
import '@govflanders-v14/vl-ui-accordion/dist/js/accordion.js';
import styles from './style/vl-accordion.scss';
import 'reflect-metadata';

declare const vl: any;

/**
 * VlAccordion
 * @class
 * @classdesc Acccordion component kan gebruikt worden om informatie te tonen of te verbergen aan de hand van een toggle.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-toggle-text - Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.
 * @property {string} data-vl-open-toggle-text - Tekst waarop de gebruiker kan klikken om de accordion te openen.
 * @property {string} data-vl-close-toggle-text - Tekst waarop de gebruiker kan klikken om de accordion te sluiten.
 * @event vl-on-toggle - Afgevuurd bij het openen en sluiten van de accordion. Het event bevat of de accordion geopend of gesloten is.
 */

@webComponent('vl-accordion')
export class VlAccordionComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['toggle-text', 'open-toggle-text', 'close-toggle-text'];
    }

    constructor() {
        super(`
      <style>
       ${styles}
      </style>
      <div class="js">
        <div class="vl-accordion" data-vl-accordion>
          <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
            <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
            <slot name="title" class="vl-accordion__title"></slot>
          </button>
          <div class="vl-accordion__content js-vl-accordion__content">
            <div class="vl-accordion__panel">
              <slot id="accordion-slot"></slot>
            </div>
          </div>
        </div>
      </div>
    `);
    }

    connectedCallback() {
        this.dress();

        if (this._hasTitleSlot()) {
            this._propagateTitleSlotClickToAccordion();
        }

        /*
            Voeg de eventListener toe nadat this.dress() is aangeroepen om de correcte volgorde van de event listeners te garanderen.
            Digitaal Vlaanderen accordion.js vuurt zelf een onChange event af bij het openen of sluiten van de accordion,
            maar om te vermijden dat we te veel steunen op de JS van Digitaal Vlaanderen vangen we het click event zelf op.
        */
        this._buttonElement?.addEventListener('click', () => {
            this.dispatchEvent(
                new CustomEvent('vl-on-toggle', {
                    detail: {
                        open: this._isOpen,
                    },
                })
            );
        });
    }

    _propagateTitleSlotClickToAccordion() {
        this._titleElement.addEventListener('click', (event: Event) => {
            event.stopPropagation();
            this._buttonElement.click();
        });
    }

    _hasTitleSlot() {
        return this._titleElement.assignedElements().length > 0;
    }

    get _accordionElement() {
        return this._element.querySelector('[data-vl-accordion]');
    }

    get _buttonElement() {
        return this._element.querySelector('button');
    }

    get _titleElement() {
        return this._buttonElement.querySelector('slot[name="title"]');
    }

    get _openToggleTextAttribute() {
        return this.getAttribute('open-toggle-text');
    }

    get _closeToggleTextAttribute() {
        return this.getAttribute('close-toggle-text');
    }

    get _dressedAttribute() {
        // TODO: Fix. Dit werkt niet omdat het "accordion-dressed" attribuut op de button wordt gezet en niet op het parent element.
        return this.getAttribute('accordion-dressed');
    }

    get _isDressed() {
        return !!this._dressedAttribute;
    }

    get _isOpen() {
        return this._accordionElement.classList.contains('js-vl-accordion--open');
    }

    /**
     * Activeer de accordion functionaliteit.
     *
     * @return {void}
     */
    dress() {
        if (!this._isDressed) {
            vl.accordion.dress(this._buttonElement);
        }
    }

    /**
     * Opent de accordion.
     *
     * @return {void}
     */
    open() {
        vl.accordion.open(this._accordionElement);
    }

    /**
     * Sluit de accordion.
     *
     * @return {void}
     */
    close() {
        if (this._isOpen) {
            this.toggle();
        }
    }

    /**
     * Opent of sluit de accordion afhankelijk van de huidige status (open of gesloten) van de accordion.
     *
     * @return {void}
     */
    toggle() {
        vl.accordion.toggle(this._accordionElement);
    }

    _toggleTextChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.textContent = newValue;
    }

    _openToggleTextChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.classList.add('js-vl-accordion__toggle__text');
        this._titleElement.setAttribute('data-vl-accordion-open-text', newValue);
    }

    _closeToggleTextChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.classList.add('js-vl-accordion__toggle__text');
        this._titleElement.setAttribute('data-vl-accordion-close-text', newValue);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accordion': VlAccordionComponent;
    }
}
