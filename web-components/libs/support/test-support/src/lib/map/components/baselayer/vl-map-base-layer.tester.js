import { VlElementTester } from '../../../base/vl-element.tester';

export class VlMapBaseLayerTester extends VlElementTester {
    async getType() {
        return this.getAttribute('type');
    }

    async getUrl() {
        return this.getAttribute('url');
    }

    async getLayer() {
        return this.getAttribute('layer');
    }

    async getTitle() {
        return this.getAttribute('title');
    }
}
