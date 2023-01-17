import { webComponent } from '@domg-wc/common-utilities';
import { VlSelectAction } from '../../../actions';
import { VlMapLayerStyle } from '../../layer-style/vl-map-layer-style';
import { VlMapLayerAction } from './vl-map-layer-action';

/**
 * VlMapSelectAction
 * @class
 * @classdesc The map select action component.
 *
 * @property {boolean} data-vl-cluster - Attribute indicates if the features are clustered or not.
 *
 * @extends VlMapLayerAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html|Demo}
 */
@webComponent('vl-map-select-action')
export class VlMapSelectAction extends VlMapLayerAction {
    _action;
    /**
     * Returns the style that a selected feature will be given.
     *
     * @return {Object} the style
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

    get _cluster() {
        return this.getAttribute('cluster');
    }

    mark(id) {
        if (this._action && id) {
            this._action.markFeatureWithId(id, this.layer);
        }
    }

    removeMarks() {
        if (this._action) {
            this._action.demarkAllFeatures();
        }
    }

    select(feature) {
        if (this.action && feature) {
            this.action.selectFeature(feature);
        }
    }

    onSelect(callback) {
        this.__callback = callback;
    }

    reset() {
        if (this.action) {
            this.action.clearFeatures();
        }
    }

    /**
     * Specifies if the action is allowed to be performed on a feature and/or a layer. Returns true by default.
     *
     * @param {Object} feature Openlayers feature
     * @param {Object} layer Openlayers layer
     *
     * @Return {boolean} true if the action is allowed to be performed, false if the action may not be performed for the supplied feature and/or layer
     */
    appliesTo(feature, layer) {
        return true;
    }

    _createAction(layer?) {
        const options = {
            style: this.style,
            cluster: this._cluster !== undefined,
            filter: this.appliesTo.bind(this),
        };
        return new VlSelectAction(layer, this._callback, options);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-select-action': VlMapSelectAction;
    }
}
