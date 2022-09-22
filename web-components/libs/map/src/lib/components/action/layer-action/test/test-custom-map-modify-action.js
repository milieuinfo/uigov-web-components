import { VlMapModifyAction } from '../vl-map-modify-action';
import { define } from '@domg-lib/common-utilities';

export class VlTestCustomMapModifyAction extends VlMapModifyAction {
    appliesTo(feature, layer) {
        return feature.id.startsWith('1') && layer.id.startsWith('1');
    }
}

define('vl-custom-map-modify-action', VlTestCustomMapModifyAction);
