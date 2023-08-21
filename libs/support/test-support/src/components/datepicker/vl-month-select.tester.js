import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlMonthSelectTester extends VlElementTester {
    async value() {
        const value = await this.getAttribute('value');
        const element = await this.findElement(By.css(`option[value="${value}"]`));
        return element.getText();
    }

    async select(month) {
        const options = await this.findElements(By.css(`option`));
        const option = (await this._mapVisibleText(options)).find((m) => m.visibleText === month);
        return option.webElement.click();
    }

    async _mapVisibleText(options) {
        return Promise.all(
            options.map(async (option) => {
                const textContent = await option.getAttribute('textContent');
                const visibleText = textContent.replace(/\s+/g, ' ').trim();
                return { webElement: option, visibleText: visibleText };
            })
        );
    }
}
