import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlPropertiesTester extends VlElementTester {
    async getSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot'));
        return this.getAssignedElements(slot);
    }
}
