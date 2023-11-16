describe('story vl-map-select-actions default', () => {
    const mapClickActionUrl =
        'http://localhost:8080/iframe.html?id=map-action-click-action--map-click-action-default&viewMode=story';

    function getMap() {
        return cy.get('vl-map');
    }

    function getMapShadowDOM() {
        return getMap().shadow();
    }

    it('should render a map', () => {
        cy.visit(mapClickActionUrl);

        getMapShadowDOM().find('div#map');
    });

    it('should NOT render with features layers', () => {
        cy.visit(mapClickActionUrl);

        getMap().find('vl-map-features-layer').should('not.exist');
    });

    it('should render click-action', () => {
        cy.visit(mapClickActionUrl);

        getMap().find('vl-map-click-action');
    });

    it('should NOT render any other map related action(s)-*', () => {
        cy.visit(mapClickActionUrl);

        getMap().find('vl-map-edit-action').should('not.exist');
        getMap().find('vl-map-draw-action').should('not.exist');
        getMap().find('vl-map-click-action').siblings().should('have.length', 1);
        getMap().find('vl-map-click-action').siblings().filter('vl-map-baselayer-grb-gray').should('exist');
    });
});
