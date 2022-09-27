import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlLinkListItemTester } from './vl-link-list-item.tester';

export default class VlLinkListTester extends VlElementTester {
    async getListItems() {
        return this.findElements(By.css('[is="vl-link-list-item"]'));
    }

    async getListItem(index) {
        const listItems = await this.getListItems();
        return new VlLinkListItemTester(this.driver, listItems[index]);
    }
}
