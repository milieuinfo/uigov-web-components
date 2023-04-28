import { assert, aTimeout, fixture, html, oneEvent } from '@open-wc/testing';
import '../../../vl-map';
import './vl-map-click-action';
import { VlMap } from '../../../vl-map';
import { VlMapClickAction } from '../../../components/action/click-action/vl-map-click-action';
import { MapBrowserEvent } from 'ol';
import Overlay from 'ol/Overlay';
import { VlMapClickedEvent } from './VlMapClickedEvent';

const clickActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action></vl-map-click-action>
        </vl-map>
    `);

describe('vl-map-click-action', () => {
    it('when the map is clicked, an event is fired', async () => {
        const fixture = await clickActionFixture();
        const clickAction: VlMapClickAction = fixture.querySelector('vl-map-click-action');
        const map: VlMap = fixture as unknown as VlMap;
        const pointerEvent = new PointerEvent('pointerdown', {
            clientX: 1,
            clientY: 1,
        });
        const listener = oneEvent(clickAction, VlMapClickedEvent.eventType);
        const evt = new MapBrowserEvent<PointerEvent>('singleclick', map.map, pointerEvent);
        map.map.dispatchEvent(evt);
        await aTimeout(100);
        const event: VlMapClickedEvent = await listener;
        await aTimeout(100);
        assert.isNotNull(event);
        assert.equal(event.type, VlMapClickedEvent.eventType);
    });

    it('when the map is clicked, there is an overlay on the map with a pindrop element at the clicked location', async () => {
        const map: VlMap = (await clickActionFixture()) as unknown as VlMap;
        const pointerEvent = new PointerEvent('pointerdown', {
            clientX: 1,
            clientY: 1,
        });
        const evt = new MapBrowserEvent<PointerEvent>('singleclick', map.map, pointerEvent);
        map.map.dispatchEvent(evt);
        await aTimeout(100);
        const overlays = map.map.getOverlays();
        assert.equal(overlays.getLength(), 1);
        const pindropOverlay: Overlay = overlays.item(0);
        const element: HTMLElement = pindropOverlay.getElement();
        assert.equal(pindropOverlay.getPosition(), evt.coordinate);
        assert.equal(element.tagName.toLowerCase(), 'vl-map-click-action-pindrop');
    });
});
