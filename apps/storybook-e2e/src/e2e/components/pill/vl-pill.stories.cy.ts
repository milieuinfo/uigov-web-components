const pillUrl = 'http://localhost:8080/iframe.html?id=components-pill--pill-default&viewMode=story';

describe('story vl-pill', () => {
    it('should contain a text', () => {
        cy.visit(`${pillUrl}`);
        cy.getDataCy('pill').contains('Optie 1');
    });

    it('should contain a success pill', () => {
        cy.visit(`${pillUrl}&args=type:success`);
        cy.getDataCy('pill').shadow().find('.vl-pill').should('have.class', 'vl-pill--success');
    });

    it('should contain a warning pill', () => {
        cy.visit(`${pillUrl}&args=type:warning`);
        cy.getDataCy('pill').shadow().find('.vl-pill').should('have.class', 'vl-pill--warning');
    });

    it('should contain a error pill', () => {
        cy.visit(`${pillUrl}&args=type:error`);
        cy.getDataCy('pill').shadow().find('.vl-pill').should('have.class', 'vl-pill--error');
    });

    it('should contain a disabled pill', () => {
        cy.visit(`${pillUrl}&args=disabled:true`);
        cy.getDataCy('pill').shadow().find('.vl-pill').should('have.class', 'vl-pill--disabled');
    });

    it('should contain a closable pill', () => {
        cy.visit(`${pillUrl}&args=closable:true`);
        cy.getDataCy('pill')
            .shadow()
            .find('.vl-pill')
            .should('have.class', 'vl-pill--closable')
            .find('button')
            .should('have.class', 'vl-pill__close');
    });

    it('should contain a checkable pill that by default is unchecked but when clicked, becomes checked', () => {
        cy.visit(`${pillUrl}&args=checkable:true`);
        cy.getDataCy('pill')
            .shadow()
            .find('.vl-pill')
            .should('have.class', 'vl-pill--checkable')
            .find('input.vl-pill--checkable__checkbox')
            .should('not.have.attr', 'checked');

        cy.getDataCy('pill').shadow().find('.vl-pill').click({ force: true });

        cy.getDataCy('pill').shadow().find('input.vl-pill--checkable__checkbox').should('have.attr', 'checked');
    });

    it('should contain a checkable pill that is disabled and when clicking, does not enable the checkbox', () => {
        cy.visit(`${pillUrl}&args=checkable:true;disabled:true`);
        cy.getDataCy('pill')
            .shadow()
            .find('.vl-pill')
            .should('have.class', 'vl-pill--checkable')
            .find('input.vl-pill--checkable__checkbox')
            .should(($input) => {
                expect($input).to.have.attr('disabled')
                expect($input).to.not.have.attr('checked')
            })

        cy.getDataCy('pill').shadow().find('.vl-pill').click({ force: true });

        cy.getDataCy('pill').shadow().find('input.vl-pill--checkable__checkbox').should('not.have.attr', 'checked');
    });

    it('should contain a checkable pill that is disabled and checked, as it is checked, should show a checkmark', () => {
        cy.visit(`${pillUrl}&args=checkable:true;disabled:true;checked:true`);
        cy.getDataCy('pill')
            .shadow()
            .find('.vl-pill')
            .should('have.class', 'vl-pill--checkable')
            .find('input.vl-pill--checkable__checkbox')
            .should(($input) => {
                expect($input).to.have.attr('disabled')
                expect($input).to.have.attr('checked')
            });
    });
});
