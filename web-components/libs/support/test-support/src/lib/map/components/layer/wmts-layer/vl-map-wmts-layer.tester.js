import { VlMapLayerTester } from '../vl-map-layer.tester';

export class VlMapWmtsLayerTester extends VlMapLayerTester {
    async getUrl() {
        return this.getAttribute('url');
    }

    async getLayer() {
        return this.getAttribute('layer');
    }

    static get TAG() {
        return 'vl-map-wmts-layer';
    }
}
