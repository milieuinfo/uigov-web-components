import { VlMapSelectAction } from '../vl-map-select-action';
import { define } from '@domg-wc/common-utilities';

export class VlTestCustomMapSelectAction extends VlMapSelectAction {
    appliesTo(feature, layer) {
        return feature.id.startsWith('1') && layer.id.startsWith('1');
    }
}

define('vl-custom-map-select-action', VlTestCustomMapSelectAction);
