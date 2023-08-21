import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlSearchResultTester } from './vl-search-result.tester';

export class VLSearchResultsTester extends VlElementTester {
    async getSearchResult(number) {
        const results = await this.getSearchResults();
        return results[--number];
    }

    async getSearchResults() {
        const items = await this.findElements(By.css('[is="vl-search-result"]'));
        return Promise.all(items.map((item) => new VlSearchResultTester(this.driver, item)));
    }
}
