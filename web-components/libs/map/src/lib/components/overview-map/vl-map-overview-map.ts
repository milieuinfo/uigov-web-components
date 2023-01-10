import { BaseElementOfType, define } from '@domg-wc/common-utilities';

/**
 * VlMapOverviewMap
 * @class
 * @classdesc De kaart overview component.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-overview-map.html|Demo}
 */
export class VlMapOverviewMap extends BaseElementOfType(HTMLElement) {
    connectedCallback() {
        this._configureMap();
    }

    get _map() {
        if (this.parentNode) {
            return this.parentNode.map;
        }
    }

    _configureMap() {
        (async () => {
            while (!(this._map && this._map.overviewMapControl)) {
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
            this._map.addControl(this._map.overviewMapControl);
        })();
    }
}

define('vl-map-overview-map', VlMapOverviewMap);
