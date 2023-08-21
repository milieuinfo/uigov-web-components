import { fixture, html } from '@open-wc/testing';
import '../../vl-map';
import '../baselayer/vl-map-base-layer';
import './vl-map-overview-map';

const mapOverviewMapFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer
                data-vl-url="https://localhost"
                data-vl-layer="layername_1"
                data-vl-title="layer title 1"
            ></vl-map-baselayer>
        </vl-map>
    `);

describe('vl-map-overview-map', () => {
    it('de overview map wordt goed geconfigureerd', async () => {
        const element: any = await mapOverviewMapFixture();
        const vlMapOverviewMapElement = element.querySelector('vl-map-overview-map');
        const bevatOverviewMap = (map) => map.getControls().getArray().includes(map.overviewMapControl);
        while (!bevatOverviewMap(vlMapOverviewMapElement._map)) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    });
});
