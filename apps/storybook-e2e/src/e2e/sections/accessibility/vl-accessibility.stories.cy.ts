const accessibilityUrl =
    'http://localhost:8080/iframe.html?args=&id=sections-accessibility--accessibility-default&viewMode=story';

describe('story vl-accessibility', () => {
    it('should contain the title `Toegankelijkheidsverklaring`', () => {
        cy.visit(`${accessibilityUrl}`);
        cy.getDataCy('accessibility').shadow().find('h1').contains('Toegankelijkheidsverklaring');
    });
});
