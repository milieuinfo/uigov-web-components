import { define } from '@domg-lib/common-utilities';
import { VlMapBaseLayer } from './vl-map-base-layer';

/**
 * VlMapBaseLayerGRB
 * @class
 * @classdesc De kaart layer component voor GRB.
 *
 * @extends VlMapBaseLayer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html|Demo}
 */
export class VlMapBaseLayerGRB extends VlMapBaseLayer {
    constructor() {
        super();
        this.url = 'https://geo.api.vlaanderen.be/GRB/wmts';
        this.layer = 'grb_bsk';
        this.title = 'GRB basis laag';
    }
}

define('vl-map-baselayer-grb', VlMapBaseLayerGRB);
