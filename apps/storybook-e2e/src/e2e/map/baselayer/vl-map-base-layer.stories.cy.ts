const baseLayerDefaultUrl = 'http://localhost:8080/iframe.html?args=&id=map-baselayer--baselayer-grb-default';
const baseLayerWithBackgroundUrl =
    'http://localhost:8080/iframe.html?id=map-baselayer--baselayer-grb-with-background-layer&viewMode=story';

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
describe('story vl-map-base-layer - with background', () => {
    it('should have 2 baselayers', () => {
        cy.visit(baseLayerWithBackgroundUrl);

        cy.get('vl-map')
            .shadow()
            .find('div#map')
            .find('div.ol-unselectable.ol-layers')
            .find('div.ol-layer')
            .should('have.length.greaterThan', 2);
    });
});
