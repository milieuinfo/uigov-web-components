import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlDocumentTester extends VlElementTester {
    async download() {
        const link = await this._getLink();
        await link.click();
    }

    async getType() {
        const element = await this._getSlotElement('type');
        return element.getText();
    }

    async getTitle() {
        const element = await this._getSlotElement('title');
        return element.getText();
    }

    async getMetadata() {
        const element = await this._getSlotElement('metadata');
        return element.getText();
    }

    async _getSlotElement(name) {
        const slot = this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
        const elements = await this.getAssignedElements(slot);
        return elements[0];
    }

    async _getLink() {
        return this.shadowRoot;
    }
}
