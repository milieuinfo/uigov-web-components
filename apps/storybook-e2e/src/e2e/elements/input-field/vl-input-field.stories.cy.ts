const inputFieldUrl = 'http://localhost:8080/iframe.html?id=elements-input-field--input-field-default&viewMode=story';

describe('story vl-input-field - default', () => {
    it('should be accessible', () => {
        cy.visit(inputFieldUrl);
        cy.get('input[is="vl-input-field"]').should('have.class', 'vl-input-field');
    });
});
