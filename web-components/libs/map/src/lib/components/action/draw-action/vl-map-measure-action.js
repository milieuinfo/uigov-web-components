import { define } from '@domg-wc/common-utilities';
import { VlMapDrawAction } from './vl-map-draw-action';
import { VlMeasureAction } from '../../../actions';
import { IDENTIFIER } from '../../../vl-map.model';

export class VlMapMeasureAction extends VlMapDrawAction {
    constructor() {
        super();
        this.identifier = IDENTIFIER.MEASURE;
    }

    _createAction(layer) {
        return new VlMeasureAction(layer, this.__drawOptions);
    }
}

define('vl-map-measure-action', VlMapMeasureAction);
