const selectUrl = 'http://localhost:8080/iframe.html?id=elements-select--select-default&viewMode=story';

describe('story vl-select <select[is="vl-select"]> - default', () => {
    it('should display story', () => {
        cy.visit(selectUrl);
        cy.get('select[is="vl-select"]').should('have.class', 'vl-select');
    });

    it('should dispatch select-search event on input and delete search value', () => {
        cy.visit(`${selectUrl}&args=select:true`);

        cy.createStubForEvent('[is="vl-select"]', 'vl-select-search');
        cy.get('[is="vl-select"]').parent().parent().find('.vl-select__inner').click();
        cy.get('[is="vl-select"]').parent().parent().find('input.vl-input-field').type('t');
        cy.get('@vl-select-search')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { value: 't' });
        cy.get('[is="vl-select"]').parent().parent().find('input.vl-input-field').clear();
        cy.get('@vl-select-search')
            .should('have.been.calledTwice')
            .its('secondCall.args.0.detail')
            .should('deep.equal', { value: '' });
    });
});
