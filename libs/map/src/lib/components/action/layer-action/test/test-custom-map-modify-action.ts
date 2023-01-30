import { webComponent } from '@domg-wc/common-utilities';
import { VlMapModifyAction } from '../vl-map-modify-action';

@webComponent('vl-custom-map-modify-action')
export class VlTestCustomMapModifyAction extends VlMapModifyAction {
    appliesTo(feature, layer) {
        return feature && feature.id.startsWith('1') && layer && layer.id.startsWith('1');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-custom-map-modify-action': VlTestCustomMapModifyAction;
    }
}
