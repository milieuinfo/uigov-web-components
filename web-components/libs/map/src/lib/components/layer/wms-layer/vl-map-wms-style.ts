import { define, BaseElementOfType } from '@domg-wc/common-utilities';

/**
 * VlMapWmsStyle
 * @class
 * @classdesc Klasse voor een WMS laag te stijlen via een SLD.
 *
 * @extends vlElement
 *
 * @property {string} [data-vl-sld=] - Attribuut bepaalt de {@link http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd|Styled Layer Descriptor} body van een WMS laag. Deze XML kan gebruikt worden om de WMS server side te stijlen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wms-layer.html|Demo}
 */
export class VlMapWmsStyle extends BaseElementOfType(HTMLElement) {
    get sld() {
        return this.getAttribute('data-vl-sld');
    }
}

define('vl-map-wms-style', VlMapWmsStyle);
