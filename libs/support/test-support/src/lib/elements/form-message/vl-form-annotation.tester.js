import { VlFormMessageTester } from './vl-form-message.tester';

export class VlFormAnnotationTester extends VlFormMessageTester {
    async isBlock() {
        return this.hasAttribute('block');
    }
}
