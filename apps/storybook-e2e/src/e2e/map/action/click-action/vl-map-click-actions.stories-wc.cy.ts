describe('story vl-map-click-action default', () => {
    const mapClickActionUrl =
        'http://localhost:8080/iframe.html?id=map-action-click-action--map-click-action-default&viewMode=story';

    function getMap() {
        return cy.get('vl-map');
    }

    function getMapShadowDOM() {
        return getMap().shadow();
    }

    function assertMapExists() {
        getMap().should('exist');
    }

    const vlMapClickActionElement = 'vl-map-click-action';

    beforeEach(() => {
        cy.visit(mapClickActionUrl);
    });

    it('should add a marker on the map if vl-map-click-action is present in the DOM and the map has been clicked ', () => {
        assertMapExists();

        cy.get(vlMapClickActionElement).should('exist');

        getMap().click();

        getMapShadowDOM().find('vl-map-click-action-pindrop').should('exist');
    });

    it('should remove the marker when <vl-map-click-action> is removed from the DOM', () => {
        assertMapExists();

        cy.get(vlMapClickActionElement).should('exist');

        getMap().click();

        getMapShadowDOM().find('vl-map-click-action-pindrop').should('exist');

        cy.get('vl-map-click-action').then(($el) => $el.remove());

        getMapShadowDOM().find('vl-map-click-action-pindrop').should('not.exist');
    });

    it('should not crashed when the map is clicked and the vl-map-click-action is not present in the DOM', () => {
        getMap().should('exist');

        cy.get(vlMapClickActionElement).then(($el) => $el.remove());

        cy.get(vlMapClickActionElement).should('not.exist');

        getMap().click();

        getMap().should('exist');
    });
});
