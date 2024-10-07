import { BaseElementOfType, registerWebComponents, webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';
import { VlButtonElement } from '../button/vl-button.element';
import { VlIconElement } from '../icon/vl-icon.element';

@elementStyles()
@webComponent('vl-data-table', { extends: 'table' })
export class VlDataTable extends BaseElementOfType(HTMLTableElement) {
    private _observer: MutationObserver | undefined;

    static {
        registerWebComponents([VlButtonElement, VlIconElement]);
    }

    static get _observedClassAttributes() {
        return ['hover', 'matrix', 'grid', 'zebra', 'uig-zebra', 'collapsed-m', 'collapsed-s', 'collapsed-xs'];
    }

    connectedCallback() {
        this._processClass();
        this._processScopeAttributes();
        this._processRowElements();
        this._observer = this._observeHeaderElements(() => this._processScopeAttributes());
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    get _headHeaderElements(): HTMLTableCellElement[] {
        return [...(this as unknown as HTMLTableElement).querySelectorAll<HTMLTableCellElement>('thead tr th')];
    }

    get _bodyHeaderElements(): HTMLTableCellElement[] {
        return [...(this as unknown as HTMLTableElement).querySelectorAll<HTMLTableCellElement>('tbody tr th')];
    }

    get _bodyRowElements(): HTMLTableRowElement[] {
        return [...(this as unknown as HTMLTableElement).querySelectorAll<HTMLTableRowElement>('tbody tr')];
    }

    _detailsToggleButtonElement(id: string): HTMLButtonElement | null {
        return (this as unknown as HTMLTableElement).querySelector<HTMLButtonElement>(
            `tbody tr td button[id="details-toggle-${id}"]`
        );
    }

    _detailsTableRowElement(id: string): HTMLTableRowElement | null {
        return (this as unknown as HTMLTableElement).querySelector<HTMLTableRowElement>(
            `tbody tr[data-details-id="${id}"]`
        );
    }

    _detailsTableRowElements(id: string): NodeListOf<HTMLTableRowElement> | null {
        return (this as unknown as HTMLTableElement).querySelectorAll<HTMLTableRowElement>(
            `tbody tr[data-details-id="${id}"]`
        );
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

    _expandCollapseTemplate(id: string): DocumentFragment {
        const template = this._template(
            `<button id="details-toggle-${id}" aria-expanded="false" type="button" is="vl-button" class="vl-button vl-button--icon-after" data-vl-narrow data-vl-secondary aria-label="toggle details">
                <span is="vl-icon" data-vl-icon="arrow-down-fat" ></span>
             </button>`
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
        const details = this._detailsTableRowElements(id);
        const button = this._detailsToggleButtonElement(id);
        if (show) {
            if (details) {
                details.forEach((detail) => {
                    detail.style.removeProperty('display');
                });
            }
            if (button) {
                button.setAttribute('aria-expanded', 'true');
                button.innerHTML = '<span is="vl-icon" data-vl-icon="arrow-up-fat" class="vl-button__icon"></span>';
            }
        } else {
            if (details) {
                details.forEach((detail) => {
                    detail.style.display = 'none';
                });
            }
            if (button) {
                button.setAttribute('aria-expanded', 'false');
                button.innerHTML = '<span is="vl-icon" data-vl-icon="arrow-down-fat" class="vl-button__icon"></span>';
            }
        }
    }

    _processRowElements(): void {
        const rows = this._bodyRowElements;
        let dataRowIndex = 0;
        for (let i = 0; i < rows.length; i += 1) {
            const row = rows[i];

            const isDataRow = (rowValue: HTMLTableRowElement) => !rowValue.hasAttribute('data-details-id');
            if (isDataRow(row)) {
                dataRowIndex += 1;
            } else {
                const id = row.getAttribute('data-details-id');

                row.style.display = 'none';

                const dataRow = rows[i - 1];
                if (dataRow.querySelectorAll('td[with-expand-details]').length === 0 && id && isDataRow(dataRow)) {
                    const cell = document.createElement('td');
                    const button = this._expandCollapseTemplate(id);
                    cell.append(button);
                    dataRow.appendChild(cell);
                }

                const detailsCellCount = row?.querySelectorAll('td')?.length;
                if (detailsCellCount === 1) {
                    const dataCellCount = dataRow.querySelectorAll('td').length;
                    const detailsCell = row.querySelector('td');
                    if (detailsCell) detailsCell.colSpan = dataCellCount;
                }
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
        const details = this._detailsTableRowElements(id);
        const detailsVisible = details ? details[0].style.display !== 'none' : false;
        details?.forEach((detail) => {
            detail.style.display = detailsVisible ? 'none' : 'table-row';
        });
        this._showDetails(id, !detailsVisible);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-data-table': VlDataTable;
    }
}
