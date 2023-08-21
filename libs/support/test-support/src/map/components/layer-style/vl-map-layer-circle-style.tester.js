import { VlMapLayerStyleTester } from './vl-map-layer-style.tester';

export class VlMapLayerCircleStyleTester extends VlMapLayerStyleTester {
    async getSize() {
        return this.getAttribute('size');
    }

    async getBorderColor() {
        return this.getAttribute('border-color');
    }

    async getBorderSize() {
        return this.getAttribute('border-size');
    }
}
