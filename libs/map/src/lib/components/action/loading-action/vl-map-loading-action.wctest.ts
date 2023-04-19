import { expect, aTimeout, fixture, html } from '@open-wc/testing';
import '../../../vl-map';
import './vl-map-loading-action';
import { MapEvent } from 'ol';
import { VlMap } from '../../../vl-map';
const loadingActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-action></vl-map-loading-action>
        </vl-map>
    `);

describe('vl-map-loading-action', () => {
    it('when the map is loading, the loading animation is shown', async () => {
        const fixture = await loadingActionFixture();
        const vlMap: VlMap = fixture as unknown as VlMap;
        vlMap.map.dispatchEvent(new MapEvent('loadstart', vlMap.map));
        const vlMapLoadingAction = fixture.querySelector('vl-map-loading-action');
        await aTimeout(100);
        expect(vlMapLoadingAction).to.have.class('loading');
        await aTimeout(100);
        vlMap.map.dispatchEvent(new MapEvent('loadend', vlMap.map));
        await aTimeout(100);
        expect(vlMapLoadingAction).to.not.have.class('loading');
    });
});
