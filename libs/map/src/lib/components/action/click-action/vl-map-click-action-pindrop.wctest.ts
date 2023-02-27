import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-click-action-pindrop';
import { VlMapClickActionPindrop } from './vl-map-click-action-pindrop';

const pindropFixture = async () => fixture(html` <vl-map-click-action-pindrop></vl-map-click-action-pindrop> `);

describe('vl-map-click-action-pindrop', () => {
    it('component loads ok', async () => {
        const vlMapCLickActionPinDrop: VlMapClickActionPindrop =
            (await pindropFixture()) as unknown as VlMapClickActionPindrop;
        assert.isNotNull(vlMapCLickActionPinDrop);
    });
});
