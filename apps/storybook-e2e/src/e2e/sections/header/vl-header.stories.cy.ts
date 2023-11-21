const headerUrl = 'http://localhost:8080/iframe.html?id=sections-header--header-default&viewMode=story';

describe('story vl-header', () => {
    it('should render', () => {
        cy.visit(headerUrl);

        cy.get('vl-header');
        cy.get('#header__container')
            .find('header')
            .find('.vlw__primary-bar__brand__host')
            .contains('Departement Omgeving (test)');
    });

    it('should emit ready event', () => {
        cy.visit(headerUrl);

        // Mogelijke flaky test aangezien het event afgevuurd kan worden vooraleer de eventListener is toegevoegd.
        cy.createStubForEvent('vl-header', 'ready');
        cy.get('@ready').should('have.been.calledOnce');
    });

    describe('vl-header - container', () => {
        it('should render', () => {
            cy.visit(headerUrl);

            cy.get('vl-header');
            cy.get('#header__container').should('exist');
        });

        it('should render with fixed height', () => {
            cy.visit(headerUrl);

            cy.get('#header__container').should('have.css', 'min-height', '43px');
        });
    });
});
