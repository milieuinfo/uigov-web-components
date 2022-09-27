import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlSideSheetTester extends VlElementTester {
    async isOpen() {
        return this.hasAttribute('data-vl-open');
    }

    async isLeft() {
        return this.hasAttribute('data-vl-left');
    }

    async isSwipeEnabled() {
        return this.hasAttribute('data-vl-enable-swipe');
    }

    async open() {
        const isOpen = await this.isOpen();
        if (!isOpen) {
            const toggleButton = await this._getToggleButton();
            return toggleButton.click();
        }
    }

    async close() {
        const isOpen = await this.isOpen();
        if (isOpen) {
            const toggleButton = await this._getToggleButton();
            return toggleButton.click();
        }
    }

    async getContentSlotNodes() {
        const contentSlot = await this._getContentSlot();
        return this.getAssignedElements(contentSlot);
    }

    async _getContentSlot() {
        return this.shadowRoot.findElement(By.css('#vl-side-sheet slot'));
    }

    async _getToggleButton() {
        return this.shadowRoot.findElement(By.css('.vl-side-sheet__toggle'));
    }
}
