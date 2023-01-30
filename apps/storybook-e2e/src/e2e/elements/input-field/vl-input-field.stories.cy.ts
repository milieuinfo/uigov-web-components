const inputFieldUrl = 'http://localhost:8080/iframe.html?id=elements-input-field--input-field-default&viewMode=story';

describe('story vl-input-field', () => {
    it('should contain an input field', () => {
        cy.visit(`${inputFieldUrl}`);
        cy.getDataCy('input-field').should('have.class', 'vl-input-field');
    });

    it('should contain an input field with a block state', () => {
        cy.visit(`${inputFieldUrl}&args=block:true`);
        cy.getDataCy('input-field')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--block');
    });

    it('should contain an input field with an error state ', () => {
        cy.visit(`${inputFieldUrl}&args=error:true`);
        cy.getDataCy('input-field')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--error');
    });

    it('should contain an input field with an success state ', () => {
        cy.visit(`${inputFieldUrl}&args=success:true`);
        cy.getDataCy('input-field')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--success');
    });

    it('should contain an input field with an disabled state ', () => {
        cy.visit('http://localhost:8080/iframe.html?id=elements-input-field--input-field-disabled&viewMode=story');
        cy.getDataCy('input-field')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--disabled');
    });

    it('should contain an input field with a small state', () => {
        cy.visit(`${inputFieldUrl}&args=small:true`);
        cy.getDataCy('input-field')
            .should('have.class', 'vl-input-field')
            .should('have.class', 'vl-input-field--small');
    });
});
