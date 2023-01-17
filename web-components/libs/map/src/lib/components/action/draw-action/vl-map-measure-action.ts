import { webComponent } from '@domg-wc/common-utilities';
import { VlMeasureAction } from '../../../actions';
import { IDENTIFIER } from '../../../vl-map.model';
import { VlMapDrawAction } from './vl-map-draw-action';

@webComponent('vl-map-measure-action')
export class VlMapMeasureAction extends VlMapDrawAction {
    constructor() {
        super();
        this.identifier = IDENTIFIER.MEASURE;
    }

    _createAction(layer) {
        return new VlMeasureAction(layer, this.__drawOptions);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-measure-action': VlMapMeasureAction;
    }
}
