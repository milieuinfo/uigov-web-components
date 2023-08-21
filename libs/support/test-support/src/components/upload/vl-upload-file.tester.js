import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlUploadFileTester extends VlElementTester {
    async getName() {
        const nameSpan = await this.findElement(By.css('span[data-dz-name]'));
        return nameSpan.getText();
    }

    async getSize() {
        const sizeSpan = await this.findElement(By.css('span[data-dz-size]'));
        return sizeSpan.getText();
    }

    async remove() {
        const success = await this.isSuccess();
        const error = await this.isError();
        const processing = await this.isProcessing();
        const removeButton = await this.findElement(By.css('button.vl-upload__file__close'));
        if (processing && !(success || error)) {
            await removeButton.click();
            const alert = await this.driver.switchTo().alert();
            await alert.accept();
        } else {
            await removeButton.click();
        }
    }

    async getErrorMessage() {
        const errorMsg = await this.findElement(By.css('.dz-error-message'));
        return errorMsg.getText();
    }

    async isProcessing() {
        return this.hasClass('dz-processing');
    }

    async isSuccess() {
        return this.hasClass('dz-success');
    }

    async isError() {
        return this.hasClass('dz-error');
    }
}
