import { VlCookieConsentOptInTester } from './vl-cookie-consent-opt-in.tester';
import { VlElementTester } from '../../base/vl-element.tester.js';
import { VlModalTester } from '../../components/modal/vl-modal.tester.js';
import { By } from '../../util/tester.setup.js';

export class VlCookieConsentTester extends VlElementTester {
    async _getModal() {
        return new VlModalTester(this.driver, this.shadowRoot);
    }

    async isDisplayed() {
        const modal = await this._getModal();
        return modal.isDisplayed();
    }

    async getOwner() {
        const element = await this.shadowRoot.findElement(By.css('[data-vl-owner]'));
        return element.getText();
    }

    async getLink() {
        const element = await this.shadowRoot.findElement(By.css('#link'));
        return element.getText();
    }

    async getOptIn(label) {
        const optIns = await this.getOptIns();
        for (let i = 0; i < optIns.length; i++) {
            const optIn = optIns[i];
            if (await optIn.getLabel() === label) {
                return optIn;
            }
        }
    }

    async getOptIns() {
        const modal = await this._getModal();
        const optIns = await modal.findElements(By.css('vl-cookie-consent-opt-in'));
        return Promise.all(optIns.map((optIn) => new VlCookieConsentOptInTester(this.driver, optIn)));
    }

    async save() {
        const modal = await this._getModal();
        await modal.submit();
    }
}
