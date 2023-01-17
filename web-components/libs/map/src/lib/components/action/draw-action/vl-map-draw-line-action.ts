import { webComponent } from '@domg-wc/common-utilities';
import { VlDrawAction, VlDrawLineAction } from '../../../actions';
import { VlMapDrawAction } from './vl-map-draw-action';

/**
 * VlMapDrawLineAction
 * @class
 * @classdesc De kaart lijn teken actie component.
 *
 * @extends VlMapDrawAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 */
@webComponent('vl-map-draw-line-action')
export class VlMapDrawLineAction extends VlMapDrawAction {
    _createAction(layer?): VlDrawAction {
        return new VlDrawLineAction(layer, this._callback, this.__drawOptions);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-draw-line-action': VlMapDrawLineAction;
    }
}
