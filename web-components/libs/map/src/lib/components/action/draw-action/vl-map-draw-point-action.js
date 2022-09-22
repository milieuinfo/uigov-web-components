import GeometryType from 'ol/geom/GeometryType';
import { define } from '@domg-lib/common-utilities';
import { VlMapDrawAction } from './vl-map-draw-action';
import { VlDrawAction } from '../../../actions';

/**
 * VlMapDrawPointAction
 * @class
 * @classdesc De kaart teken actie component.
 *
 * @extends VlMapDrawAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 */
export class VlMapDrawPointAction extends VlMapDrawAction {
    _createAction(layer) {
        return new VlDrawAction(layer, GeometryType.POINT, this._callback, this.__drawOptions);
    }
}

define('vl-map-draw-point-action', VlMapDrawPointAction);
