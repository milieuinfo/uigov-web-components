const formGridDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-form-grid-form-column--form-grid-column&viewMode=story';

describe('story vl-form-column', () => {
    it('should contain form with a 8/12 form column in it', () => {
        cy.visit(formGridDefaultUrl);
        cy.get('form[is="vl-form"]').find('div[is="vl-form-column"]').should('have.class', 'vl-form-col--8-12');
    });

    it("should contain form with a 8/12 form column in it that's pushed 2/12 columns", () => {
        cy.visit(`${formGridDefaultUrl}&args=push:2`);
        cy.get('div[is="vl-form-grid"]')
            .find('div[is="vl-form-column"]')
            .should('have.class', 'vl-form-col--8-12')
            .should('have.class', 'vl-form-push--2-12');
    });
});
