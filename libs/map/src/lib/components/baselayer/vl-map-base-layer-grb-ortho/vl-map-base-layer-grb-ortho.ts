import { webComponent } from '@domg-wc/common-utilities';
import { VlMapBaseLayer } from '../vl-map-base-layer';

/**
 * VlMapBaseLayerGRBOrtho
 * @class
 * @classdesc De kaart basis laag component voor GRB ortho.
 *
 * @extends VlMapBaseLayer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html|Demo}
 */
@webComponent('vl-map-baselayer-grb-ortho')
export class VlMapBaseLayerGRBOrtho extends VlMapBaseLayer {
    constructor() {
        super();
        this.url = 'https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts';
        this.layer = 'omwrgbmrvl';
        this.title = 'GRB ortho laag';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-baselayer-grb-ortho': VlMapBaseLayerGRBOrtho;
    }
}
