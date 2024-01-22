const inputFieldNextUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field--input-field-default&viewMode=story';

describe('story vl-input-field-next default', () => {
    it('should display story', () => {
        cy.visit(inputFieldNextUrl);

        cy.get('vl-input-field-next').shadow().find('input');
    });
});
