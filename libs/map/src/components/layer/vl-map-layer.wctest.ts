import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../vl-map';
import './vector-layer/vl-map-features-layer/vl-map-features-layer';
import './vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import './wms-layer/vl-map-image-wms-layer/vl-map-image-wms-layer';
import './wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer';
import './wmts-layer/vl-map-wmts-layer';

const featuresLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer
                data-vl-name="testlaag"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
                data-vl-features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null,"id":1}]}'
            >
            </vl-map-features-layer>
        </vl-map>
    `);

const imageWmsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-image-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
                data-vl-styles="style1,style2"
                data-vl-version="1.1.1"
                data-vl-opacity="0.75"
                data-vl-min-resolution="10"
                data-vl-max-resolution="1000"
                data-vl-name="adjusted"
            >
            </vl-map-image-wms-layer>
        </vl-map>
    `);

const tiledWmsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-tiled-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
                data-vl-styles="style1,style2"
                data-vl-version="1.1.1"
                data-vl-opacity="0.75"
                data-vl-min-resolution="10"
                data-vl-max-resolution="1000"
                data-vl-name="adjusted"
            >
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);

const wfsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer
                data-vl-name="foobar"
                data-vl-url="http://dummy/wfs"
                data-vl-layers="layer1,layer2"
                data-vl-min-resolution="10"
                data-vl-max-resolution="1000"
            >
            </vl-map-wfs-layer>
        </vl-map>
    `);

const wmtsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="http://dummy/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="GRB Wegenkaart"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
            >
            </vl-map-wmts-layer>
        </vl-map>
    `);

const featuresLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer></vl-map-features-layer>
            <vl-map-features-layer></vl-map-features-layer>
        </vl-map>
    `);

const imageWmsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-image-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
            ></vl-map-image-wms-layer>
            <vl-map-image-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
            ></vl-map-image-wms-layer>
        </vl-map>
    `);

const tiledWmsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-tiled-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
            ></vl-map-tiled-wms-layer>
            <vl-map-tiled-wms-layer
                data-vl-url="http://dummy/wms-adjusted"
                data-vl-layers="layer1"
            ></vl-map-tiled-wms-layer>
        </vl-map>
    `);

const wfsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer data-vl-url="http://dummy/wms-adjusted" data-vl-layers="layer1"></vl-map-wfs-layer>
            <vl-map-wfs-layer data-vl-url="http://dummy/wms-adjusted" data-vl-layers="layer1"></vl-map-wfs-layer>
        </vl-map>
    `);

const wmtsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="http://dummy/wmts"
                data-vl-layer="grb_sel"
            ></vl-map-wmts-layer>
            <vl-map-wmts-layer
                data-vl-url="http://dummy/wmts"
                data-vl-layer="grb_sel"
            ></vl-map-wmts-layer>
        </vl-map>
    `);

describe('vl-map-layer', () => {
    const sandbox = sinon.createSandbox();
    const fixtures = [
        {
            single: featuresLayerFixture,
            multiple: featuresLayersFixture,
        },
        {
            single: imageWmsLayerFixture,
            multiple: imageWmsLayersFixture,
        },
        {
            single: tiledWmsLayerFixture,
            multiple: tiledWmsLayersFixture,
        },
        {
            single: wfsLayerFixture,
            multiple: wfsLayersFixture,
        },
        {
            single: wmtsLayerFixture,
            multiple: wmtsLayersFixture,
        },
    ];
    const tags = [
        'vl-map-features-layer',
        'vl-map-image-wms-layer',
        'vl-map-tiled-wms-layer',
        'vl-map-wfs-layer',
        'vl-map-wmts-layer',
    ];
    const LAYER_SELECTOR = `[data-vl-is-layer], ${tags.join(', ')}`;

    const getLayer = (map) => map.querySelector(LAYER_SELECTOR);

    const getLayers = (map) => map.querySelectorAll(LAYER_SELECTOR);

    const range = (minInclusive, maxExclusive) =>
        Array.from({ length: maxExclusive - minInclusive }, (x, i) => i + minInclusive);

    afterEach(() => {
        sandbox.restore();
    });

    it('kan een attribuut, titel, opvragen van de kaartlaag op basis van zijn sleutel', async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.single();
                await map.ready;
                const layer = getLayer(map);
                await awaitUntil(() => layer.ready);
                assert.equal(layer.get('title'), layer.getAttribute('data-vl-name'));
                assert.equal(layer.get('title'), layer._layer.get('title'));
            })
        );
    });

    it('kan de zichtbaarheid van de kaartlaag opvragen en wijzigen', async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.single();
                await map.ready;
                const layer = getLayer(map);
                await awaitUntil(() => layer.ready);

                assert.isTrue(layer.visible);
                assert.isTrue(layer._layer.getVisible());

                layer.visible = false;
                assert.isFalse(layer.visible);
                assert.isFalse(layer._layer.getVisible());
            })
        );
    });

    it(`er kan gecontroleerd worden of de kaartlaag zichtbaar is op een bepaalde resolutie (minVisibility = , maxVisibility = )`, async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.single();
                await map.ready;
                const layer: any = getLayer(map);
                // Number.valueOf(layer.getAttribute('data-vl-max-resolution'))
                // gives this as result:
                // [Function: Number]
                // valueOf should not have any arguments... - it should be Number('value to parse to a number');
                // but then tests fail, so for the moment keeping exactly what was there before without TypeScript failing
                const minVisibility = Number(layer.getAttribute('data-vl-min-resolution'));
                const maxVisibility = Number(layer.getAttribute('data-vl-max-resolution'));
                // const minVisibility = Number.valueOf();
                // const maxVisibility = Number.valueOf();
                const visibleResolutions = range(minVisibility, maxVisibility);
                const invisibleResolutions = range(0, minVisibility).concat(range(maxVisibility, maxVisibility + 5));
                invisibleResolutions.forEach((resolution) =>
                    assert.isFalse(
                        layer.isVisibleAtResolution(resolution),
                        `zou niet zichtbaar mogen zijn op resolutie ${resolution}`
                    )
                );
                visibleResolutions.forEach((resolution) =>
                    assert.isTrue(
                        layer.isVisibleAtResolution(resolution),
                        `zou zichtbaar moeten zijn op resolutie ${resolution}`
                    )
                );
            })
        );
    });

    it('elke kaartlaag zal een id krijgen', async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.multiple();
                await map.ready;
                const layers = [...getLayers(map)];
                assert.lengthOf(layers, map.children.length);
                layers.forEach((layer, index) => assert(layer.layer.get('id'), <any>(index + 1)));
            })
        );
    }).timeout(6000);

    it('de kaartlaag zal toegevoegd worden aan de map', async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.single();
                await map.ready;
                await Promise.all([...getLayers(map)].map((layer) => awaitUntil(() => layer.ready)));
                const layerElement = getLayer(map);
                const layers = map.map.getOverlayLayers();
                assert.lengthOf(layers, 1);
                const layer = layers[0];
                assert.equal(layer, layerElement.layer);
                assert.equal(layer.get('title'), layerElement.getAttribute('name'));
                assert.equal(layer.getMinResolution(), layerElement.getAttribute('min-resolution'));
                assert.equal(layer.getMaxResolution(), layerElement.getAttribute('max-resolution'));
            })
        );
    });

    it('wanneer het hidden attribuut wijzigt zal de kaartlaag zichtbaarheid aangepast worden en de map opnieuw gerenderd worden', async () => {
        await Promise.all(
            fixtures.map(async (fixture, index) => {
                const map: any = await fixture.single();
                await map.ready;
                await Promise.all([...getLayers(map)].map((layer) => awaitUntil(() => layer.ready)));
                sandbox.spy(map, 'rerender');
                const layerElement = getLayer(map);
                assert.isTrue(layerElement.layer.getVisible());
                layerElement.setAttribute('data-vl-hidden', '');
                assert.isFalse(layerElement.layer.getVisible());
                layerElement.removeAttribute('data-vl-hidden');
                assert.isTrue(layerElement.layer.getVisible());
                assert.isTrue(map.rerender.called);
                sandbox.restore();
            })
        );
    });
});
