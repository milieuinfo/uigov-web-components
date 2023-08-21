import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlCheckboxTester extends VlElementTester {
    async click() {
        await this.hover();
        const label = await this._getLabel();
        await this.driver.actions().move({ origin: label }).click().perform();
    }

    async getLabel() {
        const label = await this._getLabelElement();
        return label.getText();
    }

    async getLabelSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot'));
        return this.getAssignedElements(slot);
    }

    async isChecked() {
        const input = await this._getInput();
        return this.driver.executeScript('return arguments[0].checked', input);
    }

    async isBlock() {
        return this._hasClass('vl-checkbox--block');
    }

    async isError() {
        return this._hasClass('vl-checkbox--error');
    }

    async isSingle() {
        return this._hasClass('vl-checkbox--single');
    }

    async isSwitch() {
        return this._hasClass('vl-checkbox--switch__wrapper');
    }

    async isDisabled() {
        return this._hasClass('vl-checkbox--disabled');
    }

    async _getLabel() {
        return this.shadowRoot.findElement(By.css('.vl-checkbox__label'));
    }

    async _getLabelElement() {
        const label = await this._getLabel();
        return label.findElement(By.css(':scope > span:not(.vl-checkbox--switch__label)'));
    }

    async _getInput() {
        return this.shadowRoot.findElement(By.css('#checkbox'));
    }

    async _hasClass(clazz) {
        return this.shadowRoot.hasClass(clazz);
    }
}
