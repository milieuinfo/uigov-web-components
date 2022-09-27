import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlAccordionTester extends VlElementTester {
    async linkText() {
        return this.titleText();
    }

    async titleText() {
        const element = (await this.getTitleSlotElements())[0];
        if (element) {
            return element.getText();
        }
        const slot = await this._getTitleSlot();
        return slot.getTextContent();
    }

    async _getTitleSlot() {
        return this.shadowRoot.findElement(By.css('slot[name="title"]'));
    }

    async getTitleSlotElements() {
        const slot = await this._getTitleSlot();
        const slottedElements = await this.getAssignedElements(slot);
        return Promise.all(slottedElements.map((element) => new VlElementTester(this.driver, element)));
    }

    async toggle() {
        const element = (await this.getTitleSlotElements())[0];
        if (element) {
            return element.click();
        }
        return (await this._getToggleButton()).click();
    }

    async open() {
        return (await this.isOpen()) ? Promise.resolve() : this.toggle();
    }

    async close() {
        return (await this.isClosed()) ? Promise.resolve() : this.toggle();
    }

    async isOpen() {
        const div = await this._accordionDiv();
        return div.hasClass('js-vl-accordion--open');
    }

    async isClosed() {
        return !(await this.isOpen());
    }

    async contentSlotElements() {
        const slottedContent = await (await this._content()).findElement(By.css('#accordion-slot'));
        const slottedElements = await this.getAssignedElements(slottedContent);
        return Promise.all(slottedElements.map((slot) => new VlElementTester(this.driver, slot)));
    }

    async _getToggleButton() {
        return this.shadowRoot.findElement(By.css('button'));
    }

    async _content() {
        return this.shadowRoot.findElement(By.css('.vl-accordion__content'));
    }

    async _accordionDiv() {
        return this.shadowRoot.findElement(By.css('div[data-vl-accordion]'));
    }

    async isContentDisplayed() {
        const firstContent = (await this.contentSlotElements())[0];
        return firstContent.isDisplayed();
    }
}
