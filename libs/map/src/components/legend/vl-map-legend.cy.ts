import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlMapLegend } from './vl-map-legend';
import { VlMap } from '../../vl-map';
import { VlMapWfsLayer } from '../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import { VlMapBaseLayerGRBGray } from '../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import { VlMapLayerCircleStyle } from '../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import { VlMapFeaturesLayer } from '../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import { LEGEND_PLACEMENT } from './vl-map-legend';

registerWebComponents([
    VlMapLegend,
    VlMap,
    VlMapWfsLayer,
    VlMapBaseLayerGRBGray,
    VlMapLayerCircleStyle,
    VlMapFeaturesLayer,
]);

describe('component vl-map-legend - features layer - multiple styles', () => {
    beforeEach(() => {
        cy.mount(html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer
                    data-vl-name="Shapes"
                    features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"styleId":"style-1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"styleId":"style-2"}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},"properties":{"styleId":"style-3"}}]}'
                >
                    <vl-map-layer-circle-style
                        id="style-1"
                        data-vl-name="Openbaar onderzoek"
                        data-vl-color="#ffe615"
                        data-vl-size="5"
                        data-vl-border-color="#000"
                        data-vl-border-size="1"
                    ></vl-map-layer-circle-style>
                    <vl-map-layer-circle-style
                        id="style-2"
                        data-vl-name="Beslissing"
                        data-vl-color="red"
                        data-vl-size="5"
                        data-vl-border-color="#000"
                        data-vl-border-size="1"
                    ></vl-map-layer-circle-style>
                    <vl-map-layer-style
                        id="style-3"
                        data-vl-name="Wateroppervlaktes"
                        data-vl-color="rgba(255,0,0,0.5)"
                        data-vl-border-color="rgba(255,255,100,1)"
                        data-vl-border-size="2"
                        data-vl-text-feature-attribute-name="label"
                        data-vl-text-background-color="rgba(0,0,255,0.2)"
                        data-vl-text-border-color="rgba(0,255,0,1)"
                        data-vl-text-border-size="3"
                        data-vl-text-color="rgba(255,0,0,1)"
                        data-vl-text-offset-x="10"
                        data-vl-text-offset-y="-10"
                        data-vl-text-size="13px"
                    ></vl-map-layer-style>
                </vl-map-features-layer>
                <vl-map-legend bottom="10px" right=${'12px'}> </vl-map-legend>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map-legend');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-legend');
    });

    it('should contain a title', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div > span.uig-map-legend-text.uig-map-legend-title')
            .contains('Legende');
    });

    it('should contain the correct style items with an icon and name', () => {
        const expectedTexts = ['Openbaar onderzoek', 'Beslissing', 'Wateroppervlaktes'];

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > div.uig-map-legend-icon')
            .its('length')
            .should('eq', 3);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > span.uig-map-legend-text')
            .each((divElement, index) => {
                cy.wrap(divElement).should('have.text', expectedTexts[index]);
            });
    });

    it('should set the correct position with top, bottom, left, right attributes', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'right', '12px')
            .should('have.css', 'bottom', '10px');

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'bottom', '10px')
            .should('have.css', 'right', '12px');

        cy.get('vl-map-legend').invoke('attr', 'right', '10px');
        cy.get('vl-map-legend').invoke('attr', 'top', '20px');
        cy.get('vl-map-legend').invoke('attr', 'left', '30px');
        cy.get('vl-map-legend').invoke('attr', 'bottom', '40px');

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'right', '10px')
            .should('have.css', 'top', '20px')
            .should('have.css', 'left', '30px')
            .should('have.css', 'bottom', '40px');
    });

    it('should set the correct position with the placement attribute', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'right', '12px')
            .should('have.css', 'bottom', '10px');

        cy.get('vl-map-legend').invoke('removeAttr', 'right');
        cy.get('vl-map-legend').invoke('removeAttr', 'bottom');

        cy.get('vl-map-legend').invoke('attr', 'data-vl-placement', LEGEND_PLACEMENT.BOTTOM_LEFT);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'left', '8px')
            .should('have.css', 'bottom', '40px');

        cy.get('vl-map-legend').invoke('attr', 'data-vl-placement', LEGEND_PLACEMENT.BOTTOM_RIGHT);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'right', '58px')
            .should('have.css', 'bottom', '10px');

        cy.get('vl-map-legend').invoke('attr', 'data-vl-placement', LEGEND_PLACEMENT.TOP_LEFT);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'left', '10px')
            .should('have.css', 'top', '10px');

        cy.get('vl-map-legend').invoke('attr', 'data-vl-placement', LEGEND_PLACEMENT.TOP_RIGHT);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend')
            .should('have.css', 'top', '10px')
            .should('have.css', 'right', '10px');
    });
});

