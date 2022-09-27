import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlLinkTester } from '../../elements/link/vl-link.tester';

export class VlFunctionalHeaderTester extends VlElementTester {
    async getTitle() {
        return this._getElement('#title');
    }

    async getSubTitle() {
        return this._getElement('#sub-title');
    }

    async getTitleSlotNodes() {
        return this._getSlotNodes('title');
    }

    async getTopLeftSlotNodes() {
        return this._getSlotNodes('top-left');
    }

    async getSubTitleSlotNodes() {
        return this._getSlotNodes('sub-title');
    }

    async getSubHeaderSlotNodes() {
        return this._getSlotNodes('sub-header');
    }

    async getTopRightSlotNodes() {
        return this._getSlotNodes('top-right');
    }

    async getActionNodes() {
        return this.shadowRoot.findElements(By.css('#actions ul li > *'));
    }

    async back() {
        const element = await this.shadowRoot.findElement(By.css('#back-link'));
        const link = await new VlLinkTester(this.driver, element);
        return link.click();
    }

    async _getElement(selector) {
        const element = await this.shadowRoot.findElement(By.css(selector));
        return new VlElementTester(this.driver, element);
    }

    async _getSlotNodes(name) {
        const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
        return this.getAssignedNodes(slot);
    }
}
