import { VlMapLayerTester } from '../vl-map-layer.tester';

export class VlMapFeaturesLayerTester extends VlMapLayerTester {
    async getFeatures() {
        return this.driver.executeScript(`return arguments[0].features;`, this);
    }

    async getFeatureCoordinates() {
        return this.driver.executeScript(
            `return arguments[0].features.map(f => f.getGeometry().getCoordinates());`,
            this
        );
    }

    async getNumberOfFeatures() {
        return this.driver.executeScript(`return arguments[0].layer.getSource().getFeatures().length;`, this);
    }

    async getFeature(id) {
        const feature = await this.driver.executeScript(
            `return arguments[0]._geoJSON.writeFeature(arguments[0].getFeature(${id}));`,
            this
        );
        return JSON.parse(feature);
    }

    async getNumberOfFeatures() {
        return (await this.getFeatures()).length;
    }

    async getCoordinateOfInteriorPointOfFeature(id) {
        return await this.driver.executeScript(
            `return arguments[0].layer.getSource().getFeatureById(${id}).getGeometry().getInteriorPoint().getFirstCoordinate();`,
            this
        );
    }

    async isClustered() {
        return this.hasAttribute('data-vl-cluster');
    }

    async getClusterDistance() {
        return this.getAttribute('data-vl-cluster-distance');
    }

    async hasAutoExtent() {
        return this.hasAttribute('data-vl-auto-extent');
    }

    async getAutoExtentMaxZoom() {
        return this.getAttribute('data-vl-auto-extent-max-zoom');
    }

    async getCoordinateForFeature(id) {
        const feature = await this.getFeature(id);
        const { type, coordinates } = feature.geometry;
        if (type == 'Point') {
            return coordinates;
        }
        if (type == 'LineString') {
            return [
                coordinates[0][0] + (coordinates[1][0] - coordinates[0][0]) / 2,
                coordinates[0][1] + (coordinates[1][1] - coordinates[0][1]) / 2,
            ];
        }
        const interiorCoordinate = await this.getCoordinateOfInteriorPointOfFeature(id);
        return interiorCoordinate;
    }

    static get TAG() {
        return 'vl-map-features-layer';
    }
}
