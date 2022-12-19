import '@domg-wc/elements';
// import '../../components/grid';
// import '../../components/form-message';
// import '../../components/icon';
// import '../../components/button';
// import '../../components/pager';
// import gridStyles from '../../components/grid/styles.scss';
// import formMessageStyles from '../../components/form-message/styles.scss';
// import iconStyles from '../../components/icon/styles.scss';
// import buttonStyles from '../../components/button/styles.scss';
// import tableStyles from '../../components/data-table/styles.scss';
import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import styles from './style/vl-rich-data.scss';

/**
 * VlRichData
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-filter-closable - Attribuut dat de filter sluitbaar maakt en een knop getoond wordt om de
 * filter te tonen en terug te verbergen. Op een klein scherm wordt een modal geopend bij het klikken op de filter knop
 * ipv een de filter naast de tabel te tonen. Om elementen van de filter te verbergen enkel in de modal, kan het
 * attribuut data-vl-hidden-in-modal gezet worden.
 * @property {boolean} data-vl-filter-closed - Attribuut dat aangeeft of dat de filter gesloten is.
 *
 * @slot open-filter-button-text - slot om de tekst te kunnen wijzigen van de toggle filter knop wanneer de filter
 * verborgen is. Default: Filter tonen.
 * @slot close-filter-button-text - slot om tekst te kunnen wijzigen van de toggle filter knop wanneer de filter getoond
 * wordt. Default: Filter verbergen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-rich-data/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-rich-data/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html|Demo}
 */
