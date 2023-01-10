import OlTileWMSSource from 'ol/source/TileWMS';
import OlTileLayer from 'ol/layer/Tile';
import { define } from '@domg-wc/common-utilities';
import { VlMapWmsLayer } from './vl-map-wms-layer';

/**
 * VlMapTiledWmsLayer
 * @class
 * @classdesc Deze kaartlaag staat toe om een WMS laag aan te maken.
 *
 * @extends VlMapWmsLayer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wms-layer.html|Demo}
 */
export class VlMapTiledWmsLayer extends VlMapWmsLayer {
    constructor() {
        super(OlTileLayer, OlTileWMSSource);
    }
}

define('vl-map-tiled-wms-layer', VlMapTiledWmsLayer);
