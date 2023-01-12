import { VlElementTester } from '../../base/vl-element.tester';
import { VlButtonTester } from '../button/vl-button.tester';
import { By } from '../../util/tester.setup.js';

export class VlFormTester extends VlElementTester {
    async submit() {
        const button = await this._getSubmitButton();
        await button.click();
    }

    async _getSubmitButton() {
        const element = await this.findElement(By.css('button[type="submit"]'));
        return new VlButtonTester(this.driver, element);
    }
}
