import { VlElementTester } from '../../../base/vl-element.tester';

export class VlMapCurrentLocationTester extends VlElementTester {
    async assertIsDisplayed() {
        await this.waitUntilShadowDomElementLocated(this, '.uig-map-current-location');
    }
}