export class VlRichData extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['data', 'collapsed-m', 'collapsed-s', 'collapsed-xs', 'filter-closable', 'filter-closed'];
    }

    static get _defaultSearchColumnSize() {
        return 4;
    }

    constructor(style = '', content = '') {
        super(`
      <style>
        ${styles}
      </style>
      <div>
        <div is="vl-grid" is-stacked>
          <div id="toggle-filter" is="vl-column" class="vl-u-align-right vl-u-hidden--s" hidden data-vl-size="12" data-vl-medium-size="12">
            <button id="toggle-filter-button" is="vl-button" data-vl-secondary data-vl-narrow type="button" aria-label="Filter verbergen">
              <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text" hidden>Filter tonen</slot><slot name="close-filter-button-text">Filter verbergen</slot>
            </button>
          </div>
          <div id="open-filter" is="vl-column" class="vl-u-align-right vl-u-hidden" hidden data-vl-size="12" data-vl-medium-size="12">
            <button id="open-filter-button" is="vl-button" data-vl-secondary data-vl-narrow type="button" aria-label="Filter tonen">
              <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text">Filter</slot>
            </button>
          </div>
          <div id="search" is="vl-column" data-vl-size="0" data-vl-medium-size="0" data-vl-small-size="0" data-vl-extra-small-size="0">
            <div id="filter-slot-container">
              <slot id="filter-slot" name="filter"></slot>
            </div>
          </div>
          <div id="content" is="vl-column" data-vl-size="12" data-vl-medium-size="12" data-vl-small-size="12" data-vl-extra-small-size="12">
            <div is="vl-grid" is-stacked>
              <div id="search-results" is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" aria-live="polite">
                <span>We vonden</span> <strong><span id="search-results-number">0</span> resultaten</strong>
              </div>
              <div id="sorter" is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6">
                <label is="vl-form-label">
                  Sorteer
                </label>
                <slot name="sorter"></slot>
              </div>
              <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                <slot name="content">${content}</slot>
                <slot name="no-content" hidden>Er werden geen resultaten gevonden</slot>
              </div>
            </div>
          </div>
          <div id="pager" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
            <slot name="pager"></slot>
          </div>
        </div>
      </div>
    `);
    }

    connectedCallback() {
        this.__processSearchFilter();
        this.__processSorter();
        this.__processContent();

        this.__observePager();
        this.__observeFilterButtons();
        this._observer = this.__observeSearchFilter(() => this.__processSearchFilter());

        this.__updateNumberOfSearchResults(null);
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    /**
     * Stelt in welke data de tabel moet tonen.
     * @param {Object[]} object - Een Array van objecten die de data voorstellen.
     */
    set data(object) {
        if (this._data !== object) {
            const { paging, sorting, filter } = object;
            this._paging = paging;
            this._sorting = sorting;
            this._filter = filter;
            this._data = object;
            this.__processContent();
        }
    }

    /**
     * Geeft de data terug die in de tabel wordt getoond.
     * @return {Object[]}
     */
    get data() {
        return this._data || { data: [] };
    }

    get __contentColumn() {
        return this.shadowRoot.querySelector('#content');
    }

    get __searchFilter() {
        return this.querySelector('[slot="filter"]');
    }

    get __filterSlotContainer() {
        return this.shadowRoot.querySelector('#filter-slot-container');
    }

    get __filterSlot() {
        return this.shadowRoot.querySelector('#filter-slot');
    }

    get __filterOpenContainer() {
        return this.shadowRoot.querySelector('#open-filter');
    }

    get __filterOpenButton() {
        return this.shadowRoot.querySelector('#open-filter-button');
    }

    get __filterToggleContainer() {
        return this.shadowRoot.querySelector('#toggle-filter');
    }

    get __filterToggleButton() {
        return this.shadowRoot.querySelector('#toggle-filter-button');
    }

    get __filterToggleButtonTextSlot() {
        return this.shadowRoot.querySelector('slot[name="toggle-filter-button-text"]');
    }

    get __filterCloseButtonTextSlot() {
        return this.shadowRoot.querySelector('slot[name="close-filter-button-text"]');
    }

    get __searchResults() {
        return this.shadowRoot.querySelector('#search-results');
    }

    get __numberOfSearchResults() {
        return this.__searchResults.querySelector('#search-results-number');
    }

    get __sorterContainer() {
        return this.shadowRoot.querySelector('#sorter');
    }

    get __sorter() {
        return this.querySelector('[slot="sorter"]');
    }

    get __pager() {
        return this.querySelector('[slot="pager"]');
    }

    get __searchColumn() {
        return this.shadowRoot.querySelector('#search');
    }

    get __searchFilterForm() {
        if (this.__searchFilter) {
            return this.__searchFilter.querySelector('form');
        }
    }

    get __contentSlot() {
        return this.shadowRoot.querySelector('slot[name="content"]');
    }

    get __noContentSlot() {
        return this.shadowRoot.querySelector('slot[name="no-content"]');
    }

    get __formDataState() {
        if (this.__searchFilter && this.__searchFilter.formData) {
            const hasFilterValue = [...this.__searchFilter.formData.values()].find(Boolean);
            if (hasFilterValue) {
                return this.__searchFilter.formData;
            }
        }
    }

    get _hasResults() {
        return this._paging && this._paging.totalItems > 0;
    }

    get _paging() {
        if (this.__pager) {
            return {
                currentPage: this.__pager.currentPage,
                totalPages: this.__pager.totalPages,
                itemsPerPage: this.__pager.itemsPerPage,
                totalItems: this.__pager.totalItems,
            };
        } else {
            return null;
        }
    }

    set _paging(paging: any) {
        if (paging) {
            if (paging.currentPage != null) {
                this.__pager.setAttribute('data-vl-current-page', paging.currentPage);
            }
            if (paging.itemsPerPage != null) {
                this.__pager.setAttribute('data-vl-items-per-page', paging.itemsPerPage);
            }
            if (paging.totalItems != null) {
                this.__pager.setAttribute('data-vl-total-items', paging.totalItems);
                this.__updateNumberOfSearchResults(paging.totalItems);
            }
        }
    }

    set _filter(filter: any) {
        if (filter && this.__searchFilter) {
            const form = this.__searchFilter.querySelector('form');
            if (form) {
                filter.forEach((entry: any) => {
                    const formElement = form.elements[entry.name];
                    if (formElement) {
                        formElement.value = entry.value;
                    }
                });
            }
        }
    }

    __onStateChange(event: any, { paging = false } = {}) {
        event.stopPropagation();
        event.preventDefault();
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: this.__getState({ paging }),
                bubbles: true,
            })
        );
    }

    __getState({ paging }: any) {
        const state = {};
        (state as any).formData = this.__formDataState;
        (state as any).paging = this._paging;
        if (!paging && (state as any).paging) {
            (state as any).paging.currentPage = 1;
        }
        return state;
    }

    _filterClosableChangedCallback(oldValue: any, newValue: any) {
        this.__filterToggleContainer.hidden = newValue == null;
        this.__filterOpenContainer.hidden = newValue == null;
        if (newValue == null) {
            this.__filterOpenContainer.classList.remove('vl-u-visible--s');
            this.__searchColumn.classList.remove('vl-u-hidden--s');
        } else {
            this.__filterOpenContainer.classList.add('vl-u-visible--s');
            this.__searchColumn.classList.add('vl-u-hidden--s');
        }
    }

    _filterClosedChangedCallback(oldValue: any, newValue: any) {
        if (newValue == null) {
            this.__showSearchColumn();
        } else {
            this.__hideSearchColumn();
        }
    }

    __observeFilterButtons() {
        this.__filterToggleButton.addEventListener('click', () => {
            this.__filterSlotContainer.appendChild(this.__filterSlot);
            this.__searchFilter.hidden = false;
            this.__showHiddenInModalElements();
            this.toggleAttribute('data-vl-filter-closed');
        });
        this.__filterOpenButton.addEventListener('click', () => {
            this.setAttribute('data-vl-filter-closed', '');
            this._element.appendChild(this.__filterSlot);
            this.__hideHiddenInModalElements();
            this.__searchFilter.setAttribute('data-vl-mobile-modal', '');
        });
    }

    __showHiddenInModalElements() {
        this.__setHiddenInModalElements(false);
    }

    __hideHiddenInModalElements() {
        this.__setHiddenInModalElements(true);
    }

    __setHiddenInModalElements(hidden: any) {
        this.__searchFilter
            .querySelectorAll('[data-vl-hidden-in-modal]')
            .forEach((element: any) => (element.hidden = hidden));
    }

    __observePager() {
        if (this.__pager) {
            this.__pager.setAttribute('data-vl-align-right', true);
            this.__pager.addEventListener('change', (e: any) => {
                this.__onStateChange(e, { paging: true });
                if (this.__contentSlot.assignedNodes()[0] !== undefined) {
                    if (this.__contentSlot.assignedNodes()[0].children[0].querySelector('a') !== undefined) {
                        this.__contentSlot.assignedNodes()[0].children[0].querySelector('a').focus();
                    }
                }
            });
        }
    }

    __observeSearchFilter(callback: any) {
        const observer = new MutationObserver((mutations) => {
            mutations = mutations.filter((mutation) => mutation.target && (mutation.target as any).slot != 'content');
            if (mutations && mutations.length > 0) {
                callback();
            }
        });
        observer.observe(this as any, { childList: true });
        return observer;
    }

    __processSearchFilter() {
        if (this.__searchFilter) {
            this.__searchFilter.setAttribute('data-vl-alt', '');
            if (!this.hasAttribute('data-vl-filter-closed')) {
                this.__showSearchColumn();
            }
            this.__showSearchResults();
            this.__addSearchFilterEventListeners();
            this.__observeMobileModal(() => this.__processScrollableBody());
        } else {
            this.__hideSearchColumn();
            this.__hideSearchResults();
        }
    }

    __processSorter() {
        if (this.__sorter) {
            this.__showSorter();
        } else {
            this.__hideSorter();
        }
    }

    __processContent() {
        if (this._hasResults) {
            this.__contentSlot.hidden = false;
            this.__noContentSlot.hidden = true;
        } else {
            this.__contentSlot.hidden = true;
            this.__noContentSlot.hidden = false;
        }
    }

    __hideSearchColumn() {
        this.__searchColumn.hidden = true;
        this.__setGridColumnWidth(0);
        this.__filterToggleButton.setAttribute('aria-label', 'Filter tonen');
        this.__filterToggleButtonTextSlot.hidden = false;
        this.__filterCloseButtonTextSlot.hidden = true;
    }

    __hideSearchResults() {
        this.__searchResults.hidden = true;
    }

    __hideSorter() {
        this.__sorterContainer.hidden = true;
    }

    __showSearchColumn() {
        this.__searchColumn.hidden = false;
        this.__setGridColumnWidth(VlRichData._defaultSearchColumnSize);
        this.__filterToggleButton.setAttribute('aria-label', 'Filter verbergen');
        this.__filterToggleButtonTextSlot.hidden = true;
        this.__filterCloseButtonTextSlot.hidden = false;
    }

    __showSearchResults() {
        this.__searchResults.hidden = false;
    }

    __showSorter() {
        this.__sorterContainer.hidden = false;
    }

    __setGridColumnWidth(width: number) {
        ['size', 'medium-size'].forEach((size) => {
            this.__searchColumn.setAttribute(`data-vl-${size}`, width);
            this.__contentColumn.setAttribute(`data-vl-${size}`, 12 - width);
        });
    }

    __updateNumberOfSearchResults(number: any) {
        if (number) {
            this.__numberOfSearchResults.textContent = number;
        } else {
            if (this.__pager) {
                customElements.whenDefined('vl-pager').then(() => {
                    this.__numberOfSearchResults.textContent = this.__pager.totalItems || 0;
                });
            }
        }
    }

    __addSearchFilterEventListeners() {
        this.__searchFilter.addEventListener('change', (e: any) => {
            e.stopPropagation();
            e.preventDefault();
        });
        this.__searchFilter.addEventListener('input', (e: any) => {
            this.__onFilterFieldChanged(e);
        });
        if (this.__searchFilterForm) {
            this.__searchFilterForm.addEventListener('reset', (e: any) => {
                setTimeout(() => {
                    this.__onFilterFieldChanged(e);
                });
            });
        }
    }

    __onFilterFieldChanged(event: any) {
        event.stopPropagation();
        event.preventDefault();
        this.__onStateChange(event);
    }

    __observeMobileModal(callback: any) {
        const observer = new MutationObserver(callback);
        observer.observe(this.__searchFilter, { attributeFilter: ['data-vl-mobile-modal'] });
        return observer;
    }

    __processScrollableBody() {
        if (this.__searchFilter.hasAttribute('data-vl-mobile-modal')) {
            this.__disableBodyScroll();
        } else {
            this.__enableBodyScroll();
        }
    }

    __disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    __enableBodyScroll() {
        document.body.style.overflow = 'auto';
    }
}

define('vl-rich-data', VlRichData);
