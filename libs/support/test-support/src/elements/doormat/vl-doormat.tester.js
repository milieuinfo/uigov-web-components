import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlDoormatTester extends VlElementTester {
    async getTitle() {
        return this._getText('[is="vl-doormat-title"]');
    }

    async getText() {
        return this._getText('[is="vl-doormat-text"]');
    }

    async hasImage() {
        try {
            await this.findElement(By.css('[is="vl-doormat-image"]'));
            return true;
        } catch (error) {
            return false;
        }
    }

    async isAlt() {
        return this.hasAttribute('data-vl-alt');
    }

    async isGraphic() {
        return this.hasAttribute('data-vl-graphic');
    }

    async _getText(selector) {
        const element = await this.findElement(By.css(selector));
        const title = await new VlElementTester(this.driver, element);
        return title.getText();
    }
}
