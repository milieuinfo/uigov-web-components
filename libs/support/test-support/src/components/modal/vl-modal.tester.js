import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { testerConfig } from '../../util/tester.config';

export class VlModalTester extends VlElementTester {
    async isDisplayed() {
        const dialog = await this._getDialog();
        return dialog.isDisplayed();
    }

    async isCancellable() {
        return this._exists(() => this._getCancelButton());
    }

    async cancel() {
        const button = await this._getCancelButton();
        return button.click();
    }

    async isClosable() {
        return this._exists(() => this._getCloseButton());
    }

    async close() {
        const button = await this._getCloseButton();
        return button.click();
    }

    async isSubmittable() {
        return this._exists(() => this._getActionButton());
    }

    async submit() {
        const button = await this._getActionButton();
        await button.scrollIntoView();
        await button.click();
    }

    async getContentSlotElements() {
        const slot = await this._getContent();
        return this.getAssignedElements(slot);
    }

    async isInViewport() {
        const dialog = await this._getDialog();
        return dialog.isInViewport();
    }

    async scrollToTop() {
        const dialog = await this._getDialog();
        return dialog.scrollToTop();
    }

    async sendKeys(key) {
        let element;
        if (testerConfig.browserName === 'chrome') {
            element = await this._getDialog();
        } else {
            element = await this.driver.findElement(By.css('body'));
        }
        await element.sendKeys(key);
    }

    async _getDialog() {
        const element = await this.shadowRoot.findElement(By.css('dialog'));
        return new VlElementTester(this.driver, element);
    }

    async _getCancelButton() {
        return this.shadowRoot.findElement(By.css('#modal-toggle-cancellable'));
    }

    async _getCloseButton() {
        return this.shadowRoot.findElement(By.css('#close'));
    }

    async _getContent() {
        return this.shadowRoot.findElement(By.css('slot[name="content"]'));
    }

    async _getActionButton() {
        return this.findElement(By.css('[slot="button"]'));
    }

    async _exists(getter) {
        try {
            await getter();
            return true;
        } catch (error) {
            return false;
        }
    }
}
