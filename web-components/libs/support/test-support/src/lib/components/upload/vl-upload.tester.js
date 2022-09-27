import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlUploadFileTester } from './vl-upload-file.tester';

export class VlUploadTester extends VlElementTester {
    async uploadFile(path) {
        const input = await this.shadowRoot.findElement(By.css('input[type="file"].dz-hidden-input'));
        return input.sendKeys(path);
    }

    async getFiles() {
        const files = await this.shadowRoot.findElements(By.css('.vl-upload__files__container .vl-upload__file'));
        return await Promise.all(files.map((file) => new VlUploadFileTester(this.driver, file)));
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }

    async isFullBodyDrop() {
        return this.hasAttribute('full-body-drop');
    }

    async getMaximumFilesize() {
        return this.getAttribute('max-size');
    }

    async getMaximumNumberOfAllowedFiles() {
        return this.getAttribute('max-files');
    }

    async getAcceptedFileTypes() {
        return this.getAttribute('accepted-files');
    }

    async isDuplicatesDisallowed() {
        return this.hasAttribute('disallow-duplicates');
    }

    async getTitle() {
        return this._getTextOrSlotText('title');
    }

    async getSubTitle() {
        return this._getTextOrSlotText('sub-title');
    }

    async _getTextOrSlotText(selector) {
        let text;
        try {
            const element = await this.shadowRoot.findElement(By.css(`#${selector}`));
            text = await element.getText();
            if (!text) {
                throw new Error('no text');
            }
        } catch (error) {
            const element = await this.shadowRoot.findElement(By.css(`#slotted-${selector}`));
            const slot = await element.findElement(By.css(`slot[name="${selector}"]`));
            const slotElements = await this.getAssignedNodes(slot);
            text = slotElements[0].getText();
        }
        return text;
    }
}
