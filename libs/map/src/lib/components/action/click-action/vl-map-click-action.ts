import { VlMap } from '../../../vl-map';
import { LitElement } from 'lit';
import { MapBrowserEvent } from 'ol';
import Overlay from 'ol/Overlay';
import { customElement } from 'lit/decorators.js';
import { VlMapClickActionPindrop } from './vl-map-click-action-pindrop';
import { VlMapClickedEvent } from './VlMapClickedEvent';

/**
 * VlMapClickAction
 * @classdesc The map click action component. Adds a marker on the map.
 */
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
            this.dispatchEvent(
                new VlMapClickedEvent(
                    evt.coordinate,
                    this.map.map.getView().getResolution(),
                    this.map.map.getView().getProjection()
                )
            );
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
