const mapCurrentLocation =
    'http://localhost:8080/iframe.html?args=&id=map-current-location--current-location-default&viewMode=story';

describe('story map-current-location - default', () => {
    before(() => cy.visit(`${mapCurrentLocation}`));

    it('should have a map', () => {
        cy.get('vl-map#map').shadow().find('div#map');
    });

    it('should have a current location control', () => {
        cy.get('vl-map#map').find('vl-map-current-location');
    });

    it('should be able to zoom in', () => {
        cy.get('vl-map#map').shadow().find('button.ol-zoom-in').click();
    });

    it('should have a current location that is visible & clickable', () => {
        cy.get('vl-map#map').find('vl-map-current-location').shadow().find('button').click();
    });
});
