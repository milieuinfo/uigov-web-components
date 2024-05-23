const infotextNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=components-next-infotext--infotext-default&viewMode=story';
const infotextNextSecondaryUrl =
    'http://localhost:8080/iframe.html?id=components-next-infotext--infotext-badge&viewMode=story';
const infotextNextTertiaryUrl =
    'http://localhost:8080/iframe.html?id=components-next-infotext--infotext-link&viewMode=story';

describe('story - vl-infotext-next - default', () => {
    it('should render', () => {
        cy.visit(infotextNextDefaultUrl);

        cy.get('vl-infotext-next').shadow();
    });
});

describe('story - vl-infotext-next - badge', () => {
    it('should render', () => {
        cy.visit(infotextNextSecondaryUrl);

        cy.get('vl-infotext-next').shadow();
    });
});

describe('story - vl-infotext-next - link', () => {
    it('should render', () => {
        cy.visit(infotextNextTertiaryUrl);

        cy.get('vl-infotext-next').shadow();
    });
});
