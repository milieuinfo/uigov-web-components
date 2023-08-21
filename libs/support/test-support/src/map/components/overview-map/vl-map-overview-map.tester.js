import { VlElementTester } from '../../../base/vl-element.tester';

export class VlMapOverviewMapTester extends VlElementTester {
    async toggleBaseLayer() {
        return this.click();
    }
}
