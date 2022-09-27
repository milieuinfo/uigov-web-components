import { By } from '../../util/tester.setup';
import { VlElementTester } from '../../base/vl-element.tester';
import VlHttpErrorMessageTester from './vl-http-error-message.tester';
import { VlButtonTester } from '../../elements/button/vl-button.tester';

export default class VlHttpErrorMessageComponentTester extends VlElementTester {
    async getChild() {
        return new VlHttpErrorMessageTester(this.driver, await this.getElementInShadow(this, 'vl-http-error-message'));
    }

    async clickOnAction() {
        return (await this._getAction()).click();
    }

    async _getAction() {
        const element = await this.shadowRoot.findElement(By.css('[is="vl-link-button"]'));
        return new VlButtonTester(this.driver, element);
    }
}
