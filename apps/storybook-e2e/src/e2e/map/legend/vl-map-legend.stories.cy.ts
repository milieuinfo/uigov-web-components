const mapLegendMultipleStylesUrl =
    'http://localhost:8080/iframe.html?id=map-legend--map-legend-features-layer-multiple-styles&viewMode=story';
const mapLegendFeaturesLayerUrl =
    'http://localhost:8080/iframe.html?id=map-legend--map-legend-features-layer&viewMode=story';
const mapLegendMultipleFeaturesLayerUrl =
    'http://localhost:8080/iframe.html?id=map-legend--map-legend-multiple-features-layers&viewMode=story';
const mapLegendWfsLayerUrl = 'http://localhost:8080/iframe.html?id=map-legend--map-legend-wfs-layer&viewMode=story';
const mapLegendWmsLayerUrl = 'http://localhost:8080/iframe.html?id=map-legend--map-legend-wms-layer&viewMode=story';
const mapLegendWmsAndWfsLayerUrl =
    'http://localhost:8080/iframe.html?id=map-legend--map-legend-wms-wfs-layer&viewMode=story';
const mapLegendLayoutVerticalUrl =
    'http://localhost:8080/iframe.html?args=&id=map-legend--map-legend-layout-vertical&viewMode=story';

describe('story vl-legend multiple styles', () => {
    it('should display story', () => {
        cy.visit(mapLegendMultipleStylesUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend features layer', () => {
    it('should display story', () => {
        cy.visit(mapLegendFeaturesLayerUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend multiple features layers', () => {
    it('should display story', () => {
        cy.visit(mapLegendMultipleFeaturesLayerUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend wfs layer', () => {
    it('should display story', () => {
        cy.visit(mapLegendWfsLayerUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend wms layer', () => {
    it('should display story', () => {
        cy.visit(mapLegendWmsLayerUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend multiple styles', () => {
    it('should display story', () => {
        cy.visit(mapLegendWmsAndWfsLayerUrl);
        cy.get('vl-map-legend').shadow();
    });
});

describe('story vl-legend layout vertical', () => {
    it('should display story', () => {
        cy.visit(mapLegendLayoutVerticalUrl);
        cy.get('vl-map-legend').shadow();
    });
});
