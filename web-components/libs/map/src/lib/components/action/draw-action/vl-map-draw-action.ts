import { VlMapLayerAction } from '../layer-action/vl-map-layer-action';
import { VlMapVectorLayer } from '../../layer/vector-layer/vl-map-vector-layer';
import { VlCompositeVectorLayer, VlDrawAction, VlDrawLineAction } from '../../../actions';

/**
 * VlMapDrawAction
 * @class
 * @classdesc De abstracte kaart teken actie component.
 *
 * @extends VlMapLayerAction
 *
 * @property {string} [data-vl-snapping] - Attribuut wordt gebruikt om aan te geven dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.
 * @property {number} [data-vl-snapping-pixel-tolerance=10] - Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapped mag worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 */
export class VlMapDrawAction extends VlMapLayerAction {
    /**
     * Zet de functie die wordt uitgevoerd na het uitvoeren van de teken actie
     *
     * @param {Function} callback functie met volgende argumenten:
     *                            - {ol.Feature} de getekende feature
     *                            - {Function} reject callback zonder argument waarbij de feature terug wordt verwijderd
     */
    onDraw(callback) {
        this.__callback = callback;
    }

    get __drawOptions() {
        if (this.dataset.vlSnapping !== undefined) {
            if (this.__snappingLayers.length === 0) {
                return { snapping: true };
            }
            return {
                snapping: {
                    layer: this.__createSnappingLayer(),
                    pixelTolerance: this.dataset.vlSnappingPixelTolerance || 10,
                    node: false,
                    vertex: false,
                },
            };
        }
        return {};
    }

    __createSnappingLayer() {
        const snappingLayer = new VlCompositeVectorLayer(
            this.__snappingLayers.map((layer) => layer._layer),
            {},
        );
        const firstVectorLayer = this.__snappingLayers[0];
        snappingLayer.setStyle(firstVectorLayer.style);
        firstVectorLayer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, (event) => {
            snappingLayer.setStyle(event.target.style);
        });
        return snappingLayer;
    }

    get __snappingLayers(): any {
        return Array.from(this.querySelectorAll('vl-map-wfs-layer'));
    }
}
