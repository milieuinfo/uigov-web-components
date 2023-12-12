const multiSelectUrl = 'http://localhost:8080/iframe.html?id=elements-multiselect--multiselect-default';

describe('story vl-multiselect - default', () => {
    it('should display story', () => {
        cy.visit(multiSelectUrl);
        cy.get('select[is="vl-multiselect"]').should('have.attr', 'data-vl-select-dressed', 'true');
    });
});
