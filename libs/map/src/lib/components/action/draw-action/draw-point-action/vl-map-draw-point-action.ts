import { webComponent } from '@domg-wc/common-utilities';
import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from '../../../../actions';
import { VlMapDrawAction } from '../vl-map-draw-action';

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
@webComponent('vl-map-draw-point-action')
export class VlMapDrawPointAction extends VlMapDrawAction {
    _createAction(layer?): any {
        return new VlDrawAction(layer, GeometryType.POINT, this._callback, this.__drawOptions);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-draw-point-action': VlMapDrawPointAction;
    }
}
