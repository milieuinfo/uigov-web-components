import OlWMTSSource from 'ol/source/WMTS';
import OlWMTSTileGrid from 'ol/tilegrid/WMTS';
import OlVectorSource from 'ol/source/Vector';
import { assert, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import './vl-map-base-layer';

const baselayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer data-vl-url="https://localhost" data-vl-layer="layername_1"  data-vl-title="layer title 1"></vl-map-baselayer>
        </vl-map>
    `);

const baselayerWmtsFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer data-vl-url="https://localhost/wmts" data-vl-layer="layername_2" data-vl-type='wmts' data-vl-title="layer title 2"></vl-map-baselayer>
        </vl-map>
    `);

const baselayerWfsFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-baselayer data-vl-url="https://localhost/wfs" data-vl-layer="layername_3" data-vl-type='wfs' data-vl-title="layer title 3"></vl-map-baselayer>
        </vl-map>
    `);

describe('vl-map-baselayer', () => {
    const assertLayerProperties = (element, url, typeLayer, layerName, title) => {
        assert.equal(element.url, url);
        assert.equal(element.type, typeLayer);
        assert.equal(element.layer, layerName);
        assert.equal(element.title, title);
    };

    it('de basiskaartlaag wordt goed geconfigureerd wanneer de type-layer niet gezet is', async () => {
        const element = await baselayerFixture();
        const vlMapBaseLayerElement = element.querySelector('vl-map-baselayer');

        assertLayerProperties(vlMapBaseLayerElement, 'https://localhost', 'wmts', 'layername_1', 'layer title 1');
    });

    it('de basiskaartlaag wordt goed geconfigureerd wanneer de type-layer van het type wmts is', async () => {
        const element = await baselayerWmtsFixture();
        const vlMapBaseLayerElement = element.querySelector('vl-map-baselayer');

        assertLayerProperties(vlMapBaseLayerElement, 'https://localhost/wmts', 'wmts', 'layername_2', 'layer title 2');
    });

    it('de basiskaartlaag wordt goed geconfigureerd wanneer de type-layer van het type wfs is', async () => {
        const element = await baselayerWfsFixture();
        const vlMapBaseLayerElement = element.querySelector('vl-map-baselayer');

        assertLayerProperties(vlMapBaseLayerElement, 'https://localhost/wfs', 'wfs', 'layername_3', 'layer title 3');
    });

    it('wanneer een wmts source wordt aangemaakt wordt een WMTS source teruggegeven', async () => {
        const element = await baselayerWmtsFixture();
        const vlMapBaseLayerElement = element.querySelector('vl-map-baselayer');

        const source = vlMapBaseLayerElement._createWMTSSource();
        assert.isTrue(source instanceof OlWMTSSource);

        assert.lengthOf(source.urls, 1);
        assert.equal(source.urls[0], 'https://localhost/wmts');
        assert.equal(source.getLayer(), 'layername_2');
        assert.equal(source.getMatrixSet(), 'BPL72VL');
        assert.equal(source.getFormat(), 'image/png');
        assert.equal(JSON.stringify(source.getProjection()), JSON.stringify(vlMapBaseLayerElement._projection));
        assert.equal(source.getStyle(), '');

        const tileGrid = source.getTileGrid();
        assert.isTrue(tileGrid instanceof OlWMTSTileGrid);
        assert.deepEqual(tileGrid.getOrigin(), [9928, 329072]);
        assert.deepEqual(tileGrid.getResolutions(), [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125]);
        assert.deepEqual(tileGrid.getMatrixIds(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });

    it('wanneer een WFS source wordt aangemaakt wordt een Vector source teruggegeven', async () => {
        const element = await baselayerWfsFixture();
        const vlMapBaseLayerElement = element.querySelector('vl-map-baselayer');
        const source = vlMapBaseLayerElement._createVectorSource();
        assert.isTrue(source instanceof OlVectorSource);
    });

    it('wanneer een WFS source wordt aangemaakt zal het formaat correct gedefinieerd worden', async () => {
        const element = await baselayerWfsFixture();
        assert.equal(element.map.baseLayers[0].getSource().getFormat().dataProjection.getCode(), 'EPSG:31370');
    });

    it('een WMTS source wordt maar 1x aangemaakt', async () => {
        const element = await baselayerWmtsFixture();
        assert.lengthOf(element.map.baseLayers, 1);
    });

    it('een WFS source wordt maar 1x aangemaakt', async () => {
        const element = await baselayerWfsFixture();
        assert.lengthOf(element.map.baseLayers, 1);
    });
});
