const mapLayerSwitcherDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=map-layer-switcher--map-layer-switcher-default&viewMode=story';

const mapLayerSwitcherSpecialisedUrl =
    'http://localhost:8080/iframe.html?args=&id=map-layer-switcher--map-layer-switcher-specialised-options&viewMode=story';
describe('vl-map-layer-switcher', () => {
    it('vl-map-layer-switcher default - wanneer er geen layer input child elementen aanwezig zijn, zullen deze automatisch gegenereerd worden', () => {
        cy.visit(`${mapLayerSwitcherDefaultUrl}`);

        const kaartlaagNamen = [
            'Kaartlaag 1',
            'Kaartlaag 2',
            'Kaartlaag 3',
            'WMTS kaartlaag',
            'WMS kaartlaag',
            'WFS kaartlaag',
        ];

        cy.get('vl-map')
            .find('vl-map-layer-switcher')
            .children()
            .each((checkbox: HTMLInputElement, index) => {
                cy.wrap(checkbox)
                    .shadow()
                    .find('label')
                    .find('div.vl-checkbox__label')
                    .find('span')
                    .should('have.text', kaartlaagNamen[index]);
            });
    });

    it('vl-map-layer-switcher specialised - wanneer er layer input child elementen aanwezig zijn, zullen er geen extra input elementen gegenereerd worden', () => {
        cy.visit(`${mapLayerSwitcherSpecialisedUrl}`);

        cy.get('vl-map').find('vl-map-layer-switcher').children().should('have.length', 1);
    });
});
