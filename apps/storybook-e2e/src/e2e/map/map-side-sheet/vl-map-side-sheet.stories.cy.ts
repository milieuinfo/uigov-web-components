const mapSideSheetDefaultUrl =
    'http://localhost:8080/iframe.html?id=map-side-sheet--map-side-sheet-default&viewMode=story';

describe('story - vl-map-side-sheet - default', () => {
    it('should render', () => {
        cy.visit(mapSideSheetDefaultUrl);

        cy.get('vl-map-side-sheet').shadow().find('#vl-side-sheet');
    });
});
