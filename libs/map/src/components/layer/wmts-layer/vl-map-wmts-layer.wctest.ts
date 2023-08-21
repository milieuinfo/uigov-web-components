import { assert, fixture, html } from '@open-wc/testing';
import OlWMTSSource from 'ol/source/WMTS';
import OlWMTSTileGrid from 'ol/tilegrid/WMTS';
import '../../../vl-map';
import './vl-map-wmts-layer';

const wmtsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="https://geo.api.vlaanderen.be/GRB/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="GRB Wegenkaart"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
            >
            </vl-map-wmts-layer>
        </vl-map>
    `);

const wmtsLayerWithDifferentMatrixSetFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="https://geo.api.vlaanderen.be/GRB/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="GRB Wegenkaart"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
                data-vl-matrix-set="MOCKMATRIX"
                data-vl-matrix-prefix
            >
            </vl-map-wmts-layer>
        </vl-map>
    `);

const wmtsLayerHiddenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="https://geo.api.vlaanderen.be/GRB/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="GRB Wegenkaart"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
                data-vl-hidden
            >
            </vl-map-wmts-layer>
        </vl-map>
    `);

const mapFixture = async () =>
    fixture(html`
        <vl-map></vl-map>
    `);

describe('vl-map-wmts-layer', () => {
    const LAYER_SELECTOR = '[data-vl-is-layer]';

    const getLayer = (map) => map.querySelector(LAYER_SELECTOR);

    it('de wmts source wordt correct geconfigureerd', async () => {
        const map: any = await wmtsLayerFixture();
        await map.ready;

        const layers = map.map.getOverlayLayers();
        assert.lengthOf(layers, 1);
        const layer = layers[0];

        const source = layer.getSource();
        assert.isTrue(source instanceof OlWMTSSource);

        assert.lengthOf(source.urls, 1);
        assert.equal(source.urls[0], 'https://geo.api.vlaanderen.be/GRB/wmts');
        assert.equal(source.getLayer(), 'grb_sel');
        assert.equal(source.getMatrixSet(), 'BPL72VL');
        assert.equal(source.getFormat(), 'image/png');
        assert.equal(JSON.stringify(source.getProjection()), JSON.stringify(map._projection));
        assert.equal(source.getStyle(), '');

        const tileGrid = source.getTileGrid();
        assert.isTrue(tileGrid instanceof OlWMTSTileGrid);
        assert.deepEqual(tileGrid.getOrigin(), [9928, 329072]);
        assert.deepEqual(
            tileGrid.getResolutions(),
            [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125],
        );
        assert.deepEqual(tileGrid.getMatrixIds(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });

    it('de matrix configuratie wordt gerespecteerd', async() => {
        const map: any = await wmtsLayerWithDifferentMatrixSetFixture();
        await map.ready;
        const layers = map.map.getOverlayLayers();
        assert.lengthOf(layers, 1);
        const layer = layers[0];
        const source = layer.getSource();
        assert.isTrue(source instanceof OlWMTSSource);
        assert.equal(source.getMatrixSet(), 'MOCKMATRIX');
    });

    it('de matrixset wordt geprefixed indien meegegeven' , async () => {
        const map: any = await wmtsLayerWithDifferentMatrixSetFixture();
        await map.ready;

        const layers = map.map.getOverlayLayers();
        assert.lengthOf(layers, 1);
        const layer = layers[0];

        const source = layer.getSource();
        const tileGrid = source.getTileGrid();
        assert.deepEqual(tileGrid.getMatrixIds(), [
            'MOCKMATRIX:0',
            'MOCKMATRIX:1',
            'MOCKMATRIX:2',
            'MOCKMATRIX:3',
            'MOCKMATRIX:4',
            'MOCKMATRIX:5',
            'MOCKMATRIX:6',
            'MOCKMATRIX:7',
            'MOCKMATRIX:8',
            'MOCKMATRIX:9',
            'MOCKMATRIX:10',
            'MOCKMATRIX:11',
            'MOCKMATRIX:12',
            'MOCKMATRIX:13',
            'MOCKMATRIX:14',
            'MOCKMATRIX:15'
        ]);
    });


    it('de kaartlaag zal pas angemaakt worden na constructie zodat op moment van constructie nog niet al de attributen gekend moeten zijn', async () => {
        const map: any = await mapFixture();
        const layer = document.createElement('vl-map-wmts-layer');
        layer.setAttribute('data-vl-url', 'https://geo.api.vlaanderen.be/GRB/wmts');
        layer.setAttribute('data-vl-layer', 'grb_sel');
        layer.setAttribute('data-vl-name', 'GRB Wegenkaart');
        layer.setAttribute('data-vl-min-resolution', '2');
        layer.setAttribute('data-vl-max-resolution', '4');
        assert.isUndefined(layer['source']);
        assert.isUndefined(layer['layer']);
        map.appendChild(layer);
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                assert.isDefined(layer['source']);
                assert.isDefined(layer['layer']);
                resolve();
            });
        });
    });

    it('de kaartlaag kan bij creatie op hidden gezet worden', async () => {
        const mapVisible: any = await wmtsLayerFixture();
        const mapHidden = await wmtsLayerHiddenFixture();
        await mapVisible;
        await mapHidden;
        const layerVisible = getLayer(mapVisible);
        const layerHidden = getLayer(mapHidden);
        assert.isTrue(layerVisible.layer.getVisible());
        assert.isFalse(layerHidden.layer.getVisible());
    });
});
