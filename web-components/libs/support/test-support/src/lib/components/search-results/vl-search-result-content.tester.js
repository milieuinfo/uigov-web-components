import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlSearchResultContentTester extends VlElementTester {
    async getDescription(number) {
        return this._getElementText('dt', number);
    }

    async getValue(number) {
        return this._getElementText('dd', number);
    }

    async _getElementText(selector, number) {
        const element = await this.findElements(By.css(selector));
        const vlElement = await new VlElementTester(this.driver, element[--number]);
        return vlElement.getText();
    }
}
