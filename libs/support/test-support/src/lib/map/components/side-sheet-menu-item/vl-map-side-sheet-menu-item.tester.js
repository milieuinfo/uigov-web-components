import { VlElementTester } from '../../../base/vl-element.tester';
import { By } from '../../../util/tester.setup';

export class VlMapSideSheetMenuItemTester extends VlElementTester {
    async getLink() {
        return this.shadowRoot.findElement(By.css('#vl-map-side-sheet-menu-item-link'));
    }

    async getTitle() {
        const link = await this.getLink();
        return link.getText();
    }

    async getMessagesSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot'));
        return this.getAssignedElements(slot);
    }
}
