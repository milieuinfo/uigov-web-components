import { VlElementTester } from '../../base/vl-element.tester';

export class VlYearInputTester extends VlElementTester {
    async value() {
        return this.getAttribute('value');
    }
}
