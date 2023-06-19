const mapSelectActionsUrl =
    'http://localhost:8080/iframe.html?id=map-action-layer-action-select-action-select-actions--map-select-actions-default&viewMode=story';
const mapSelectActionsClusteringUrl =
    'http://localhost:8080/iframe.html?id=map-action-layer-action-select-action-select-actions--map-select-actions-clustering&viewMode=story';

describe('story vl-map-select-actions default', () => {
    it('should render a map', () => {
        cy.visit(mapSelectActionsUrl);

        cy.get('vl-map').shadow().find('div#map');
    });

    it('should render 2 features layers', () => {
        cy.visit(mapSelectActionsUrl);

        cy.get('vl-map').find('vl-map-features-layer').should('have.length', 2);
    });

    it('should render select-actions', () => {
        cy.visit(mapSelectActionsUrl);

        cy.get('vl-map').find('vl-map-select-actions');
    });
});

describe('story vl-map-select-actions clustering', () => {
    it('should render a map', () => {
        cy.visit(mapSelectActionsClusteringUrl);

        cy.get('vl-map').shadow().find('div#map');
    });

    it('should render 2 features layers', () => {
        cy.visit(mapSelectActionsClusteringUrl);

        cy.get('vl-map').find('vl-map-features-layer').should('have.length', 2);
    });

    it('should render select-actions', () => {
        cy.visit(mapSelectActionsClusteringUrl);

        cy.get('vl-map').find('vl-map-select-actions');
    });
});
