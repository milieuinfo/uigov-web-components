import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export default class VlLoaderTester extends VlElementTester {
    async isLight() {
        return this.hasAttribute('data-vl-light');
    }

    async isSingle() {
        return this.hasAttribute('data-vl-single');
    }

    async getText() {
        const slot = await this._getSlotElement();
        const element = await new VlElementTester(this.driver, slot);
        return element.getText();
    }

    async slotElements() {
        const slot = await this._getSlotElement();
        return this.getAssignedElements(slot);
    }

    async _getSlotElement() {
        return this.shadowRoot.findElement(By.css('slot'));
    }
}
