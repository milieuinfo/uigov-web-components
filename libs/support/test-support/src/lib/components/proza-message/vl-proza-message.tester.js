import { VlElementTester } from '../../base/vl-element.tester';
import { VlButtonTester } from '../../elements/button/vl-button.tester';
import { VlTypographyTester } from '../typography/vl-typography.tester';
import { By } from '../../util/tester.setup';

export class VlProzaMessageTester extends VlElementTester {
    async edit() {
        const pencilButton = await this.getEditButton();
        await pencilButton.click();
    }

    async getEditButton() {
        return new VlButtonTester(this.driver, await this.shadowRoot.findElement(By.css('#edit-button')));
    }

    async getRefreshButton() {
        return new VlButtonTester(this.driver, await this.shadowRoot.findElement(By.css('#refresh-button')));
    }

    async getText() {
        return (await this._getTypography()).getText();
    }

    async _getTypography() {
        const element = await this.shadowRoot.findElement(By.css('vl-typography'));
        return new VlTypographyTester(this.driver, element);
    }
}
