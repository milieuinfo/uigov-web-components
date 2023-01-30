import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlSideNavigationToggle } from './vl-side-navigation-toggle.tester';

export class VlSideNavigationItem extends VlElementTester {
    async getToggle() {
        const element = await this.findElement(By.css('a'));
        return new VlSideNavigationToggle(this.driver, element);
    }

    async getItems() {
        const items = await this.findElements(By.css('[is="vl-side-navigation-item"]'));
        return Promise.all(items.map((item) => new VlSideNavigationItem(this.driver, item)));
    }
}
