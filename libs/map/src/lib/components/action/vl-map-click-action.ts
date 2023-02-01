import {webComponent} from '@domg-wc/common-utilities';
import {VlMap} from '@domg-wc/map';
import {LitElement} from "lit";
import {MapBrowserEvent} from "ol";
import Overlay from "ol/Overlay";
import {customElement, property} from 'lit/decorators.js';
import {Coordinate} from "ol/coordinate";
import {Extent} from "ol/extent";
import {VlMapClickActionPindrop} from "./vl-map-click-action-pindrop";
import {Pixel} from "ol/pixel";
import {VlMapClickedEvent} from "./VlMapClickedEvent";

/**
 * VlMapClickAction
 * @classdesc The map click action component. Adds a marker on the map.
 */

//TODO: interactie met controls? (zoals current location)
@customElement('vl-map-click-action')
export class VlMapClickAction extends LitElement {


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
            this.dispatchEvent(new VlMapClickedEvent(evt.coordinate, evt.pixel, this.map._getCurrentBoundingBox()));
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
