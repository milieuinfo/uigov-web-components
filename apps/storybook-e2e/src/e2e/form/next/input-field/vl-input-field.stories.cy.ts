const inputFieldNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field--input-field-default&viewMode=story';
const inputFieldNextNumberUrl =
    'http://localhost:8080/iframe.html?id=form-next-input-field--input-field-number&viewMode=story';

describe('story - vl-input-field-next - default', () => {
    it('should render', () => {
        cy.visit(inputFieldNextDefaultUrl);

        cy.get('vl-input-field-next').shadow().find('input');
    });
});

describe('story - vl-input-field-next - number', () => {
    it('should render', () => {
        cy.visit(inputFieldNextNumberUrl);

        cy.get('vl-input-field-next').shadow().find('input');
    });
});
