import { VlElementTester } from '../../base/vl-element.tester';

export class VlTypographyTester extends VlElementTester {
    async getText() {
        return this.shadowRoot.getText();
    }
}
