import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import styles from './style/vl-functional-header.scss';

/**
 * VlFunctionalHeader
 * @class
 * @classdesc Toont bovenaan de pagina generieke informatie zonder af te leiden zoals bijvoorgeeld titel, acties, tab navigatie of zoek input.
 *
 * @property {String} data-vl-back - Attribuut wordt gebruikt om de terug link tekst te bepalen.
 * @property {String} data-vl-back-link - Attribuut wordt gebruikt om de terug link te bepalen.
 * @property {String} data-vl-link - Attribuut wordt gebruikt om de link van de titel te bepalen.
 * @property {String} data-vl-title - Attribuut wordt gebruikt om de tekst van de titel te bepalen.
 * @property {String} data-vl-sub-title - Attribuut wordt gebruikt om de tekst van de sub titel te bepalen.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
export class VlFunctionalHeaderComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['back', 'back-link', 'title', 'sub-title', 'link'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <header class="vl-functional-header">
        <div class="vl-layout">
          <div class="vl-functional-header__row uig-functional-header__row">
            <div class="uig-functional-header__content">
                <div class="vl-functional-header__content">
                    <slot name="top-left"></slot>
                </div>
                <div class="vl-functional-header__content">
                    <div class="vl-title">
                        <a id="title" class="vl-functional-header__title" tabindex="0">
                            <slot name="title"></slot>
                        </a>
                    </div>
                </div>
            </div>
            <div class="uig-functional-header__top-right">
                <slot name="top-right"></slot>
            </div>
            <div id="actions" class="vl-functional-header__actions">
                <ul></ul>
            </div>
          </div>
          <div class="vl-functional-header__sub" id="sub-header">
            <slot name="sub-header">
              <ul class="vl-functional-header__sub__actions">
                  <li class="vl-functional-header__sub__action">
                      <slot name="back-link">
                          <a id="back-link" is="vl-link" tabindex="0" href="${document.referrer}">
                              <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                              <slot id="back-link-text" name="back"><span>Terug</span></slot>
                          </a>
                      </slot>
                  </li>
                  <li id="sub-title" class="vl-functional-header__sub__action">
                      <slot name="sub-title"></slot>
                  </li>
              </ul>
            </slot>
          </div>
        </div>
      </header>
    `);
    }

    connectedCallback() {
        this._observer = this.__observeSlotElements(() => this.__processSlotElements());
        this.__processSlotElements();
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    get _titleElement() {
        return this._shadow.querySelector('#title');
    }

    get _subTitleElement() {
        return this._shadow.querySelector('#sub-title');
    }

    get _backLinkElement() {
        return this._shadow.querySelector('#back-link');
    }

    get _backLinkTextElement() {
        return this._backLinkElement.querySelector('#back-link-text');
    }

    get _actionsElement() {
        return this._shadow.querySelector('#actions');
    }

    get _subHeaderElement() {
        return this._shadow.querySelector('#sub-header');
    }

    get _defaultSubHeaderElement() {
        return this._shadow.querySelector('#default-sub-header');
    }

    get _actionsListElement() {
        return this._actionsElement.querySelector('ul');
    }

    get _subHeaderListElement() {
        return this._subHeaderElement.querySelector('ul');
    }

    get _subTitleListElements() {
        return this._subTitleListElement.querySelectorAll('li');
    }

    _getActionTemplate(element: Element) {
        return this._template(`
      <li class="vl-functional-header__action">
        <p>${element.outerHTML}</p>
      </li>
    `);
    }

    _getSubHeaderTemplate(element: Element) {
        return this._getSubHeaderTemplateWithValue(element.outerHTML);
    }

    _getSubHeaderTemplateWithValue(text: string) {
        return this._template(`<li class="vl-functional-header__sub__action">${text}</li>`);
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.innerText = newValue;
    }

    _subTitleChangedCallback(oldValue: string, newValue: string) {
        this._subTitleElement.innerText = newValue;
    }

    _linkChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.href = newValue;
    }

    _backChangedCallback(oldValue: string, newValue: string) {
        this._backLinkTextElement.innerText = newValue;
    }

    _backLinkChangedCallback(oldValue: string, newValue: string) {
        this._backLinkElement.href = newValue || document.referrer;
    }

    /**
     * Zet de click event listener voor de 'Terug' knop. Default: ```() => window.history.back()```
     *
     * @param {Function} eventListener - Functie met de uit te voeren handeling als op de terug knop wordt geklikt.
     */
    set backLinkEventListener(eventListener: EventListener) {
        if (this._backLinkEventListener) {
            this._backLinkElement.removeEventListener('click', this._backLinkEventListener);
        }
        this._backLinkEventListener = eventListener;
        this._backLinkElement.addEventListener('click', this._backLinkEventListener);
    }

    __processSlotElements() {
        this.__processSlotActions();
    }

    __processSlotSubHeader() {
        this._subHeaderListElement.innerHTML = '';
        const subHeader = this.querySelector('[slot="sub-header"]');
        if (subHeader) {
            [...subHeader.children]
                .map((action) => this._getSubHeaderTemplate(action))
                .forEach((action) => this._subHeaderListElement.append(action));
            this._defaultSubHeaderElement.hidden = true;
        } else {
            this._subHeaderElement.hidden = true;
        }
    }

    __processSlotActions() {
        this._actionsListElement.innerHTML = '';
        const actions = this.querySelector('[slot="actions"]');
        if (actions) {
            [...actions.children]
                .map((action) => this._getActionTemplate(action))
                .forEach((action) => this._actionsListElement.append(action));
        } else {
            this._actionsElement.hidden = true;
        }
    }

    __observeSlotElements(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        });
        return observer;
    }
}

define('vl-functional-header', VlFunctionalHeaderComponent);
