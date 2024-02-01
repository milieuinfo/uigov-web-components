const inputFieldNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field--input-field-default&viewMode=story';

describe('story - vl-input-field-next - default', () => {
    it('should render', () => {
        cy.visit(inputFieldNextDefaultUrl);

        cy.get('vl-input-field-next').shadow().find('input');
    });
});
