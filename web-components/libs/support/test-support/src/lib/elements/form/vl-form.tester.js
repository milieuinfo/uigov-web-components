import { VlElementTester, By } from '../../base/vl-element.tester';
import { VlButton } from '../button/vl-button.tester';

export class VlFormTester extends VlElementTester {
    async submit() {
        const button = await this._getSubmitButton();
        await button.click();
    }

    async _getSubmitButton() {
        const element = await this.findElement(By.css('button[type="submit"]'));
        return new VlButton(this.driver, element);
    }
}
