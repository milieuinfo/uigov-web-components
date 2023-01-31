import {webComponent} from '@domg-wc/common-utilities';
import {VlMap} from '@domg-wc/map';
import {LitElement} from "lit";
import {MapBrowserEvent} from "ol";
import Overlay from "ol/Overlay";
import {property} from 'lit/decorators.js';
import {Coordinate} from "ol/coordinate";
import {Extent} from "ol/extent";
import {VlMapClickActionPindrop} from "./vl-map-click-action-pindrop";
import {Pixel} from "ol/pixel";

/**
 * VlMapClickAction
 * @classdesc The map click action component. Adds a marker on the map.
 * @property {function} onClick - callback die afgevuurd wordt na click op map
 */

// TODO: crs doorsturen? vb: crs=EPSG:31370 => komt uit map??
export interface ClickCallback {
    coordinate: Coordinate,
    pixel: Pixel,
    currentBoundingBox: Extent
}


//TODO: interactie met controls? (zoals current location)
//TODO: wat als geklikt wordt op zelfde locatie van een feature?
@webComponent('vl-map-click-action')
export class VlMapClickAction extends LitElement {


    /**
     * TODO: open tot discussie
     *  werken via callback (cfr select-action):
     * <vl-map-click-action onClick=(callback) => { // Doe iets met callback }
     * of via event dat wordt afgevuurd en kan opgevangen adhv bv lit decorator:
     * <vl-map-click-action @map-aangeklikt=... doe iets met event ...
     * Of we nu event of callback gaan gebruiken, payload zal een ClickCallback bevatten.
     */
    @property() onClick: (callback: ClickCallback) => {};

    connectedCallback() {

        const overlay = new Overlay({
            element: new VlMapClickActionPindrop(),
            positioning: 'bottom-center',
            autoPan: {
                animation: {
                    duration: 250,
                },
            },
        });
        this.map.map.addOverlay(overlay);
        this.map.on('singleclick', (evt: MapBrowserEvent<PointerEvent>) => {
            overlay.setPosition(evt.coordinate);

            //TODO: event dispatching gebruiken ipv dit?
            this.onClick({
                coordinate: evt.coordinate,
                pixel: evt.pixel,
                currentBoundingBox: this.map._getCurrentBoundingBox()
            });
        });


    }

    get map(): VlMap {
        return this.closest('vl-map');
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-click-action': VlMapClickAction;
    }
}
