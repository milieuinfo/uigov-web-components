import { VlMapLayer } from '../vl-map-layer';
import './vl-map-wms-style';

/**
 * VlMapWmsLayer
 * @class
 * @classdesc Abstract klasse voor WMS Layers.
 *
 * @extends VlMapLayer
 *
 * @property {string} data-vl-url - Attribuut bepaalt de WMS url. Verplicht.
 * @property {string} data-vl-layers - Attribuut bepaalt de layers van de WMS. Verplicht.
 * @property {string} [data-vl-styles=] - Attribuut bepaalt de WMS stijlen.
 * @property {string} [data-vl-version=1.3.0] - Attribuut bepaalt de WMS versie.
 * @property {number} [data-vl-opacity=1] - Attribuut bepaalt de WMS transparantie.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wms-layer.html|Demo}
 */
export class VlMapWmsLayer extends VlMapLayer {
    constructor(layerClass, sourceClass) {
        super();
        this.__layerClass = layerClass;
        this.__sourceClass = sourceClass;
    }

    connectedCallback() {
        return customElements.whenDefined('vl-map-wms-style').then(() => {
            this._source = this.__createSource(this.__sourceClass);
            this._layer = this.__createLayer(this.__layerClass);
            return super.connectedCallback();
        });
    }

    get _url() {
        const url = this.getAttribute('data-vl-url');
        if (!url) {
            throw new Error('URL not defined');
        }
        return url;
    }

    get _layers() {
        const layers = this.getAttribute('data-vl-layers');
        if (!layers) {
            throw new Error('Layers not defined');
        }
        return layers;
    }

    get _styles() {
        return this.getAttribute('data-vl-styles') || '';
    }

    get _sldBody() {
        const wmsStyle: any = this.querySelector(':scope > vl-map-wms-style');
        if (wmsStyle) {
            return wmsStyle.sld;
        }
    }

    get _version() {
        return this.getAttribute('data-vl-version') || '1.3.0';
    }

    _createLayerConfig(source) {
        return {
            title: this._name,
            source: source,
            minResolution: this._minResolution,
            maxResolution: this._maxResolution,
            visible: this._visible,
            opacity: this._opacity,
        };
    }

    get _sourceConfig() {
        return {
            url: this._url,
            params: {
                LAYERS: this._layers,
                STYLES: this._styles,
                VERSION: this._version,
                SLD_BODY: this._sldBody,
            },
        };
    }

    __createLayer(LayerClass) {
        const layer = new LayerClass(this._createLayerConfig(this._source));
        layer.set('id', VlMapLayer._counter);
        return layer;
    }

    __createSource(SourceClass) {
        return new SourceClass(this._sourceConfig);
    }
}
