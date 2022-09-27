import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlDescriptionDataItemTester } from './vl-description-data-item.tester';

export class VlDescriptionDataTester extends VlElementTester {
    async getDescriptionDataBlocks() {
        const elements = await this.findElements(By.css('vl-description-data-item'));
        return Promise.all(elements.map(async (element) => new VlDescriptionDataItemTester(this.driver, element)));
    }

    async getDescriptionDataBlock(index) {
        const elements = await this.getDescriptionDataBlocks();
        return new VlDescriptionDataItemTester(this.driver, elements[index]);
    }
}
