import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import '../../../../vl-map';
import './vl-map-tiled-wms-layer';

const tiledWmsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-tiled-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2">
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);

const tiledWmsLayerAdjustedConfigFixture = async () =>
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

describe('vl-map-tiled-wms-layer', () => {
    it('wms tiled layer kan toegevoegd worden aan een map met de correcte configuratie', async () => {
        const mapElement: any = await tiledWmsLayerFixture();
        const layerElement = mapElement.querySelector('vl-map-tiled-wms-layer');

        await mapElement.ready;
        await awaitUntil(() => layerElement.ready);
        assert.isDefined(layerElement.layer);
        const { layer } = layerElement;
        assert.equal(layer.getSource().getParams().LAYERS, 'layer1,layer2');
        assert.equal(layer.getSource().getParams().STYLES, '');
        assert.equal(layer.getSource().getParams().VERSION, '1.3.0');
        assert.equal(layer.getSource().getUrls()[0], 'http://dummy/wms');
        assert.equal(layer.getOpacity(), 1);
    });

    it('wms tiled layer kan toegevoegd worden met een aangepaste configuratie', async () => {
        const mapElement: any = await tiledWmsLayerAdjustedConfigFixture();
        const layerElement = mapElement.querySelector('vl-map-tiled-wms-layer');

        await mapElement.ready;
        await awaitUntil(() => layerElement.ready);
        assert.isDefined(layerElement.layer);
        const { layer } = layerElement;
        assert.equal(layer.getSource().getParams().LAYERS, 'layer1');
        assert.equal(layer.getSource().getParams().STYLES, 'style1,style2');
        assert.equal(layer.getSource().getParams().VERSION, '1.1.1');
        assert.equal(layer.getSource().getUrls()[0], 'http://dummy/wms-adjusted');
        assert.equal(layer.getOpacity(), 0.75);
    });
});
