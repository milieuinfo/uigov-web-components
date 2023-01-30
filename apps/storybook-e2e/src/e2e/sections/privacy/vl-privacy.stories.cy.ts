const privacyUrl = 'http://localhost:8080/iframe.html?args=&id=sections-privacy--privcy-default&viewMode=story';

describe('story vl-privacy', () => {
    it('should render', () => {
        cy.visit(`${privacyUrl}`);
        cy.getDataCy('privacy').shadow().find('h1').contains('Privacy');
    });
});
