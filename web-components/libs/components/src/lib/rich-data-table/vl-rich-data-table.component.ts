import '@domg-wc/elements';
import { VlRichDataField } from './vl-rich-data-field.component';
import { VlRichDataSorter } from './vl-rich-data-sorter.component';
import { VlRichData } from '../rich-data/vl-rich-data.component';

import styles from './style/vl-rich-data-table.scss';
import { define } from '@domg-wc/common-utilities';

export class VlRichDataTable extends VlRichData {
    static get _observedAttributes() {
        return super._observedAttributes.concat(['data', 'collapsed-m', 'collapsed-s', 'collapsed-xs']);
    }

    static get _tableAttributes() {
        return ['data-vl-collapsed-m', 'data-vl-collapsed-s', 'data-vl-collapsed-xs'];
    }

    static get is() {
        return 'vl-rich-data-table';
    }

    constructor() {
        super(
            `
      <style>
        ${styles}
      </style>`,
            `
      <table is="vl-data-table" slot="content">
        <thead>
          <tr></tr>
        </thead>
        <tbody></tbody>
      </table>
    `
        );

        this.__observeSorters();
    }

    connectedCallback() {
        super.connectedCallback();
        this._render();
        this.__observeFields();
    }

    attributeChangedCallback(attr: any, oldValue: any, newValue: any) {
        super.attributeChangedCallback(attr, oldValue, newValue);
        if (VlRichDataTable._tableAttributes.includes(attr)) {
            const withoutDataVlPrefix = attr.substring('data-vl-'.length);
            this.__table.toggleAttribute(withoutDataVlPrefix);
        }
    }

    /**
     * Stelt in welke data de tabel moet tonen.
     * @param {Object[]} object - Een Array van objecten die de data voorstellen.
     */
    set data(object) {
        const previousData = this.data ? this.data.data : undefined;
        super.data = object;
        const hasNewData = previousData !== this.data.data;
        if (hasNewData) {
            try {
                this._validate(this.data.data);
                this._renderBody();
            } catch (error) {
                this._data.data = [];
                throw error;
            }
        }
    }

    /**
     * Geeft de data terug die in de tabel wordt getoond.
     * @return {Object[]}
     */
    get data() {
        return super.data;
    }

    get __activeSorters() {
        return Array.from(this.__sorters)
            .filter((sorter) => (sorter as any).direction !== undefined)
            .sort(VlRichDataSorter.PRIORITY_COMPARATOR);
    }

    get __contentColumn() {
        return this.shadowRoot.querySelector('#content');
    }

    get __fields() {
        return this.querySelectorAll(VlRichDataField.is);
    }

    get __richDataFields() {
        return [...this.__fields].filter((field) => field.constructor === VlRichDataField);
    }

    get __sorters() {
        return this.__tableHeaderRow.querySelectorAll(VlRichDataSorter.is);
    }

    get __sortingState() {
        if (this.__activeSorters && this.__activeSorters.length > 0) {
            return this.__activeSorters.map((criteria: any) => {
                return {
                    name: criteria.for,
                    priority: criteria.priority,
                    direction: criteria.direction,
                };
            });
        } else {
            return null;
        }
    }

    get __table() {
        return this.shadowRoot.querySelector('table');
    }

    get __tableHeader() {
        return this.__table.querySelector('thead');
    }

    get __tableHeaderRow() {
        const header = this.__tableHeader;
        if (header) {
            return header.querySelector('tr');
        } else {
            return undefined;
        }
    }

    get __tableBody() {
        return this.__table.querySelector('tbody');
    }

    __getState({ paging }: any) {
        const state: any = super.__getState({ paging });
        state.sorting = this.__sortingState;
        return state;
    }

    get _isMultisortingEnabled() {
        return this.dataset.vlMultisort !== undefined;
    }

    _validate(data: any) {
        if (data) {
            if (!Array.isArray(data)) {
                throw new Error('vl-rich-data-table verwacht een Array als data');
            }
        }
    }

    set _sorting(sorting: any) {
        if (sorting) {
            this.__sorters.forEach((sorter: any) => {
                const matchedSorter = sorting.find((sort: any) => sort.name === sorter.for);
                sorter.direction = matchedSorter ? matchedSorter.direction : undefined;
                sorter.priority = matchedSorter ? matchedSorter.priority : undefined;
            });
        }
    }

    get _hasResults() {
        return this._data;
    }

    _render() {
        this._renderHeaders();
        this._renderBody();
    }

