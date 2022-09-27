import { VlElementTester } from '../../base/vl-element.tester';

export class VlFormMessageTester extends VlElementTester {
    async text() {
        const textContents = await this.getText();
        const regex = new RegExp('\n', 'g');
        return textContents.replace(regex, '').trim();
    }
}
