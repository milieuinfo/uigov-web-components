import { webComponent } from '@domg-wc/common-utilities';
import { VlMapAction } from '../vl-map-action';
import { VlMapVectorLayer } from '../../layer/vector-layer/vl-map-vector-layer';
import { OlVectorLayerType } from '../../../vl-map.model';

/**
 * VlMapLayerAction
 * @class
 * @classdesc De abstracte kaart actie component die verbonden is aan een kaartlaag.
 *
 * @extends VlMapAction
 *
 * @property {boolean} data-vl-layer - Attribuut wordt gebruikt om via het naam attribuut de actie te koppelen aan een kaartlaag.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-delete-action.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html|Demo}
 */
@webComponent('vl-map-layer-action')
export class VlMapLayerAction extends VlMapAction {
    static get _observedAttributes(): string[] {
        return ['layer'];
    }

    connectedCallback(): void {
        this._layerChangedCallback();
        return super.connectedCallback();
    }

    get layer(): OlVectorLayerType {
        return this._layer;
    }

    set layer(layer: OlVectorLayerType) {
        this._layer = layer;
        this._processAction();
    }

    get _layerElement(): VlMapVectorLayer {
        return (
            this._mapElement.querySelector(`[data-vl-is-layer][data-vl-name="${this.dataset.vlLayer}"]`) ||
            this.closest('[data-vl-is-layer]')
        );
    }

    _layerChangedCallback(): void {
        if (this._layerElement) {
            this.layer = this._layerElement.layer;
        }
    }

    _processAction(layers?: OlVectorLayerType[]): void {
        this._mapElement.ready.then(() => {
            if (this._action) {
                this._mapElement.removeAction(this._action);
            }

            if (this.layer) {
                this._action = this._createAction(this.layer);
                super._processAction();
            }

            if (layers) {
                this._action = this._createAction(layers);
                super._processAction();
            }
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-layer-action': VlMapLayerAction;
    }
}
