const infoblockUrl = 'http://localhost:8080/iframe.html?id=components-infoblock--infoblock-contact&viewMode=story';

describe('story vl-infoblock', () => {
    it('should display default story', () => {
        cy.visit(`${infoblockUrl}`);
    });

    const types = ['contact', 'publications', 'faq', 'news', 'timeline'];
    types.forEach((type) => {
        it(`should display story for type ${type}`, () => {
            const urlForType = `http://localhost:8080/iframe.html?id=components-infoblock--infoblock-${type}&viewMode=story`;
            cy.visit(urlForType);
        });
    });

    it('should display story for custom icon', () => {
        cy.visit('http://localhost:8080/iframe.html?id=components-infoblock--infoblock-custom-icon&viewMode=story');
    });

    it('should display story for slot elements', () => {
        cy.visit(
            'http://localhost:8080/iframe.html?id=components-infoblock--infoblock-with-slot-elements&viewMode=story'
        );
    });
});
