import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlTabTester extends VlElementTester {
    async click() {
        const nodes = await this.getTitleSlotNodes();
        if (nodes && nodes.length > 0) {
            return nodes[0].click();
        }
        const link = await this._getLink();
        return link.click();
    }

    async getTitleSlotNodes() {
        const slot = await this._getTitleSlot();
        return this.getAssignedNodes(slot);
    }

    async isActive() {
        return this.hasClass('vl-tab--active');
    }

    async getText() {
        const slot = await this._getTitleSlot();
        return slot.getText();
    }

    async _getLink() {
        const element = await this.findElement(By.css('a'));
        return new VlElementTester(this.driver, element);
    }

    async _getTitleSlot() {
        const link = await this._getLink();
        return link.findElement(By.css('slot'));
    }
}
