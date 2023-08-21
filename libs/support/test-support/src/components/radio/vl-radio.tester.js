import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlRadioTester extends VlElementTester {
    async click() {
        const label = await this._getLabel();
        await label.click();
    }

    async isChecked() {
        const input = await this._getInput();
        return this.driver.executeScript('return arguments[0].checked', input);
    }

    async isBlock() {
        return this.hasAttribute('data-vl-block');
    }

    async isDisabled() {
        return this.hasAttribute('data-vl-disabled');
    }

    async isSingle() {
        return this.hasAttribute('data-vl-single');
    }

    async hasError() {
        return this.hasAttribute('data-vl-error');
    }

    async getText() {
        const label = await this._getLabel();
        return label.getText();
    }

    async labelSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot'));
        return this.getAssignedElements(slot);
    }

    async _getInput() {
        return this.shadowRoot.findElement(By.css('input[type="radio"]'));
    }

    async _getLabel() {
        return this.shadowRoot.findElement(By.css('.vl-radio__label'));
    }
}
