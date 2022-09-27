import { BaseElementOfType, define } from '@domg-lib/common-utilities';
import '../title/vl-h2.element';

/**
 * VlSearchFilter
 * @class
 * @classdesc De search filter laat de gebruiker toe om de zoekresulten te verfijnen.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {string} data-vl-alt - Alternatieve (transparante) achtergrond.
 * @property {string} data-vl-mobile-modal - Activeert geoptimaliseerde weergave voor op mobiele toestellen.
 * @property {string} [data-vl-mobile-modal-title=Filter] - De titel van deze search filter op mobiele toestellen indien niet gedeclareerd wordt het data-vl-title attribuut of de default genomen.
 * @property {string} data-vl-title - De titel van deze search filter.
 */
export class VlSearchFilterElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedAttributes() {
        return ['title'];
    }

    static get _observedClassAttributes() {
        return ['alt', 'mobile-modal', 'mobile-modal-title'];
    }

    constructor() {
        super();
        this.observer = this.__observeChildElements(() => this.__processClasses());
    }

    connectedCallback() {
        this.classList.add('vl-search-filter');
        this.__processClasses();
    }

    __observeChildElements(callback: MutationCallback) {
        const observer = new MutationObserver(callback);
        const node = this as unknown as Node;
        observer.observe(node, { childList: true });
        return observer;
    }

    disconnectedCallback() {
        this.observer.disconnect();
    }

    __processClasses() {
        this.querySelectorAll('form').forEach((form: Element) => form.classList.add(`${this._elementPrefix}form`));
        this.querySelectorAll('form > section').forEach((section: Element) =>
            section.classList.add(`${this._elementPrefix}section`)
        );
        this.querySelectorAll('form > section > h2').forEach((title: Element) =>
            title.classList.add(`${this._elementPrefix}section-title`)
        );
        this.querySelectorAll('form > section > div').forEach((field: Element) =>
            field.classList.add(`${this._elementPrefix}field`)
        );
        this.querySelectorAll('form > section > div > label').forEach((label: Element) =>
            label.classList.add(`${this._elementPrefix}field__label`)
        );
        this.querySelectorAll('form > div').forEach((div: Element) => div.classList.add(`${this._elementPrefix}field`));

        if (this._footerElement) {
            this._footerElement.classList.add(`${this._elementPrefix}footer`);
        }
    }

    get formData() {
        return new FormData(this.querySelector('form'));
    }

    get _classPrefix() {
        return this._elementName + '--';
    }

    get _elementPrefix() {
        return this._elementName + '__';
    }

    get _elementName() {
        return 'vl-search-filter';
    }

    get _titleElement() {
        return this._introElement || this._mobileModalTitleElement;
    }

    get _introElement() {
        return this.querySelector(`.${this._elementPrefix}intro`);
    }

    get _headerElement() {
        return this.querySelector(`.${this._elementPrefix}header-modal`);
    }

    get _mobileModalTitleElement() {
        return this._headerElement ? this._headerElement.querySelector('h2') : undefined;
    }

    get _formElement() {
        return this.querySelector('form');
    }

    get _footerElement() {
        return this.querySelector(`form ~ div:not(.${this._elementPrefix}footer-modal):last-child`);
    }

    get _footerModalElement() {
        return this.querySelector(`.${this._elementPrefix}footer-modal`);
    }

    get _submitButton() {
        let button;
        if (this._formElement) {
            button = this._formElement.querySelector(':scope > div button[type="submit"]');
        }
        if (!button && this._footerModalElement) {
            button = this._footerModalElement.querySelector('button');
        }
        return button;
    }

    get _title() {
        return this.getAttribute('data-vl-title');
    }

    get _mobileModalTitle() {
        return this.getAttribute('data-vl-mobile-modal-title') || this._title || 'Filter';
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        if (this._titleElement == null) {
            this.insertBefore(this.__createTitleElement(), this.firstChild);
        } else {
            this._titleElement.textContent = newValue;
        }
    }

    _mobileModalTitleChangedCallback(oldValue: string, newValue: string) {
        if (this._mobileModalTitleElement) {
            this._mobileModalTitleElement.textContent = newValue;
        }
    }

    _mobileModalChangedCallback(oldValue: string, newValue: string) {
        if (newValue != undefined) {
            this.__enableModal();
        } else {
            this.__disableModal();
        }
    }

    __createTitleElement() {
        const title = document.createElement('p');
        title.classList.add(`${this._elementPrefix}intro`);
        title.textContent = this._title;
        return title;
    }

    __enableModal() {
        this.__convertFooterToHeader();
        this.__convertIntroToHeaderTitle();
        this.__convertSubmitButtonContainerToModalFooter();
    }

    __disableModal() {
        this.__convertHeaderTitleToIntro();
        this.__convertHeaderToFooter();
        this.__convertModalFooterToSubmitButtonContainer();
    }

    __convertFooterToHeader() {
        const header = this._footerElement || document.createElement('div');
        this.__prepareMobileModal(header);
        this.insertBefore(header, this.firstChild);
    }

    __convertIntroToHeaderTitle() {
        const title = document.createElement('h2', { is: 'vl-h2' });
        title.textContent = this._mobileModalTitle;
        this._headerElement.insertBefore(title, this._headerElement.firstChild);
        if (this._introElement) {
            this._introElement.remove();
        }
    }

    __convertSubmitButtonContainerToModalFooter() {
        if (this._submitButton) {
            this.hidden = false;
            this.__prepareSubmitButton();
            this._submitButton.addEventListener(
                'click',
                () => {
                    this.removeAttribute('data-vl-mobile-modal');
                    this.hidden = true;
                },
                { once: true }
            );
            this._element.appendChild(this._submitButton.parentElement);
        }
    }

    __convertHeaderTitleToIntro() {
        if (this._title) {
            this.insertBefore(this.__createTitleElement(), this.firstChild);
        }

        if (this._mobileModalTitleElement) {
            this._mobileModalTitleElement.remove();
        }
    }

    __convertHeaderToFooter() {
        const footer = this._headerElement;
        if (footer) {
            this.__prepareMobileModal(footer);
            this._element.appendChild(footer);
        }
    }

    __convertModalFooterToSubmitButtonContainer() {
        if (this._submitButton) {
            this._formElement.appendChild(this._submitButton.parentElement);
            this.__prepareSubmitButton();
        }
    }

    __prepareMobileModal(element: any) {
        element.classList.toggle(`${this._elementPrefix}footer`);
        element.classList.toggle(`${this._elementPrefix}header-modal`);
        [...element.children].forEach((child) => child.classList.toggle(`${this._elementPrefix}header__clear`));
    }

    __prepareSubmitButton() {
        this._submitButton.toggleAttribute('data-vl-block');
        const container = this._submitButton.parentElement;
        container.classList.toggle(`${this._elementPrefix}footer-modal`);
        container.classList.toggle(`${this._elementPrefix}field`);
    }
}

define('vl-search-filter', VlSearchFilterElement, { extends: 'div' });
