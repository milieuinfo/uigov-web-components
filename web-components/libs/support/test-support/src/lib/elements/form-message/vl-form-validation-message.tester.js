import { VlFormMessageTester } from './vl-form-message.tester';

export class VlFormValidationMessageTester extends VlFormMessageTester {
    async isError() {
        return this.hasClass('vl-form__error');
    }

    async isSuccess() {
        return this.hasClass('vl-form__success');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async text() {
        const textContents = await this.getText();
        const regex = new RegExp('\n', 'g');
        return textContents.replace(regex, '').trim();
    }
}
