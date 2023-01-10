import { define } from '@domg-wc/common-utilities';
import { VlDeleteAction } from '../../../actions';
import { VlMapLayerAction } from './vl-map-layer-action';
import { VlMapLayerStyle } from '../../layer-style/vl-map-layer-style';

/**
 * VlMapDeleteAction
 * @class
 * @classdesc The map delete action component.
 *
 * @extends VlMapLayerAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-delete-action.html|Demo}
 */
export class VlMapDeleteAction extends VlMapLayerAction {
    /**
     * Returns the style that a selected feature will be given.
     *
     * @return {Object} de stijl
     */
    get style() {
        return this._style;
    }

    /**
     * Configures the style that a selected feature will be given.
     *
     * @param {VlMapLayerStyle|Object} style - the style: a VlMapLayerStyle or an OpenLayers Style
     */
    set style(style) {
        if (style instanceof VlMapLayerStyle) {
            this._style = style.style;
        } else {
            this._style = style;
        }
        this._processAction();
    }

    /**
     * Configure the function that will be called after processing an action.
     * For each selected feature, the resolve callback will be used to delete the feature or the reject callback if the feature does not need to be deleted.
     *
     * @param {Function} callback function with the following arguments:
     *                            - {[ol.Feature]} the features that are requested to be removed
     *                            - {Function} resolve callback with the to be removed ol.Feature as argument
     *                            - {Function} reject callback without argument, to remove the highlighted feature(s)
     */
    onDelete(callback) {
        this.__callback = callback;
    }

    /**
     * Specifies if the action is allowed to be performed on a feature and/or a layer. Returns true by default.
     *
     * @param {Object} feature Openlayers feature
     * @param {Object} layer Openlayers layer
     *
     * @Return {boolean} true if the action is allowed to be performed, false if the action may not be performed for the supplied feature and/or layer
     */
    appliesTo(feature, layer): any {
        return true;
    }

    get _callback() {
        return (features, resolve, reject) => {
            if (this.__callback) {
                this.__callback(features, resolve, reject);
            } else {
                features.forEach((feature) => resolve(feature));
            }
        };
    }

    _createAction(layer?) {
        const options = {
            style: this._style,
            filter: this.appliesTo.bind(this),
        };
        return new VlDeleteAction(layer, this._callback, options);
    }
}

define('vl-map-delete-action', VlMapDeleteAction);
