describe('story vl-map-select-actions default', () => {
    const mapClickActionUrl =
        'http://localhost:8080/iframe.html?id=map-action-click-action--map-click-action-default&viewMode=story';

    beforeEach(() => {
        cy.visit(mapClickActionUrl);
    });

    describe('<vl-map-click-action/> visibility on the DOM', () => {
        it('should render a map', () => {
            cy.get('vl-map').shadow().find('div#map');
        });

        it('should render vl-map-click-action', () => {
            cy.get('vl-map').find('vl-map-click-action').shadow();
        });
    });
});
