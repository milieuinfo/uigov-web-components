import { VlMapLayerActionTester } from '../layer-action/vl-map-layer-action.tester.js';

export class VlMapDrawActionTester extends VlMapLayerActionTester {
    async draw(action) {
        await this.isReady();
        const layer = await this.getLayer();
        const numberOfFeatures = await layer.getNumberOfFeatures();
        await action();
        await this.driver.wait(async () => (await layer.getNumberOfFeatures()) == numberOfFeatures + 1);
    }
}
