import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-wfs-layer';
import './vl-map-features-layer';
import '../../layer-style/vl-map-layer-style';
import '../../../vl-map';
import OlStyle from 'ol/style/Style';
import OlStyleFill from 'ol/style/Fill';

const featuresLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer
                data-vl-name="testlaag"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
                data-vl-features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null,"id":1}]}'>
            </vl-map-features-layer>
            <vl-map-layer-style data-vl-color="rgba(255,0,0,1)"></vl-map-layer-style>
        </vl-map>
    `);

const wfsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer
                data-vl-name="foobar"
                data-vl-url="http://dummy/wfs"
                data-vl-layers="layer1,layer2">
            </vl-map-wfs-layer>
            <vl-map-layer-style data-vl-color="rgba(255,0,0,1)"></vl-map-layer-style>
        </vl-map>
    `);

const featuresLayerHiddenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer data-vl-hidden></vl-map-features-layer>
        </vl-map>
    `);

const wfsLayerHiddenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer data-vl-hidden></vl-map-wfs-layer>
        </vl-map>
    `);

describe('vl-map-vector-layer', () => {
    const fixtures = [
        {
            visible: featuresLayerFixture,
            hidden: featuresLayerHiddenFixture
        },
        {
            visible: wfsLayerFixture,
            hidden: wfsLayerHiddenFixture
        }
    ];
    const LAYER_SELECTOR = '[data-vl-is-layer]';

    const getLayer = (map) => {
        return map.querySelector(LAYER_SELECTOR);
    };

    it('de stijl kan op de layer gezet worden met een VlMapLayerStyle object', async () => {
        await Promise.all(fixtures.map(async (fixture, index) => {
            const map = await fixture.visible();
            await map.ready;
            const layer = getLayer(map);
            layer.style = map.querySelector('vl-map-layer-style');
            const style = layer.style()[0];
            assert.equal(style.getFill().getColor(), 'rgba(255,0,0,1)');
            assert.equal(style.getStroke().getColor(), 'rgba(2, 85, 204, 1)');
        }));
    });

    it('de stijl kan op de layer gezet worden met een OpenLayers stijl object', async () => {
        await Promise.all(fixtures.map(async (fixture, index) => {
            const map = await fixture.visible();
            await map.ready;
            const layer = getLayer(map);
            const color = map.querySelector('vl-map-layer-style').getAttribute('data-vl-color');
            layer.style = new OlStyle({fill: new OlStyleFill({color: color})});
            assert.equal(layer.style.getFill().getColor(), color);
        }));
    });

    it('de stijl kan op de layer verwijderd worden met null', async () => {
        await Promise.all(fixtures.map(async (fixture, index) => {
            const map = await fixture.visible();
            await map.ready;
            const layer = getLayer(map);
            const color = map.querySelector('vl-map-layer-style').getAttribute('data-vl-color');
            layer.style = new OlStyle({fill: new OlStyleFill({color: color})});
            layer.style = null;
            assert.isNull(layer.style);
        }));
    });

    it('de kaartlaag kan bij creatie op hidden gezet worden', async () => {
        await Promise.all(fixtures.map(async (fixture, index) => {
            const mapVisible = await fixture.visible();
            const mapHidden = await fixture.hidden();
            await mapVisible.ready;
            await mapHidden.ready;
            const layerVisible = getLayer(mapVisible);
            const layerHidden = getLayer(mapHidden);
            assert.isTrue(layerVisible.layer.getVisible());
            assert.isFalse(layerHidden.layer.getVisible());
        }));
    });

    it('er wordt een event gegooid als de stijl verandert', async () => {
        const map = await wfsLayerFixture();
        await map.ready;
        const layer = getLayer(map);
        await new Promise((resolve) => {
            layer.addEventListener('style-changed', (event) => {
                resolve();
            });
            layer.style = new OlStyle({});
        });
    });
});
