import { VlElementTester } from '../../base/vl-element.tester';
import VlSearchFilterTester from '../search-filter/vl-search-filter.tester';
import { VlSelectTester } from '../../elements/select/vl-select.tester';
import VlPagerTester from '../pager/vl-pager.tester';
import { By } from '../../util/tester.setup';

export class VlRichDataTester extends VlElementTester {
    async getContentSlotElements() {
        return this._getSlotElements('content');
    }

    async getSearchFilter() {
        const searchFilter = await this.findElement(By.css('[is="vl-search-filter"]'));
        return new VlSearchFilterTester(this.driver, searchFilter);
    }

    async getSorter() {
        const assignedElements = await this._getSorterSlotElements();
        return new VlSelectTester(this.driver, assignedElements[0]);
    }

    async getPager() {
        const assignedElements = await this._getPagerSlotElements();
        return new VlPagerTester(this.driver, assignedElements[0]);
    }

    async getNumberOfSearchResults() {
        const element = await this._getSearchResultsNumberElement();
        return element.getText();
    }

    async toggleSearchFilter() {
        const button = await this.shadowRoot.findElement(By.css('#toggle-filter-button'));
        return button.click();
    }

    async openModalSearchFilter() {
        const button = await this.shadowRoot.findElement(By.css('#open-filter-button'));
        await button.scrollIntoView();
        return button.click();
    }

    async _getSorterSlotElements() {
        return this._getSlotElements('sorter');
    }

    async _getPagerSlotElements() {
        return this._getSlotElements('pager');
    }

    async _getSlotElements(name) {
        const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
        return this.getAssignedElements(slot);
    }

    async _getSearchResultsNumberElement() {
        return this.shadowRoot.findElement(By.css('#search-results-number'));
    }

    async contentIsVisible() {
        const element = await new VlElementTester(
            this.driver,
            await this.shadowRoot.findElement(By.css('slot[name="content"]'))
        );
        return !(await element.hasAttribute('hidden'));
    }

    async noContentIsVisible() {
        const element = await new VlElementTester(
            this.driver,
            await this.shadowRoot.findElement(By.css('slot[name="no-content"]'))
        );
        return !(await element.hasAttribute('hidden'));
    }
}
