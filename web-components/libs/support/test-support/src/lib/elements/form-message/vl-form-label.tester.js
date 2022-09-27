import { VlFormMessageTester } from './vl-form-message.tester';

export class VlFormLabelTester extends VlFormMessageTester {
    async isLight() {
        return this.hasAttribute('light');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isFor() {
        return this.getAttribute('for');
    }

    async text() {
        const textContents = await this.getText();
        const regex = new RegExp('\n', 'g');
        return textContents.replace(regex, '').trim();
    }
}
