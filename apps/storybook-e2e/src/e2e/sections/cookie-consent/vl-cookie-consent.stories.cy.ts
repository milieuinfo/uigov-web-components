const cookieConsentUrl =
    'http://localhost:8080/iframe.html?id=sections-cookie-consent--cookie-consent-default&viewMode=story';

describe('story vl-cookie-consent', () => {
    it('should contain the `Cookie-toestemming`', () => {
        cy.visit(cookieConsentUrl);

        cy.get('button#button-open-cookie-consent').click();
        cy.get('vl-cookie-consent').shadow().find('vl-modal').shadow().find('h2').contains('Cookie-toestemming');
        cy.get('vl-cookie-consent')
            .shadow()
            .find('vl-modal')
            .find('.vl-button')
            .scrollIntoView()
            .contains('Ik begrijp het')
            .click();
    });

    it('should contain the given matomo id & matomo url', () => {
        const matomoId = 12345;
        const matomoUrl = 'fake-matomo-url';

        cy.visit(`${cookieConsentUrl}&args=matomoId:${matomoId};matomoUrl:${matomoUrl}`);

        cy.get('script#vl-cookie-consent-matomo-script')
            .should('contain.text', `_paq.push(['setSiteId', ${matomoId}]);`)
            .should('contain.text', `var u='${matomoUrl}'`);
    });

    it('should emit event on close', () => {
        cy.visit(cookieConsentUrl);

        cy.createStubForEvent('vl-cookie-consent', 'vl-close');
        cy.get('button#button-open-cookie-consent').click();
        cy.get('vl-cookie-consent').shadow().find('vl-modal').find('button[slot="button"]').click();
        cy.get('@vl-close').should('have.been.calledOnce');
    });
});
