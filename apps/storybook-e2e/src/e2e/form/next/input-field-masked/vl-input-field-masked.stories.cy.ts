const inputFieldMaskedNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field-masked--input-field-masked-default&viewMode=story';

describe('story - vl-input-field-masked-next - default', () => {
    it('should render', () => {
        cy.visit(inputFieldMaskedNextDefaultUrl);

        cy.get('vl-input-field-masked-next').shadow().find('input');
    });
});
