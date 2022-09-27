import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlCodePreviewTester extends VlElementTester {
    async getText() {
        const code = await this._getCodeElement();
        return code.getText();
    }

    async _getCodeElement() {
        const element = await this.shadowRoot.findElement(By.css('code'));
        return new VlElementTester(this.driver, element);
    }
}
