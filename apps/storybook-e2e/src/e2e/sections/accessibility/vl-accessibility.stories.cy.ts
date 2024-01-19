const accessibilityUrl =
    'http://localhost:8080/iframe.html?id=sections-accessibility--accessibility-default&viewMode=story';

const accessibilityHeaderSlotUrl =
    'http://localhost:8080/iframe.html?args=&id=sections-accessibility--accessibility-header-slot';

describe('story vl-accessibility - default', () => {
    it('should display story', () => {
        cy.visit(accessibilityUrl);
        cy.get('vl-accessibility').shadow();
    });
});

describe('story vl-accessibility - header slot', () => {
    it('should have replace default header with custom header', () => {
        cy.visit(accessibilityHeaderSlotUrl);

        cy.get('vl-accessibility').find('vl-functional-header').shadow().find('slot[name="back"]').contains('Start');
    });
});
