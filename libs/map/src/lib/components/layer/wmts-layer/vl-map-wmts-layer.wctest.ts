import { assert, fixture, html } from '@open-wc/testing';
import OlWMTSSource from 'ol/source/WMTS';
import OlWMTSTileGrid from 'ol/tilegrid/WMTS';
import '../../../vl-map';
import './vl-map-wmts-layer';

const wmtsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="GRB Wegenkaart"
                data-vl-min-resolution="2"
                data-vl-max-resolution="4"
            >
            </vl-map-wmts-layer>
        </vl-map>
    `);

const wmtsLayerHiddenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wmts-layer
                data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
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
        assert.equal(source.urls[0], 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts');
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
        assert.deepEqual(tileGrid.getMatrixIds(), [
            'BPL72VL:0',
            'BPL72VL:1',
            'BPL72VL:2',
            'BPL72VL:3',
            'BPL72VL:4',
            'BPL72VL:5',
            'BPL72VL:6',
            'BPL72VL:7',
            'BPL72VL:8',
            'BPL72VL:9',
            'BPL72VL:10',
            'BPL72VL:11',
            'BPL72VL:12',
            'BPL72VL:13',
            'BPL72VL:14',
            'BPL72VL:15'
        ]);
    });

    it('de kaartlaag zal pas angemaakt worden na constructie zodat op moment van constructie nog niet al de attributen gekend moeten zijn', async () => {
        const map: any = await mapFixture();
        const layer = document.createElement('vl-map-wmts-layer');
        layer.setAttribute('data-vl-url', 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts');
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
