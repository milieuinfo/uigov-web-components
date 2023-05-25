const privacyUrl = 'http://localhost:8080/iframe.html?id=sections-privacy--privacy-default&viewMode=story';

describe('story vl-privacy', () => {
    it('should have privacy header', () => {
        cy.visit(privacyUrl);

        cy.get('vl-privacy').shadow().find('h1').contains('Privacy');
    });

    it('should have default date', () => {
        cy.visit(privacyUrl);

        cy.get('vl-privacy').shadow().find('section').find('span').contains('3 maart 2021');
    });

    it('should set date', () => {
        cy.visit(`${privacyUrl}&args=date:27+januari+2023`);

        cy.get('vl-privacy').shadow().find('section').find('span').contains('27 januari 2023');
    });

    it('should disable back link and emit event', () => {
        cy.visit(`${privacyUrl}&args=disableBackLink:true`);

        cy.createStubForEvent('vl-privacy', 'vl-click-back');
        cy.get('vl-privacy').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
        cy.get('@vl-click-back').should('have.been.calledOnce');
    });

    it('should have default version', () => {
        cy.visit(privacyUrl);

        cy.get('vl-privacy').shadow().find('section').find('span').contains('1.0.0');
    });

    it('should set version', () => {
        cy.visit(`${privacyUrl}&args=version:v24`);

        cy.get('vl-privacy').shadow().find('section').find('span').contains('v24');
    });

    it('should show child links on scroll', () => {
        cy.visit(privacyUrl);

        const shouldHaveExpandedToggle = (href: string, expanded: boolean) => {
            cy.get('vl-privacy')
                .shadow()
                .find('nav[is="vl-side-navigation"]')
                .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
                .should('have.attr', 'aria-expanded', `${expanded}`);
        };

        shouldHaveExpandedToggle('#privacy-declaration', false);

        cy.get('vl-privacy').shadow().find('h2#privacy-declaration').scrollIntoView();

        shouldHaveExpandedToggle('#privacy-declaration', true);
    });
});
