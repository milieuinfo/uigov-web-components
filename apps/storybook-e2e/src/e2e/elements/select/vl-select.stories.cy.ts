const selectUrl = 'http://localhost:8080/iframe.html?id=elements-select--select-default&viewMode=story';

describe('story vl-select', () => {
    it('should contain an option to select', () => {
        cy.visit(`${selectUrl}`);
        cy.getDataCy('select').select('Frankrijk').should('have.value', 'France');
    });

    it('should contain select with an error state', () => {
        cy.visit(`${selectUrl}&args=error:true`);
        cy.getDataCy('select').should('have.class', 'vl-select--error');
    });

    it('should contain select with an success state', () => {
        cy.visit(`${selectUrl}&args=success:true`);
        cy.getDataCy('select').should('have.class', 'vl-select--success');
    });

    it('should contain select with an success state', () => {
        cy.visit(`${selectUrl}&args=success:true`);
        cy.getDataCy('select').should('have.class', 'vl-select--success');
    });

    it('should contain select as a block level element', () => {
        cy.visit(`${selectUrl}&args=block:true`);
        cy.getDataCy('select').should('have.class', 'vl-select--block');
    });

    it('should contain a disabled select', () => {
        cy.visit(`${selectUrl}&args=disabled:true`);
        cy.getDataCy('select').should('have.class', 'vl-select--disabled');
    });

    it('should contain a select with search functionality', () => {
        cy.visit(`${selectUrl}&args=select:true`);
        cy.getDataCy('select')
            .parent()
            .parent()
            .should('have.class', 'js-vl-select')
            .should('have.attr', 'aria-expanded', 'false')
            .click()
            .should('have.class', 'is-open')
            .should('have.attr', 'aria-expanded', 'true')
            .find('.vl-select__item')
            .contains('België');

        cy.getDataCy('select')
            .parent()
            .parent()
            .find('.vl-select__list')
            .should('have.attr', 'aria-expanded', 'true')
            .children()
            .eq(1)
            .click();

        cy.getDataCy('select').parent().parent().find('.vl-select__item').contains('Duitsland');
    });
});
