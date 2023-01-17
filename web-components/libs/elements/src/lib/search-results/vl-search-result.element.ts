import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';

/**
 * VlSearchResult
 * @class
 * @classdesc Een zoekresultaat als onderdeel van de zoekresultaten.
 *
 * @extends HTMLElement
 * @mixes BaseElementOfType
 */
@webComponent('vl-search-result', { extends: 'li' })
export class VlSearchResult extends BaseElementOfType(HTMLLIElement) {
    get _classPrefix() {
        return 'vl-search-result';
    }

    get _sectionElement() {
        return this.querySelector('.vl-search-result');
    }

    get _titleElement() {
        return this.querySelector('.vl-search-result__title');
    }

    get _titleLinkElement() {
        return this.querySelector('a');
    }

    get _metaDataContainerElement() {
        return this.querySelector('p.vl-search-result__content-group');
    }

    get _metaDataElement() {
        return this.querySelector(':scope > *:nth-child(2)');
    }

    get _contentContainerElements() {
        return this.querySelectorAll('div.vl-search-result__content-group');
    }

    get _contentElements() {
        return this.querySelectorAll('dl');
    }

    get _sectionTemplate() {
        return `<section class="vl-search-result"></section>`;
    }

    get _titleTemplate() {
        return `<h3 class="vl-search-result__title"></h3>`;
    }

    get _metaDataContainerTemplate() {
        return `<p class="vl-search-result__content-group"></p>`;
    }

    get _contentContainerTemplate() {
        return `<div class="vl-search-result__content-group"></div>`;
    }

    connectedCallback() {
        this._processChildren();
    }

    _processChildren() {
        this._appendSection();
        this._processTitle();
        this._processMetaData();
        this._processContent();
    }

    _appendSection() {
        this.insertAdjacentHTML('afterbegin', this._sectionTemplate);
    }

    _processTitle() {
        if (this._titleLinkElement) {
            this._sectionElement.insertAdjacentHTML('beforeend', this._titleTemplate);
            this._titleElement.appendChild(this._titleLinkElement);
            this._setTitleClasses();
        }
    }

    _processMetaData() {
        if (this._metaDataElement) {
            this._sectionElement.insertAdjacentHTML('beforeend', this._metaDataContainerTemplate);
            this._metaDataContainerElement.appendChild(this._metaDataElement);
            this._setMetaDataClasses();
        }
    }

    _processContent() {
        this._contentElements.forEach((element: Element) => {
            const container = this._template(this._contentContainerTemplate).firstElementChild;
            container.appendChild(element);
            this._setContentClasses(element);
            this._sectionElement.insertAdjacentElement('beforeend', container);
        });
    }

    _setMetaDataClasses() {
        this._metaDataElement.classList.add(`${this._classPrefix}__meta-data`);
    }

    _setTitleClasses() {
        this._titleLinkElement.classList.add(`${this._classPrefix}__title__link`);
    }

    _setContentClasses(element: Element) {
        const dlClass = `${this._classPrefix}__description-list`;
        element.classList.add(dlClass);
        element.querySelectorAll('dt').forEach((dt) => dt.classList.add(`${dlClass}__description`));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-search-result': VlSearchResult;
    }
}