describe('component vl-map-legend - features layer - multiple styles', () => {
    beforeEach(() => {
        cy.mount(html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer
                    data-vl-name="Openbare onderzoeken"
                    features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[147055,197908]},"properties":{"featureCharacter":"O","zIndex":"1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147075,197908]},"properties":{"featureCharacter":"O","zIndex":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147095,197908]},"properties":{"featureCharacter":"O","zIndex":"3"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147105,197908]},"properties":{"featureCharacter":"O","zIndex":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147106,197908]},"properties":{"featureCharacter":"O","zIndex":"5"}}]}'
                >
                    <vl-map-layer-circle-style
                        data-vl-color="#ffe615"
                        data-vl-size="10"
                        data-vl-border-color="#000"
                        data-vl-border-size="1"
                        data-vl-text-feature-attribute-name="featureCharacter"
                        data-vl-text-size="bold 14px"
                    ></vl-map-layer-circle-style>
                </vl-map-features-layer>
                <vl-map-features-layer
                    data-vl-name="Beslissingen"
                    features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[141000,200908]},"properties":{"featureCharacter":"B","zIndex":"5"}}]}'
                >
                    <vl-map-layer-circle-style
                        data-vl-color="red"
                        data-vl-size="10"
                        data-vl-border-color="#000"
                        data-vl-text-feature-attribute-name="featureCharacter"
                        data-vl-border-size="1"
                        data-vl-text-size="bold 14px"
                    ></vl-map-layer-circle-style>
                </vl-map-features-layer>
                <vl-map-features-layer
                    data-vl-name="Wateroppervlaktes"
                    features='{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[153055,203908]},"properties":{"featureCharacter":"W","zIndex":"5"}}]}'
                >
                    <vl-map-layer-circle-style
                        data-vl-color="green"
                        data-vl-size="10"
                        data-vl-border-color="#000"
                        data-vl-text-feature-attribute-name="featureCharacter"
                        data-vl-border-size="1"
                        data-vl-text-size="bold 14px"
                    ></vl-map-layer-circle-style>
                </vl-map-features-layer>
                <vl-map-legend bottom="10px" right=${'12px'}> </vl-map-legend>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map-legend');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-legend');
    });

    it('should contain a title', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div > span.uig-map-legend-text.uig-map-legend-title')
            .contains('Legende');
    });

    it('should contain the correct style items with an icon and name', () => {
        const expectedTexts = ['Openbare onderzoeken', 'Beslissingen', 'Wateroppervlaktes'];

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > div.uig-map-legend-icon')
            .its('length')
            .should('eq', 3);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > span.uig-map-legend-text')
            .each((divElement, index) => {
                cy.wrap(divElement).should('have.text', expectedTexts[index]);
            });
    });
});

describe('component vl-map-legend - wfs layer', () => {
    beforeEach(() => {
        cy.mount(html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    data-vl-name="Oppervlaktewaterlichamen"
                    data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                    data-vl-layers="owl_l"
                    data-vl-max-resolution="8"
                >
                    <vl-map-layer-circle-style
                        data-vl-color="#ffe615"
                        data-vl-size="5"
                        data-vl-border-color="#000"
                        data-vl-border-size="1"
                    ></vl-map-layer-circle-style>
                </vl-map-wfs-layer>
                <vl-map-legend bottom="10px" right=${'12px'}> </vl-map-legend>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map-legend');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-legend');
    });

    it('should contain a title', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div > span.uig-map-legend-text.uig-map-legend-title')
            .contains('Legende');
    });

    it('should contain the correct style item with an icon and name', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > div.uig-map-legend-icon')
            .its('length')
            .should('eq', 1);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > span.uig-map-legend-text')
            .contains('Oppervlaktewaterlichamen');
    });
});

describe('component vl-map-legend - wfs and wms layers', () => {
    beforeEach(() => {
        cy.mount(html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-tiled-wms-layer
                    data-vl-layers="grondwater:beschermingszones_2014"
                    data-vl-name="Beschermingszones"
                    data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
                ></vl-map-tiled-wms-layer>
                <vl-map-wfs-layer
                    data-vl-name="Oppervlaktewaterlichamen"
                    data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                    data-vl-layers="owl_l"
                    data-vl-max-resolution="8"
                >
                    <vl-map-layer-circle-style
                        data-vl-color="#ffe615"
                        data-vl-size="5"
                        data-vl-border-color="#000"
                        data-vl-border-size="1"
                    ></vl-map-layer-circle-style>
                </vl-map-wfs-layer>
                <vl-map-legend bottom="10px" right=${'12px'}> </vl-map-legend>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map-legend');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-legend');
    });

    it('should contain a title', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div > span.uig-map-legend-text.uig-map-legend-title')
            .contains('Legende');
    });

    it('should contain the correct number of style items', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item')
            .its('length')
            .should('eq', 2);
    });

    it('should contain the correct style items with an icon and name for the wfs layer', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > div.uig-map-legend-icon')
            .its('length')
            .should('eq', 1);

        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item > span.uig-map-legend-text')
            .contains('Oppervlaktewaterlichamen');
    });

    it('should contain the style image for the wms layer', () => {
        cy.get('vl-map-legend')
            .shadow()
            .find('div.uig-map-legend > div.uig-map-legend-item.uig-map-legend-image > img')
            .should('have.attr', 'class', 'uig-map-legend-icon');
    });
});
