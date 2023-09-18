import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common-utilities';
import { VlH2Element, VlIconElement } from '@domg-wc/elements';
import { resetStyle } from '@domg/govflanders-style/common';
import { infoblockStyle } from '@domg/govflanders-style/component';

/**
 * VlInfoblock
 * @class
 * @classdesc Gebruik de infoblock om een sectie met een nieuwe content te starten.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-title - Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.
 * @property {string} data-vl-icon - Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.
 * @property {string} data-vl-type - Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question)
 */
@webComponent('vl-infoblock')
export class VlInfoblockComponent extends BaseElementOfType(HTMLElement) {
    static {
        registerWebComponents([VlH2Element, VlIconElement]);
    }

    static get _observedAttributes() {
        return ['title', 'icon', 'type'];
    }

    constructor() {
        super(`
          <style>
            ${resetStyle}
            ${infoblockStyle}
          </style>
          <section id="infoblock-element" class="vl-infoblock">
            <header class="vl-infoblock__header" role="presentation">
              <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
              <slot name="title" class="vl-infoblock__title">Testa</slot>
            </header>
            <div class="vl-infoblock__content" id="infoblock_content">
              <slot></slot>
            </div>
          </section>
        `);
    }

    connectedCallback() {
        super.connectedCallback();

        const title = this.getAttribute('title');
        if (title) {
            this._titleChangedCallback('', this.getAttribute('title'));
        }
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        const currentSlot = this.querySelector('[slot="title"]');
        if (currentSlot) {
            currentSlot.remove();
        }
        this.appendChild(this._template(`<h2 is="vl-h2" slot='title'>${newValue}</h2>`));
    }

    _iconChangedCallback(oldValue: string, newValue: string) {
        this._iconElement.setAttribute('data-vl-icon', newValue);
    }

    _typeChangedCallback(oldValue: string, newValue: string) {
        const classPrefix = 'vl-infoblock--';
        if (oldValue) {
            this._element.classList.remove(classPrefix + oldValue);
        }
        if (newValue) {
            this._element.classList.add(classPrefix + newValue);
        }
    }

    get _iconElement() {
        return this._element.querySelector('#infoblock_icon');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-infoblock': VlInfoblockComponent;
    }
}
