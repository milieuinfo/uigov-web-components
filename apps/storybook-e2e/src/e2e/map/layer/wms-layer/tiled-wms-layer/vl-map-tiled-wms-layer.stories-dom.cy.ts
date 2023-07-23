const mapTiledWmsLayerUrl =
    'http://localhost:8080/iframe.html?id=map-layer-wms-layer-tiled-wms-layer--map-tiled-wms-layer-default&viewMode=story';

describe('story vl-map-tiled-wms-layer default', () => {
    const wmsUrl = 'https://geo.api.vlaanderen.be/GRB/wms';

    it('should fetch WMS layer', () => {
        cy.visit(mapTiledWmsLayerUrl);

        cy.intercept('GET', `${wmsUrl}*`).as('getWms');
        cy.wait('@getWms');
    });
});
