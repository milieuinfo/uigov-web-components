const mapImageWmsLayerUrl =
    'http://localhost:8080/iframe.html?id=map-layer-wms-layer-image-wms-layer--map-image-wms-layer-default&viewMode=story';

describe('story vl-map-image-wms-layer default', () => {
    const wmsUrl = 'https://www.dov.vlaanderen.be/geoserver/wms';

    it('should fetch WMS layer', () => {
        cy.visit(mapImageWmsLayerUrl);

        cy.intercept('GET', `${wmsUrl}*`).as('getWms');
        cy.wait('@getWms');
    });
});
