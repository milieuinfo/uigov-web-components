import { BaseElementOfType, define } from '@domg-lib/common-utilities';

/**
 * VlDataTable
 * @class
 * @classdesc Gebruik een data table om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen.
 *
 * @extends HTMLTableElement
 * @mixes nativeVlElement
 *
 * @vollapsedproperty {boolean} data-vl-hover - Attribuut wordt gebruikt om een rij te highlighten waneer de gebruiker erover hovert met muiscursor.
 * @property {boolean} data-vl-matrix - Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.
 * @property {boolean} data-vl-grid - Variant met een lijn tussen elke rij en kolom.
 * @property {boolean} data-vl-zebra - Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar.
 * @property {boolean} data-vl-uig-zebra - Zebra variant voor tabellen met en zonder detail rijen.
 * @property {boolean} data-vl-collaped-m - Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 * @property {boolean} data-vl-collaped-s - Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 * @property {boolean} data-vl-collaped-xs - Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 */
export class VlDataTable extends BaseElementOfType(HTMLTableElement) {
    static get _observedClassAttributes() {
        return ['hover', 'matrix', 'grid', 'zebra', 'uig-zebra', 'collapsed-m', 'collapsed-s', 'collapsed-xs'];
    }

    connectedCallback() {
        this._processClass();
        this._processScopeAttributes();
        this._processRowElements();
        this._observer = this._observeHeaderElements(() => this._processScopeAttributes());
    }

    disconnectedcallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    get _headHeaderElements() {
        return [...this.querySelectorAll('thead tr th')];
    }

    get _bodyHeaderElements() {
        return [...this.querySelectorAll('tbody tr th')];
    }

    get _bodyRowElements() {
        return [...this.querySelectorAll('tbody tr')];
    }

    _detailsToggleButtonElement(id: string) {
        return this.querySelector(`tbody tr td button[id="details-toggle-${id}"]`);
    }

    _detailsTableRowElement(id: string) {
        return this.querySelector(`tbody tr[data-details-id="${id}"]`);
    }

    get _classPrefix() {
        return 'vl-data-table--';
    }

    _processClass() {
        this.classList.add('vl-data-table');
    }

    _processScopeAttributes() {
        this._headHeaderElements
            .filter((header) => !header.hasAttribute('scope'))
            .forEach((header) => header.setAttribute('scope', 'col'));
        this._bodyHeaderElements
            .filter((header) => !header.hasAttribute('scope'))
            .forEach((header) => header.setAttribute('scope', 'row'));
    }

    _expandCollapseTemplate(id: string) {
        const template = this._template(
            `<button id="details-toggle-${id}" type="button" is="vl-button" class="vl-button vl-button--icon-after" data-vl-narrow data-vl-secondary><span is="vl-icon" data-vl-icon="arrow-down-fat" ></span></button>`
        );

        template.firstElementChild.addEventListener('click', (e: Event) => {
            e.preventDefault();

            this.toggleDetails(id);
        });

        return template;
    }

    collapseDetails(id: string) {
        this._showDetails(id, false);
    }

    expandDetails(id: string) {
        this._showDetails(id, true);
    }

    _showDetails(id: string, show: boolean) {
        const details = this._detailsTableRowElement(id);
        const button = this._detailsToggleButtonElement(id);
        if (show) {
            details.style.display = 'table-row';
            if (button)
                button.innerHTML = '<span is="vl-icon" data-vl-icon="arrow-up-fat" class="vl-button__icon"></span>';
        } else {
            details.style.display = 'none';
            if (button)
                button.innerHTML = '<span is="vl-icon" data-vl-icon="arrow-down-fat" class="vl-button__icon"></span>';
        }
    }

    _processRowElements() {
        const rows = this._bodyRowElements;
        console.log({ rows });
        let dataRowIndex = 0;
        for (let i = 0; i < rows.length; i += 1) {
            const row = rows[i];

            const isDataRow = !row.hasAttribute('data-details-id');
            if (isDataRow) {
                dataRowIndex += 1;
            } else {
                const id = row.getAttribute('data-details-id');

                row.style.display = 'none';

                const dataRow = rows[i - 1];
                if (dataRow.querySelectorAll('td[with-expand-details]').length === 0) {
                    const cell = document.createElement('td');
                    const button = this._expandCollapseTemplate(id);
                    cell.append(button);

                    dataRow.appendChild(cell);
                }

                const dataCellCount = dataRow.querySelectorAll('td').length;
                const detailsCell = row.querySelector('td');
                detailsCell.colSpan = dataCellCount;
            }

            const even = dataRowIndex % 2 === 0;
            row.classList.add(even ? 'even' : 'odd');
        }
    }

    _observeHeaderElements(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, { childList: true });
        return observer;
    }

    toggleDetails(id: string) {
        const details = this._detailsTableRowElement(id);
        const detailsVisible = details.style.display !== 'none';
        this._showDetails(id, !detailsVisible);
    }
}

define('vl-data-table', VlDataTable, { extends: 'table' });
