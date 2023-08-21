import { expect, aTimeout, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import './vl-map-loading-indicator';
import { MapEvent } from 'ol';
import { VlMap } from '../../vl-map';
const loadingIndicatorFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);

describe('vl-map-loading-indicator', () => {
    it('when the map is loading, the loading animation is shown', async () => {
        const fixture = await loadingIndicatorFixture();
        const vlMap: VlMap = fixture as unknown as VlMap;
        vlMap.map.dispatchEvent(new MapEvent('loadstart', vlMap.map));
        const vlMapLoadingIndicator = fixture.querySelector('vl-map-loading-indicator');
        await aTimeout(100);
        expect(vlMapLoadingIndicator).to.have.class('loading');
        await aTimeout(100);
        vlMap.map.dispatchEvent(new MapEvent('loadend', vlMap.map));
        await aTimeout(100);
        expect(vlMapLoadingIndicator).to.not.have.class('loading');
    });
});
