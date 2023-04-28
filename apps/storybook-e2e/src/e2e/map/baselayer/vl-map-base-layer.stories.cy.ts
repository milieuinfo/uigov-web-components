const baseLayerDefaultUrl = 'http://localhost:8080/iframe.html?id=map-baselayer--map-baselayer-default&viewMode=story';

describe('story vl-map-base-layer - default', () => {
    it('should have 1 baselayer', () => {
        cy.visit(baseLayerDefaultUrl);

        cy.get('vl-map')
            .shadow()
            .find('div#map')
            .find('div.ol-unselectable.ol-layers')
            .find('div.ol-layer')
            .should('have.length', 1);
    });
});
