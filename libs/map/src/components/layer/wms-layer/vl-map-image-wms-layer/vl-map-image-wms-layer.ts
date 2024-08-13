import { webComponent } from '@domg-wc/common-utilities';
import OlImageLayer from 'ol/layer/Image';
import OlImageWMSSource from 'ol/source/ImageWMS';
import { VlMapWmsLayer } from '../vl-map-wms-layer';

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
