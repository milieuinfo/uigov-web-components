import { VlElementTester } from '../../base/vl-element.tester';

export class VlLinkTester extends VlElementTester {
    async isBlock() {
        return this.hasAttribute('block');
    }

    async isError() {
        return this.hasAttribute('error');
    }
}
