import { webComponent } from '@domg-wc/common-utilities';
import { VlMapSelectActions } from '../select-actions/vl-map-select-actions';
import { ActionOptions, OlVectorLayerType } from '../../../../../vl-map.model';
import { VlMultiselectActions } from '../../../../../actions/select/multiselect-actions';

/**
 * VlMapMultiselectActions
 * @class
 * @classdesc Component om een multi select-actie voor overlappende features toe te voegen.
 *
 * @property {string[]} layers - Array met de namen van de te koppelen kaartlagen. Dit moet meegegeven worden als property.
 *
 * @extends VlMapSelectActions
 */
@webComponent('vl-map-multiselect-actions')
export class VlMapMultiselectActions extends VlMapSelectActions {
    _createAction(layers?: OlVectorLayerType | OlVectorLayerType[]): VlMultiselectActions {
        const options: ActionOptions = {
            style: this.style,
            cluster: this._cluster !== undefined,
            filter: this.appliesTo.bind(this),
        };

        return new VlMultiselectActions(layers as OlVectorLayerType[], this._callback, options);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-multiselect-actions': VlMapMultiselectActions;
    }
}
