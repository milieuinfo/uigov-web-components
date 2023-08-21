import { VlMapLayerTester } from '../vl-map-layer.tester';

export class VlMapWfsLayerTester extends VlMapLayerTester {
    async getUrl() {
        return this.getAttribute('url');
    }

    async getLayers() {
        return this.getAttribute('layers');
    }

    static get TAG() {
        return 'vl-map-wfs-layer';
    }
}
