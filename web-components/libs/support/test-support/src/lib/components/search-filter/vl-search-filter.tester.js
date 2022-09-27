import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export default class VlSearchFilterTester extends VlElementTester {
    async getTitleText() {
        const title = await this.findElement(By.css('p.vl-search-filter__intro'));
        return title.getText();
    }

    async isAlt() {
        return this.hasAttribute('alt');
    }
}
