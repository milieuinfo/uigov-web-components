import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import '../accordion/vl-accordion.component';

declare const vl: any;

/**
 * VlStep
 * @class
 * @classdesc De step component stelt een enkele stap voor in de steps component.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-disabled - Attribuut om aan te geven dat de stap niet toegankelijk is.
 * @property {(success | warning | error)} data-vl-type - Attribuut bepaalt het type van de stap.
 * @property {boolean} data-vl-toggleable - Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 *
 */
export class VlStepComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['type', 'toggleable'];
    }

    static get _observedChildClassAttributes() {
        return ['disabled'];
    }

    constructor() {
        super(`
      <li class="vl-step">
        <div id="icon" class="vl-step__icon">
          <span slot="identifier"></span>
          <span id="sub-icon" class="vl-step__icon__sub">
            <span slot="identifier-annotation"></span>
          </span>
        </div>
        <div class="vl-step__wrapper">
          <div class="vl-step__header">
            <div class="vl-step__header__titles">
              <h3 id="title" class="vl-step__title">
                <span slot="title"></span>
                <span id="title-label">
                  <span slot="title-label"></span>
                </span>
                <span id="title-annotation" class="vl-step__title__annotation">
                  <span slot="title-annotation"></span>
                </span>
              </h3>
              <p id="sub-title" class="vl-step__subtitle">
                <span slot="sub-title"></span>
              </p>
            </div>
          </div>
          <div class="vl-step__content-wrapper">
            <p id="content" class="vl-step__content">
              <span slot="content"></span>
            </p>
          </div>
        </div>
      </li>
    `);
        this._processSlots();
    }

    /**
     * Geeft de step template.
     * @return {HTMLElement}
     */
    get template() {
        this._processSlots();
        const template = this._element.cloneNode(true);
        if (this._isToggleable) {
            vl.accordion.dress(template);
            template.querySelector('#content').addEventListener('click', (e: Event) => e.stopPropagation());
        }
        return template;
    }

    get _iconElement() {
        return this._shadow.querySelector('#icon');
    }

    get _subIconElement() {
        return this._iconElement.querySelector('#sub-icon');
    }

    get _wrapperElement() {
        return this._shadow.querySelector('.vl-step__wrapper');
    }

    get _headerElement() {
        return this._wrapperElement.querySelector('.vl-step__header');
    }

    get _titleElement() {
        return this._headerElement.querySelector('#title');
    }

    get _titleLabelElement() {
        return this._headerElement.querySelector('#title-label');
    }

    get _titleAnnotationElement() {
        return this._headerElement.querySelector('#title-annotation');
    }

    get _subTitleElement() {
        return this._headerElement.querySelector('#sub-title');
    }

    get _contentElement() {
        return this._shadow.querySelector('#content');
    }

    get _classPrefix() {
        return 'vl-step--';
    }

    get _isToggleable() {
        return this.hasAttribute('toggleable');
    }

    _getSlot(name: string) {
        return this._shadow.querySelector(`[slot="${name}"]`);
    }

    _getToggleableHeaderHTML() {
        return `
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 id="title" class="vl-step__title">
            <span slot="title"></span>
            <span id="title-label">
              <span slot="title-label"></span>
            </span>
          </h3>
        </div>
        <div class="vl-step__header__info" aria-hidden="true">
          <em class="vl-step__accordion-toggle"></em>
        </div>
      </button>
    `;
    }

    _typeChangedCallback(oldValue: string, newValue: string) {
        this._changeClass(this._element, oldValue, newValue, this._classPrefix);
    }

    _toggleableChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this._element.classList.add('vl-step--accordion');
            this._element.classList.add('js-vl-accordion');
            this._headerElement.remove();
            this._wrapperElement.insertAdjacentHTML('afterbegin', this._getToggleableHeaderHTML());
            this.__processSlot(this._titleElement, 'title');
            this.__processSlot(this._titleLabelElement, 'title-label');
        }
    }

    _processSlots() {
        this.__processSlot(this._iconElement, 'identifier');
        this.__processSlot(this._subIconElement, 'identifier-annotation');
        this.__processSlot(this._titleElement, 'title');
        this.__processSlot(this._titleLabelElement, 'title-label');
        this.__processSlot(this._titleAnnotationElement, 'title-annotation');
        this.__processSlot(this._subTitleElement, 'sub-title');
        this.__processSlot(this._contentElement, 'content');
    }

    __processSlot(parent: string, identifier: string) {
        const element = this.querySelector(`[slot="${identifier}"]`);
        if (element) {
            this.__replaceSlot(parent, element, identifier);
        } else {
            this.__hideSlot(parent, this._getSlot(identifier));
        }
    }

    __replaceSlot(element: any, slot: any, name: string) {
        element.hidden = false;
        element.replaceChild(slot.cloneNode(true), this._getSlot(name));
    }

    __hideSlot(element: any, slot: any) {
        if (element) {
            element.hidden = true;
        }

        if (slot) {
            slot.innerHTML = '';
        }
    }
}

define('vl-step', VlStepComponent);
