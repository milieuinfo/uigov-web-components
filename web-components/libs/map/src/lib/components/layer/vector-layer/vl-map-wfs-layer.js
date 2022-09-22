import OlVectorSource from 'ol/source/Vector';
import * as OlLoadingstrategy from 'ol/loadingstrategy';
import OlGML2 from 'ol/format/GML2';
import { define } from '@domg-lib/common-utilities';
import { VlMapVectorLayer } from './vl-map-vector-layer';

/**
 * VlMapWfsLayer
 * @class
 * @classdesc Deze kaartlaag staat toe om een WFS laag aan te maken.
 *
 * @extends VlMapVectorLayer
 *
 * @property {string} data-vl-url - Attribuut bepaalt de WFS url. Verplicht.
 * @property {string} data-vl-layers - Attribuut bepaalt de layers van de WFS. Verplicht.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wfs-layer.html|Demo}
 */
export class VlMapWfsLayer extends VlMapVectorLayer {
    connectedCallback() {
        super.connectedCallback();
        this._source = this.__createSource();
        this._layer = this._createLayer();
    }

    get _url() {
        const url = this.getAttribute('url');
        if (!url) {
            throw new Error('URL not defined');
        }
        return new URL(url);
    }

    get _layers() {
        const layers = this.getAttribute('layers');
        if (!layers) {
            throw new Error('Layers not defined');
        }
        return layers;
    }

    __createSource() {
        return new OlVectorSource({
            format: this.__sourceFormat,
            strategy: this.__loadingStrategy,
            url: this.__getWfsUrl.bind(this),
        });
    }

    __getWfsUrl(extent, resolution, projection) {
        const url = this._url;
        const { searchParams } = url;
        searchParams.set('service', 'WFS');
        searchParams.set('request', 'GetFeature');
        searchParams.set('typename', this._layers);
        searchParams.set('bbox', extent.join(','));
        searchParams.set('srsname', projection.getCode());
        searchParams.set('outputFormat', this.__wfsOutputFormat);
        searchParams.set('version', this.__wfsVersion);
        return url;
    }

    get __loadingStrategy() {
        return OlLoadingstrategy.bbox;
    }

    get __sourceFormat() {
        return new OlGML2();
    }

    get __wfsOutputFormat() {
        return 'GML2';
    }

    get __wfsVersion() {
        return '2.0.0';
    }
}

define('vl-map-wfs-layer', VlMapWfsLayer);
