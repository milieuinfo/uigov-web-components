import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlStepTester extends VlElementTester {
    async toggle() {
        const title = await this.getTitle();
        await title.click();
    }

    async getIdentifier() {
        return this._getSlotElement('identifier');
    }

    async getIdentifierAnnotation() {
        return this._getSlotElement('identifier-annotation');
    }

    async getTitle() {
        return this._getSlotElement('title');
    }

    async getSubTitle() {
        return this._getSlotElement('sub-title');
    }

    async getTitleAnnotation() {
        return this._getSlotElement('title-annotation');
    }

    async getContent() {
        return this._getSlotElement('content');
    }

    async isDisabled() {
        return this._hasClass('disabled');
    }

    async isSuccess() {
        return this._hasClass('success');
    }

    async isWarning() {
        return this._hasClass('warning');
    }

    async isError() {
        return this._hasClass('error');
    }

    async isToggleable() {
        return this._hasClass('accordion');
    }

    async isOpen() {
        const toggleable = await this.isToggleable();
        if (toggleable) {
            return this.hasClass('js-vl-accordion--open');
        } else {
            return true;
        }
    }

    async _hasClass(type) {
        return this.hasClass(`vl-step--${type}`);
    }

    async _getSlotElement(identifier) {
        return this._getElement(`[slot="${identifier}"]`);
    }

    async _getElement(identifier) {
        const element = await this.findElement(By.css(identifier));
        return new VlElementTester(this.driver, element);
    }
}
