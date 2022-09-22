import { VlMapDeleteAction } from '../vl-map-delete-action';
import { define } from '@domg-lib/common-utilities';

export class VlTestCustomMapDeleteAction extends VlMapDeleteAction {
    appliesTo(feature, layer) {
        return feature.id.startsWith('1') && layer.id.startsWith('1');
    }
}

define('vl-custom-map-delete-action', VlTestCustomMapDeleteAction);
