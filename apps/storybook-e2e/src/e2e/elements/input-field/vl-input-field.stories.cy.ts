const inputFieldUrl = 'http://localhost:8080/iframe.html?id=elements-input-field--input-field-default&viewMode=story';

describe('story vl-input-field - default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(`${inputFieldUrl}`);
        cy.checkA11y('[is="vl-input-field"]');
        cy.get('[is="vl-input-field"]').should('have.class', 'vl-input-field');
    });

    it('should contain an input field', () => {
        cy.visit(`${inputFieldUrl}`);
        cy.get('[is="vl-input-field"]').should('have.class', 'vl-input-field');
    });

    it('should contain an input field with a block state', () => {
        cy.visit(`${inputFieldUrl}&args=block:true`);
        cy.get('[is="vl-input-field"]')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--block');
    });

    it('should contain an input field with an error state ', () => {
        cy.visit(`${inputFieldUrl}&args=error:true`);
        cy.get('[is="vl-input-field"]')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--error');
    });

    it('should contain an input field with an success state ', () => {
        cy.visit(`${inputFieldUrl}&args=success:true`);
        cy.get('[is="vl-input-field"]')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--success');
    });

    it('should contain an input field with an disabled state ', () => {
        cy.visitWithA11y(`${inputFieldUrl}&args=small:true;disabled:true`);
        cy.get('[is="vl-input-field"]')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--disabled')
            .should('have.attr', 'disabled');
    });

    it('should contain an input field with a small state', () => {
        cy.visit(`${inputFieldUrl}&args=small:true`);
        cy.get('[is="vl-input-field"]')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--small');
    });
});
