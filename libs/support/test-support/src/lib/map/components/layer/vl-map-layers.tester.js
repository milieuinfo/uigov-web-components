import { VlMapFeaturesLayerTester } from './vector-layer/vl-map-features-layer.tester';
import { VlMapWfsLayerTester } from './vector-layer/vl-map-wfs-layer.tester';
import { VlMapWmtsLayerTester } from './wmts-layer/vl-map-wmts-layer.tester';
import { VlMapTiledWmsLayerTester } from './wms-layer/vl-map-tiled-wms-layer.tester';
import { VlMapImageWmsLayerTester } from './wms-layer/vl-map-image-wms-layer.tester';
import { By } from '../../../util/tester.setup';

const LAYER_TYPES = [
    VlMapFeaturesLayerTester,
    VlMapWfsLayerTester,
    VlMapWmtsLayerTester,
    VlMapTiledWmsLayerTester,
    VlMapImageWmsLayerTester,
];

export class VlMapLayersTester {
    static async getLayer(rootElement) {
        const layers = await VlMapLayersTester.getLayers(rootElement);
        return layers[0];
    }

    static async getLayersOfType(rootElement, LayerClass) {
        return await VlMapLayersTester._getLayersByCssSelector(rootElement, LayerClass.TAG);
    }

    static async getLayers(rootElement) {
        return VlMapLayersTester._getLayersByCssSelector(rootElement, '[data-vl-is-layer]');
    }

    static async _getLayersByCssSelector(rootElement, selector) {
        const layerElements = await rootElement.findElements(By.css(selector));
        return Promise.all(layerElements.map((element) => VlMapLayersTester.asLayer(rootElement.driver, element)));
    }

    static async asLayer(driver, element) {
        const LayerType = await VlMapLayersTester._getLayerType(element);
        return new LayerType(driver, element);
    }

    static async _getLayerType(element) {
        const elementTag = await element.getTagName();
        return LAYER_TYPES.find((layerType) => elementTag.toUpperCase() === layerType.TAG.toUpperCase());
    }
}
