const inputFieldNextUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-input-field-next--input-field-default&viewMode=story';

describe('story vl-input-field-next default', () => {
    it('should display story', () => {
        cy.visit(inputFieldNextUrl);

        cy.get('vl-input-field-next').shadow().find('input');
    });
});
