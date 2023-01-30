import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlContentHeaderTester extends VlElementTester {
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getImage() {
        return this.shadowRoot.findElement(By.css('#picture'));
    }

    async getContextLink() {
        return this.shadowRoot.findElement(By.css('#context>a'));
    }

    async getTitleLink() {
        return this.shadowRoot.findElement(By.css('#title>a'));
    }
}
