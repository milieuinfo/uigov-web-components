import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlPropertiesListTester } from './vl-properties-list.tester';

export class VlPropertiesColumnTester extends VlElementTester {
    async isFullSize() {
        return this.hasAttribute('full');
    }

    async getPropertiesList() {
        return new VlPropertiesListTester(this.driver, await this.findElement(By.css('[is="vl-properties-list"]')));
    }
}
