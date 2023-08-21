import { VlRichDataTester } from '../rich-data/vl-rich-data.tester';
import { By } from '../../util/tester.setup';
import { VlRichDataSorterTester } from './vl-rich-data-sorter.tester';
import { VlDataTableTester } from '../../elements/data-table/vl-data-table.tester';

export class VlRichDataTableTester extends VlRichDataTester {
    async toggleSortOfColumn(field) {
        const sorter = await this.getSorter(field);
        const parent = await sorter.findElement(By.xpath('..'));
        return parent.click();
    }

    async getSorter(field) {
        const element = await this.shadowRoot.findElement(By.css(`vl-rich-data-sorter[data-vl-for="${field}"]`));
        return new VlRichDataSorterTester(this.driver, element);
    }

    async isCollapsedMedium() {
        return this.hasAttribute('data-vl-collapsed-m');
    }

    async isCollapsedSmall() {
        return this.hasAttribute('data-vl-collapsed-s');
    }

    async isCollapsedExtraSmall() {
        return this.hasAttribute('data-vl-collapsed-xs');
    }

    async isMultisortingEnabled() {
        return this.hasAttribute('data-vl-multisort');
    }

    async getHeader() {
        const table = await this._getTable();
        return table.getHeader();
    }

    async getHeaderRows() {
        const header = await this.getHeader();
        return header.getRows();
    }

    async getBody() {
        const table = await this._getTable();
        return table.getBody();
    }

    async getBodyRows() {
        const body = await this.getBody();
        return body.getRows();
    }

    async _getTable() {
        const element = await this.shadowRoot.findElement(By.css('[is="vl-data-table"]'));
        return new VlDataTableTester(this.driver, element);
    }
}
