import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlIconTester } from '../../elements/icon/vl-icon.tester';

export default class VlAlertTester extends VlElementTester {
    async getCloseButton() {
        return await this.shadowRoot.findElement(By.css('#close'));
    }

    async hasTitle() {
        return this._exists('#title');
    }

    async getTitle() {
        const element = (await this._getTitleSlotElements())[0];
        if (element) {
            return element.getText();
        } else {
            const slot = await this._getTitleSlot();
            return slot.getTextContent();
        }
    }

    async _getTitleSlot() {
        return this.shadowRoot.findElement(By.css('#title slot'));
    }

    async _getTitleSlotElements() {
        const slot = await this._getTitleSlot();
        return this.getAssignedElements(slot);
    }

    async getMessagesSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('#messages-slot'));
        return this.getAssignedElements(slot);
    }

    async getActionsSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('#actions-slot'));
        return this.getAssignedElements(slot);
    }

    async hasIcon() {
        return this._exists('.vl-alert__icon');
    }

    async getIcon() {
        const icon = await this.shadowRoot.findElement(By.css('.vl-alert__icon [is=vl-icon]'));
        return new VlIconTester(this.driver, icon);
    }

    async isClosable() {
        return this.hasAttribute('closable');
    }

    async isSuccess() {
        return this._isType('success');
    }

    async isWarning() {
        return this._isType('warning');
    }

    async isError() {
        return this._isType('error');
    }

    async isInfo() {
        return this._isType('info');
    }

    async isSmall() {
        return this._isSize('small');
    }

    async close() {
        const button = await this.getCloseButton();
        return button.click();
    }

    async _exists(selector) {
        return (await this.shadowRoot.findElement(By.css(selector))) != null;
    }

    async _isType(value) {
        const type = await this.getAttribute('type');
        return type == value;
    }

    async _isSize(value) {
        const size = await this.getAttribute('size');
        return size == value;
    }
}
