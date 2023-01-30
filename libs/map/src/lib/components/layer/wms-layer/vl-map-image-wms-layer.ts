import { webComponent } from '@domg-wc/common-utilities';
import OlImageLayer from 'ol/layer/Image';
import OlImageWMSSource from 'ol/source/ImageWMS';
import { VlMapWmsLayer } from './vl-map-wms-layer';

/**
 * VlMapImageWmsLayer
 * @class
 * @classdesc Deze kaartlaag staat toe om een WMS laag aan te maken waarbij de bevraging telkens met één afbeelding gebeurt.
 *
 * @extends VlMapWmsLayer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wms-layer.html|Demo}
 */
@webComponent('vl-map-image-wms-layer')
export class VlMapImageWmsLayer extends VlMapWmsLayer {
    constructor() {
        super(OlImageLayer, OlImageWMSSource);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-image-wms-layer': VlMapImageWmsLayer;
    }
}
