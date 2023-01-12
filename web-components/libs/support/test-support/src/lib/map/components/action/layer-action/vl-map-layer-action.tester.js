import { VlMapActionTester } from '../vl-map-action.tester.js';

export class VlMapLayerActionTester extends VlMapActionTester {
    async isReady() {
        return this.driver.wait(async () => await this.hasAttribute('active'));
    }
}
