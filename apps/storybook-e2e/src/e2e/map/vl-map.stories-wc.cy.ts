import { runTestFor } from '../../support/utils';
import { VlMapFeaturesLayer } from '@domg-wc/map';

const mapPlaygroundUrl = 'http://localhost:8080/iframe.html?id=map-map--map-playground&viewMode=story';

describe('story vl-map playground', () => {
    it('should adjust opacity of shapes layer', () => {
        cy.visit(mapPlaygroundUrl);

        runTestFor<VlMapFeaturesLayer>('vl-map-features-layer[data-vl-name="Shapes"]', (shapesLayer) => {
            expect(shapesLayer.opacity).to.equal(1);
        });

        cy.get('vl-input-slider').invoke('attr', 'data-vl-value', 50);

        runTestFor<VlMapFeaturesLayer>('vl-map-features-layer[data-vl-name="Shapes"]', (shapesLayer) => {
            expect(shapesLayer.opacity).to.equal(0.5);
        });
    });
});
