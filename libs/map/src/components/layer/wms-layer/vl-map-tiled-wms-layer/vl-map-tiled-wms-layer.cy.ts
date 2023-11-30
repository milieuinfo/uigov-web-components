import { html } from 'lit';
import { VlMap } from '../../../../vl-map';
import { VlMapTiledWmsLayer } from './vl-map-tiled-wms-layer';
import { registerWebComponents } from '@domg-wc/common-utilities';

registerWebComponents([VlMap, VlMapTiledWmsLayer]);

describe('component vl-map-tiled-wms - features layer', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://geo.api.vlaanderen.be/GRB/wms*').as('wmsRequest');

        cy.mount(html`
            <vl-map>
                <vl-map-tiled-wms-layer
                    data-vl-layers="GEM_GRENS"
                    data-vl-name="Gemeentegrenzen"
                    data-vl-url="https://geo.api.vlaanderen.be/GRB/wms"
                ></vl-map-tiled-wms-layer>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map').shadow();

        cy.get('vl-map-tiled-wms-layer');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-tiled-wms-layer');
    });

    it('should set the correct request parameters', () => {
        cy.wait('@wmsRequest').then((interception) => {
            const { request } = interception;

            cy.wrap(request.query).should((query) => {
                expect(query).to.have.property('LAYERS', 'GEM_GRENS');
                expect(query).to.have.property('SERVICE', 'WMS');
                expect(query).to.have.property('REQUEST', 'GetMap');
                expect(query).to.have.property('TILED', 'true');

                // check if the tilesorigin property exists and has a value of a number,number format
                expect(query).to.have.property('tilesorigin');
                const tilesOriginValue = query['tilesorigin'];
                expect(tilesOriginValue).to.match(/^\d+(\.\d+)?,\d+(\.\d+)?$/);
            });
        });
    });
});
