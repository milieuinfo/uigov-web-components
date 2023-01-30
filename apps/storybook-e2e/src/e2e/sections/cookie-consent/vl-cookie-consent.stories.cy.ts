const cookieConsentUrl =
    'http://localhost:8080/iframe.html?args=&id=sections-cookie-consent--cookie-consent-default&viewMode=story';

describe('story vl-cookie-consent', () => {
    it('should contain the `Cookie-toestemming`', () => {
        cy.visit(`${cookieConsentUrl}`);
        cy.getDataCy('button-open-cookie-consent').click();
        cy.getDataCy('cookie-consent').shadow().find('vl-modal').shadow().find('h2').contains('Cookie-toestemming');
        cy.getDataCy('cookie-consent')
            .shadow()
            .find('vl-modal')
            .find('.vl-button')
            .scrollIntoView()
            .contains('Ik begrijp het')
            .click();
    });
});
