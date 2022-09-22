import { awaitUntil } from '@domg-lib/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import OlPoint from 'ol/geom/Point';
import OlFeature from 'ol/Feature';
import OlGeoJSON from 'ol/format/GeoJSON';
import OlStyle from 'ol/style/Style';
import sinon from 'sinon';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';

const featuresLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer></vl-map-features-layer>
        </vl-map>
    `);

const mapFixture = async () =>
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

const mapClusterFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer
                data-vl-name="testlaag"
                data-vl-cluster="true"
                data-vl-cluster-distance="20"
                data-vl-features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null,"id":1}]}'
            >
            </vl-map-features-layer>
        </vl-map>
    `);

const mapAutoExtentFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer
                data-vl-name="testlaag"
                data-vl-features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null,"id":1}, {"type":"Feature","geometry":{"type":"Point","coordinates":[148055,197908]},"properties":null,"id":2}]}'
                data-vl-auto-extent
            >
            </vl-map-features-layer>
        </vl-map>
    `);

const mapAutoExtentMaxZoomFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer
                data-vl-name="testlaag"
                data-vl-features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null,"id":1}]}'
                data-vl-auto-extent
                data-vl-auto-extent-max-zoom="3"
            >
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-features-layer', () => {
    const sandbox = sinon.createSandbox();
    const geoJSON = new OlGeoJSON();

    afterEach(() => {
        sandbox.restore();
    });

    it('het features attribuut op de kaartlaag bevat dezelfde features als in de source', async () => {
        const mapElement = await mapFixture();
        const layerElement = mapElement.querySelector('vl-map-features-layer');

        await mapElement.ready;
        assert.isDefined(layerElement.layer);

        const layers = mapElement.map.getOverlayLayers();
        assert.lengthOf(layers, 1);

        const layer = layers[0];
        assert.equal(geoJSON.writeFeatures(layer.getSource().getFeatures()), layerElement.getAttribute('features'));
    });

    it('na het toevoegen van de kaartlaag zal de kaart zoomen naar de extent van de kaartlaag indien de auto-extent geactiveerd werd', async () => {
        let map = await mapFixture();
        assert.deepEqual(map.map.getView().getCenter(), [140860.69299028325, 190532.7165957574]);

        map = await mapAutoExtentFixture();
        await awaitUntil(() => map.map.getView().getZoom() > 3).then(async () => {
            assert.deepEqual(map.map.getView().getCenter(), [147555, 197908]);

            map = await mapAutoExtentMaxZoomFixture();
            await awaitUntil(() => map.map.getView().getZoom() === 3).then(() => {
                assert.deepEqual(map.map.getView().getCenter(), [147055, 197908]);
            });
        });
    });

    it('het aanroepen van zoomToExtent zal de kaart doen inzoomen op de bounding box', async () => {
        const map = await mapFixture();
        const layerElement = map.querySelector('vl-map-features-layer');

        await map.ready;
        const view = map.map.getView();
        assert.notDeepEqual(view.getCenter(), [147055, 197908]);

        await layerElement.zoomToExtent();
        assert.deepEqual(view.getCenter(), [147055, 197908]);
        assert.isAbove(view.getZoom(), 3);

        await layerElement.zoomToExtent(3);
        assert.deepEqual(view.getCenter(), [147055, 197908]);
        assert.equal(view.getZoom(), 3);
    });

    it('bij het toevoegen van een feature zal deze automatisch toegevoegd worden aan de laag en zal de kaart opnieuw zoomen naar de extent van de kaartlaag indien de auto-extent geactiveerd werd', async () => {
        const map = await mapFixture();
        const layerElement = map.querySelector('vl-map-features-layer');

        await map.ready;
        const layer = map.map.getOverlayLayers()[0];
        assert.lengthOf(layer.getSource().getFeatures(), 1);
        assert.equal(
            geoJSON.writeFeatures(layer.getSource().getFeatures()),
            layerElement.getAttribute('data-vl-features'),
        );
        assert.deepEqual(map.map.getView().getCenter(), [140860.69299028325, 190532.7165957574]);

        layerElement.setAttribute(
            'data-vl-features',
            '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null},{"type":"Feature","geometry":{"type":"Point","coordinates":[157055,207908]},"properties":null}]}',
        );
        layerElement.setAttribute('data-vl-auto-extent', '');
        await awaitUntil(() => {
            const layer = map.map.getOverlayLayers()[0];
            const feature = geoJSON.writeFeatures(layer.getSource().getFeatures());
            const hasCorrectFeatureLength = layer.getSource().getFeatures().length === 2;
            const hasCorrectFeature = feature === layerElement.getAttribute('data-vl-features');
            const hasCorrectView =
                map.map.getView().getCenter()[0] == 152055 && map.map.getView().getCenter()[1] == 202908;
            return hasCorrectFeatureLength && hasCorrectFeature && hasCorrectView;
        });
    });

    it('kan de boundingbox opvragen van de features op de laag', async () => {
        const map = await featuresLayerFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        assert.isUndefined(layer.boundingBox);
        layer.setAttribute(
            'features',
            '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":null},{"type":"Feature","geometry":{"type":"Point","coordinates":[157055,207908]},"properties":null}]}',
        );
        assert.deepEqual(layer.boundingBox, [147055, 197908, 157055, 207908]);
    });

    it('kan een feature verkrijgen via id', async () => {
        const map = await mapFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        assert.isDefined(layer.getFeature(1));
        assert.isUndefined(layer.getFeature(2));
    });

    it('kan een cluster verkrijgen via een feature id in de cluster', async () => {
        const map = await mapFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature2 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature3 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature1.setId(1);
        feature2.setId(2);
        feature3.setId(3);
        const cluster1 = new OlFeature({});
        const cluster2 = new OlFeature({});
        cluster1.set('features', [feature1, feature2]);
        cluster2.set('features', [feature3]);
        layer.setAttribute('data-vl-cluster', '');
        layer.layer.getSource().addFeatures([cluster1, cluster2]);
        assert.deepEqual(layer.getCluster(1), cluster1);
        assert.deepEqual(layer.getCluster(2), cluster1);
        assert.deepEqual(layer.getCluster(3), cluster2);
    });

    it('al de feature specifieke stijl kan verwijderd worden', async () => {
        const map = await featuresLayerFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        const feature1 = new OlFeature();
        const feature2 = new OlFeature();
        feature1.setStyle(new OlStyle({}));
        feature2.setStyle(new OlStyle({}));
        const features = [feature1, feature2];
        layer.setAttribute('features', geoJSON.writeFeatures(features));

        layer.removeFeaturesStyle();
        assert.isNull(layer.features[0].getStyle());
        assert.isNull(layer.features[1].getStyle());
    });

    it('kan programmatorisch features verwijderen', async () => {
        const map = await mapFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        assert.lengthOf(layer.layer.getSource().getFeatures(), 1);
        layer.clearFeatures();
        assert.lengthOf(layer.layer.getSource().getFeatures(), 0);
    });

    it('kan programmatorisch feature toevoegen', async () => {
        const map = await mapFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        assert.lengthOf(layer.layer.getSource().getFeatures(), 1);
        layer.addFeature(
            '{"type":"Feature","geometry":{"type":"Point","coordinates":[148055,197908]},"properties":null,"id":2}',
        );
        assert.lengthOf(layer.layer.getSource().getFeatures(), 2);
    });

    it('kan programmatorisch feature toevoegen aan layer met cluster', async () => {
        const map = await mapClusterFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;

        assert.lengthOf(layer.source.getSource().getFeatures(), 1);
        layer.addFeature(
            '{"type":"Feature","geometry":{"type":"Point","coordinates":[148055,197908]},"properties":null,"id":2}',
        );
        assert.lengthOf(layer.source.getSource().getFeatures(), 2);
        assert.isDefined(layer.getFeature(1));
        assert.isDefined(layer.getFeature(2));
    });

    it('kan programmatorisch features wijzigen in layer met cluster', async () => {
        const map = await mapClusterFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;

        assert.lengthOf(layer.source.getSource().getFeatures(), 1);
        layer.features = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: { type: 'Point', coordinates: [148055, 197908] },
                    properties: null,
                    id: 2,
                },
                {
                    type: 'Feature',
                    geometry: { type: 'Point', coordinates: [148055, 197908] },
                    properties: null,
                    id: 3,
                },
            ],
        };
        assert.lengthOf(layer.source.getSource().getFeatures(), 2);
        assert.isUndefined(layer.getFeature(1));
        assert.isDefined(layer.getFeature(2));
        assert.isDefined(layer.getFeature(3));
    });

    it('kan programmatorisch feature collection toevoegen', async () => {
        const map = await mapFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        assert.lengthOf(layer.layer.getSource().getFeatures(), 1);
        layer.addFeatureCollection(
            '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[148055,197908]},"properties":null,"id":2}]}',
        );
        assert.lengthOf(layer.layer.getSource().getFeatures(), 2);
    });

    it('wanneer programmatorisch features van een laag met auto zoom verwijderd worden zal deze niet zoomen omdat er geen extent van de features meer is', async () => {
        const map = await mapAutoExtentFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        await awaitUntil(() => map.map.getView().getZoom() > 3).then(async () => {
            assert.deepEqual(map.map.getView().getCenter(), [147555, 197908]);
        });
        layer.clearFeatures();
        assert.deepEqual(map.map.getView().getCenter(), [147555, 197908]);
    });

    it('wanneer programmatorisch een feature aan een laag met auto zoom toegevoegd wordt zal de map daar naartoe zoomen', async () => {
        const map = await mapAutoExtentFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        await awaitUntil(() => map.map.getView().getZoom() > 3).then(async () => {
            assert.deepEqual(map.map.getView().getCenter(), [147555, 197908]);
        });
        layer.addFeature(
            '{"type":"Feature","geometry":{"type":"Point","coordinates":[146055,197908]},"properties":null,"id":3}',
        );
        assert.deepEqual(map.map.getView().getCenter(), [147055, 197908]);
        layer.clearFeatures();
        layer.addFeature(
            '{"type":"Feature","geometry":{"type":"Point","coordinates":[146055,197908]},"properties":null,"id":3}',
        );
        assert.deepEqual(map.map.getView().getCenter(), [146055, 197908]);
    });

    it('wanneer programmatorisch features aan een laag met auto zoom toegevoegd worden zal de map daar naartoe zoomen', async () => {
        const map = await mapAutoExtentFixture();
        const layer = map.querySelector('vl-map-features-layer');
        await map.ready;
        await awaitUntil(() => map.map.getView().getZoom() > 3).then(async () => {
            assert.deepEqual(map.map.getView().getCenter(), [147555, 197908]);
        });
        layer.addFeatureCollection(
            '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[146055,197908]},"properties":null,"id":3}]}',
        );
        assert.deepEqual(map.map.getView().getCenter(), [147055, 197908]);
        layer.clearFeatures();
        layer.addFeature(
            '{"type":"Feature","geometry":{"type":"Point","coordinates":[146055,197908]},"properties":null,"id":3}',
        );
        assert.deepEqual(map.map.getView().getCenter(), [146055, 197908]);
    });
});
