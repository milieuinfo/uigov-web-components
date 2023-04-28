import OlProjection from 'ol/proj/Projection';
import { assert, fixture, html } from '@open-wc/testing';
import './vl-map-wfs-layer';
import '../../../../vl-map';

const wfsLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer data-vl-name="foobar" data-vl-url="http://dummy/wfs" data-vl-layers="layer1,layer2">
            </vl-map-wfs-layer>
        </vl-map>
    `);

const wfsLayerWithQueryParamsInUrlFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-wfs-layer
                data-vl-name="foobar"
                data-vl-url="http://dummy/wfs?foo=bar"
                data-vl-layers="layer1,layer2"
            >
            </vl-map-wfs-layer>
        </vl-map>
    `);

describe('vl-map-wfs-layer', () => {
    it('wfs layer kan toegevoegd worden aan een map met de correcte configuratie', async () => {
        const mapElement: any = await wfsLayerFixture();
        const layerElement = mapElement.querySelector('vl-map-wfs-layer');
        const projection = new OlProjection({
            code: 'EPSG:31370',
        });

        await mapElement.ready;
        assert.isNotNull(layerElement.layer);
        const { layer } = layerElement;
        assert.equal(
            layer.getSource().getUrl()([1.2, 3.4, 5.6, 7.8], 123, projection).toString(),
            'http://dummy/wfs?service=WFS&request=GetFeature&typename=layer1%2Clayer2&bbox=1.2%2C3.4%2C5.6%2C7.8&srsname=EPSG%3A31370&outputFormat=GML2&version=2.0.0'
        );
    });

    it('de query params in de geconfigureerde wfs url worden gelaten as-is indien we ze niet moeten overschrijven', async () => {
        const mapElement: any = await wfsLayerWithQueryParamsInUrlFixture();
        const layerElement = mapElement.querySelector('vl-map-wfs-layer');
        const projection = new OlProjection({
            code: 'EPSG:31370',
        });

        await mapElement.ready;
        assert.isNotNull(layerElement.layer);
        const { layer } = layerElement;
        assert.equal(
            layer.getSource().getUrl()([1.2, 3.4, 5.6, 7.8], 123, projection).toString(),
            'http://dummy/wfs?foo=bar&service=WFS&request=GetFeature&typename=layer1%2Clayer2&bbox=1.2%2C3.4%2C5.6%2C7.8&srsname=EPSG%3A31370&outputFormat=GML2&version=2.0.0'
        );
    });

    it('de kaartlaag zal pas angemaakt worden na constructie zodat op moment van constructie nog niet al de attributen gekend moeten zijn', async () => {
        const map: any = await wfsLayerWithQueryParamsInUrlFixture();
        const layer: any = document.createElement('vl-map-wfs-layer');
        layer.setAttribute('data-vl-name', 'foobar');
        layer.setAttribute('data-vl-url', 'http://dummy/wfs');
        layer.setAttribute('data-vl-layers', 'layer1,layer2');
        assert.isUndefined(layer.source);
        assert.isUndefined(layer.layer);
        map.appendChild(layer);
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                assert.isDefined(layer.source);
                assert.isDefined(layer.layer);
                resolve();
            });
        });
    });
});
