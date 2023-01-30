import { VlElementTester } from '../../../base/vl-element.tester';
import { VlMapTester } from '../../vl-map.tester';
import { VlMapLayersTester } from '../layer/vl-map-layers.tester';

export class VlMapActionTester extends VlElementTester {
    async isActive() {
        return this.driver.executeScript('return arguments[0]._active', this);
    }

    async getMap() {
        const element = await this.driver.executeScript('return arguments[0]._mapElement', this);
        const map = await new VlMapTester(this.driver, element);
        await map.isReady();
        await map.scrollIntoView();
        return map;
    }

    async getLayer() {
        return await VlMapLayersTester.asLayer(this.driver, await this.parent());
    }
}
