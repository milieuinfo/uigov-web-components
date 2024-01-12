const inputFieldMaskedNextUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-input-field-next-input-field-masked-next--input-field-masked-default&viewMode=story';

describe('story vl-input-field-masked-next default', () => {
    it('should display story', () => {
        cy.visit(inputFieldMaskedNextUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});
