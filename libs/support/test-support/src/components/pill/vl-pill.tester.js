import { By } from '../../util/tester.setup';
import { VlPillElementTester } from './vl-pill-element.tester';

export class VlPillTester extends VlPillElementTester {
    async isClosable() {
        return this.hasAttribute('data-vl-closable');
    }

    async isCheckable() {
        return this.hasAttribute('data-vl-checkable');
    }

    async isChecked() {
        return this.driver.executeScript('return arguments[0].checked', this);
    }

    async toggleCheck() {
        if (await this.isCheckable()) {
            await this.click();
        }
    }

    async close() {
        if (await this.isClosable()) {
            this.driver.executeScript('arguments[0].addEventListener("close", function(){closeIsFired = true})', this);
            const closeButton = await this._getCloseButton();
            await closeButton.click();
        }
    }

    async getContentSlotNodes() {
        const slot = await this._getContentSlot();
        return this.getAssignedNodes(slot);
    }

    async _getContentSlot() {
        return this.shadowRoot.findElement(By.css('slot'));
    }

    async _getCloseButton() {
        return this.shadowRoot.findElement(By.css('button'));
    }
}
