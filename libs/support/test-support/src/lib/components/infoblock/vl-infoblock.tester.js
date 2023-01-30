import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlIconTester } from '../../elements/icon/vl-icon.tester';

export class VlInfoblockTester extends VlElementTester {
    async getTitleSlotElements() {
        const titleSlot = await this._getTitleSlot();
        return this.getAssignedElements(titleSlot);
    }

    async getContentSlotText() {
        const contentSlot = await this._getContentSlot();
        return await this.driver.executeScript('return arguments[0].assignedNodes()[1].textContent', contentSlot);
    }

    async getIcon() {
        return new VlIconTester(this.driver, await this._getIcon());
    }

    async getType() {
        return this.getAttribute('type');
    }

    async isContact() {
        return (await this.getType()) == 'contact';
    }

    async isPublication() {
        return (await this.getType()) == 'publications';
    }

    async isFaq() {
        return (await this.getType()) == 'faq';
    }

    async isNews() {
        return (await this.getType()) == 'news';
    }

    async isTimeline() {
        return (await this.getType()) == 'timeline';
    }

    async isQuestion() {
        return (await this.getType()) == 'question';
    }

    async _getTitleSlot() {
        return this.shadowRoot.findElement(By.css('slot[name="title"]'));
    }

    async _getContentSlot() {
        return this.shadowRoot.findElement(By.css('#infoblock_content slot'));
    }

    async _getIcon() {
        return this.shadowRoot.findElement(By.css('[is="vl-icon"]'));
    }
}