    _renderHeaders() {
        this.__tableHeaderRow.innerHTML = '';
        const headerColumns = this.__richDataFields.map((field) => field.headerTemplate());
        const atLeastOneHeaderColumnHasContent = headerColumns.some((header) => !!header.textContent);
        if (atLeastOneHeaderColumnHasContent) {
            headerColumns.forEach(this.__addHeaderColumn.bind(this));
            this.__showHeader();
        } else {
            this.__hideHeader();
        }
    }

    __addHeaderColumn(header: any) {
        this.__initializeSortingOnHeaderColumn(header);
        this.__tableHeaderRow.appendChild(header);
    }

    __hideHeader() {
        this.__tableHeader.setAttribute('hidden', '');
    }

    __showHeader() {
        this.__tableHeader.removeAttribute('hidden');
    }

    __initializeSortingOnHeaderColumn(header: any) {
        const sorterButton = header.querySelector('th[data-vl-sortable] > a');
        if (sorterButton) {
            sorterButton.addEventListener('click', (e: any) => {
                sorterButton.querySelector('vl-rich-data-sorter').nextDirection();
            });
        }
    }

    _renderBody() {
        if (this.data && this.data.data) {
            this.__tableBody.innerHTML = '';
            this.data.data.forEach((rowData: any) => {
                const rowTemplate = this._template(`<tr></tr>`).firstElementChild;
                this.__richDataFields.map((field) => {
                    rowTemplate.appendChild(field.valueTemplate(rowData));
                });
                this.__tableBody.appendChild(rowTemplate);
            });
        }
    }

    _dataChangedCallback(oldValue: any, newValue: any) {
        this.data = JSON.parse(newValue);
    }

    __listenToFieldChanges(field: any) {
        field.addEventListener('change', this.__fieldChanged.bind(this));
    }

    __stopListeningToFieldChanges(field: any) {
        field.removeEventListener('change', this.__fieldChanged.bind(this));
    }

    __listenToSortChanges(sorter: any) {
        sorter.addEventListener('change', this.__sortingChanged.bind(this));
    }

    __stopListeningToSortChanges(sorter: any) {
        sorter.removeEventListener('change', this.__sortingChanged.bind(this));
    }

    __fieldChanged(event: any) {
        const propertiesChanged = event.detail.properties;
        if (propertiesChanged) {
            if (propertiesChanged.some((property: any) => VlRichDataField.headerAttributes.includes(property))) {
                this._renderHeaders();
            }

            if (propertiesChanged.some((property: any) => VlRichDataField.bodyAttributes.includes(property))) {
                this._renderBody();
            }
        }
    }

    __sortingChanged(event: any) {
        if (this._isMultisortingEnabled) {
            this.__activeSorters.forEach((sorter: any, index: number) => (sorter.priority = index + 1));
        } else {
            this.__activeSorters
                .filter((sorter) => sorter !== event.target)
                .forEach((sorter: any) => (sorter.direction = undefined));
        }
        this.__onStateChange(event);
    }

    __createObserver(doWhenNodeIsAdded: any, doWhenNodeIsRemoved: any, render: any) {
        return new MutationObserver((mutationsList) => {
            let shouldRender = false;
            mutationsList.forEach((mutation) => {
                if (mutation.addedNodes || mutation.removedNodes) {
                    shouldRender = true;
                    if (mutation.addedNodes) {
                        mutation.addedNodes.forEach(doWhenNodeIsAdded);
                    }
                    if (mutation.removedNodes) {
                        mutation.removedNodes.forEach(doWhenNodeIsRemoved);
                    }
                }
            });
            if (render && shouldRender) {
                this._render();
            }
        });
    }

    __observeFields() {
        this.__fields.forEach(this.__listenToFieldChanges.bind(this));
        const observer = this.__createObserver(
            this.__listenToFieldChanges.bind(this),
            this.__stopListeningToFieldChanges.bind(this),
            true
        );
        observer.observe(this as any, { childList: true });
    }

    __observeSorters() {
        const nodeToSorter = (doWithSorter: any) => {
            return (node: any) => {
                const sorter = node.querySelector(VlRichDataSorter.is);
                if (sorter) {
                    doWithSorter(sorter);
                }
            };
        };
        this.__createObserver(
            nodeToSorter((sorter: any) => this.__listenToSortChanges(sorter)),
            nodeToSorter((sorter: any) => this.__stopListeningToSortChanges(sorter)),
            null
        ).observe(this.__tableHeaderRow, { childList: true });
    }
}

Promise.all([customElements.whenDefined(VlRichDataField.is), customElements.whenDefined(VlRichDataSorter.is)]).then(
    () => define(VlRichDataTable.is, VlRichDataTable)
);
