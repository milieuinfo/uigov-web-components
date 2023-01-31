import {assert, aTimeout, fixture, html} from '@open-wc/testing';
// TODO: zitten imports goed?
import '../../vl-map';
import './vl-map-click-action';
import {VlMap} from "@domg-wc/map";
import {MapBrowserEvent} from "ol";
import Overlay from "ol/Overlay";

const clickActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action .onClick="${(click) => {}}"></vl-map-click-action>
        </vl-map>
    `);

describe('vl-map-click-action', () => {


    //TODO: event?
    it('when the map is clicked, a callback is fired', async () => {
        // assert.isTrue(VlMapSelectAction.isVlMapAction());
    });

    it('when the map is clicked, there is an overlay on the map with a pindrop element at the clicked location', async () => {
        const map: VlMap = await clickActionFixture() as unknown as VlMap;
        let pointerEvent = new PointerEvent("pointerdown", {
            clientX: 1,
            clientY: 1
        });
        let evt = new MapBrowserEvent<PointerEvent>('singleclick', map.map, pointerEvent);
        map.map.dispatchEvent(evt);
        await aTimeout(100);
        await aTimeout(100);

        let overlays = map.map.getOverlays();

        assert.isTrue(overlays.getLength() == 1);
        let pindropOverlay: Overlay = overlays.item(0);
        let element: HTMLElement = pindropOverlay.getElement();
        assert.equal(pindropOverlay.getPosition(), evt.coordinate);
        assert.equal(element.tagName.toLowerCase(), 'vl-map-click-action-pindrop');

    });
});
