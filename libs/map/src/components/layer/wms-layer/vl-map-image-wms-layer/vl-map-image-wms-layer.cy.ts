import { html } from 'lit';
import { VlMap } from '../../../../vl-map';
import { VlMapImageWmsLayer } from './vl-map-image-wms-layer';
import { registerWebComponents } from '@domg-wc/common-utilities';

registerWebComponents([VlMap, VlMapImageWmsLayer]);

describe('component vl-map-image-wms - features layer', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://geo.api.vlaanderen.be/GRB/wms*').as('wmsRequest');

        cy.mount(html`
            <vl-map>
                <vl-map-image-wms-layer
                    data-vl-layers="GEM_GRENS"
                    data-vl-name="Gemeentegrenzen"
                    data-vl-url="https://geo.api.vlaanderen.be/GRB/wms"
                ></vl-map-image-wms-layer>
            </vl-map>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map').shadow();

        cy.get('vl-map-image-wms-layer');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-image-wms-layer');
    });

    it('should set the correct request parameters', () => {
        cy.wait('@wmsRequest').then((interception) => {
            const { request } = interception;

            cy.wrap(request.query).should((query) => {
                expect(query).to.have.property('LAYERS', 'GEM_GRENS');
                expect(query).to.have.property('SERVICE', 'WMS');
                expect(query).to.have.property('REQUEST', 'GetMap');
                expect(query).to.not.have.property('TILED');
                expect(query).to.not.have.property('tilesorigin');
            });
        });
    });
});
