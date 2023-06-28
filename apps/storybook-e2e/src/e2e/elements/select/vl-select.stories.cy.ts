const selectUrl = 'http://localhost:8080/iframe.html?id=elements-select--select-default&viewMode=story';

describe('story vl-select', () => {
    it('should contain an option to select', () => {
        cy.visit(selectUrl);

        cy.get('[is="vl-select"]').select('Frankrijk').should('have.value', 'Frankrijk');
    });

    it('should contain select with an error state', () => {
        cy.visit(`${selectUrl}&args=error:true`);

        cy.get('[is="vl-select"]').should('have.class', 'vl-select--error');
    });

    it('should contain select with a success state', () => {
        cy.visit(`${selectUrl}&args=success:true`);

        cy.get('[is="vl-select"]').should('have.class', 'vl-select--success');
    });

    it('should contain select as a block level element', () => {
        cy.visit(`${selectUrl}&args=block:true`);

        cy.get('[is="vl-select"]').should('have.class', 'vl-select--block');
    });

    it('should contain a disabled select', () => {
        cy.visit(`${selectUrl}&args=disabled:true`);

        cy.get('[is="vl-select"]').should('have.class', 'vl-select--disabled');
    });

    it('should contain a select with search functionality', () => {
        cy.visit(`${selectUrl}&args=select:true`);

        cy.get('[is="vl-select"]')
            .parent()
            .parent()
            .should('have.class', 'js-vl-select')
            .should('have.attr', 'aria-expanded', 'false')
            .click()
            .should('have.class', 'is-open')
            .should('have.attr', 'aria-expanded', 'true')
            .find('.vl-select__item')
            .contains('België');

        cy.get('[is="vl-select"]')
            .parent()
            .parent()
            .find('.vl-select__list')
            .should('have.attr', 'aria-expanded', 'true')
            .children()
            .eq(1)
            .click();

        cy.get('[is="vl-select"]').parent().parent().find('.vl-select__item').contains('Duitsland');
    });

    it('should disable search for extended functionality', () => {
        cy.visit(`${selectUrl}&args=select:true;selectDisableSearch:true`);

        cy.get('[is="vl-select"]').parent().parent().find('input.vl-input-field').should('not.exist');
    });
});
