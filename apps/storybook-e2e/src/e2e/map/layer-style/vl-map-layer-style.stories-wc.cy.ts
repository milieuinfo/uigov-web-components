import { VlMapLayerStyle } from '@domg-wc/map';
import { runTestFor } from '../../../support/utils';

const mapLayerStyleUrl = 'http://localhost:8080/iframe.html?id=map-layer-style--map-layer-style-default&viewMode=story';

describe('vl-map-layer-style - default', () => {
    it('should cache feature style objects', () => {
        cy.visit(mapLayerStyleUrl);

        // Wachten op OL om feature styles op te vragen aan component.
        cy.wait(100);

        runTestFor<VlMapLayerStyle>('vl-map-layer-style', (component) => {
            expect(component.featureStyleCache.size).to.not.equal(0);
        });
    });
});
