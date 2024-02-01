const checkboxNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-default&viewMode=story&args=';
const checkboxNextSwitchUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-switch&viewMode=story&args=';
const checkboxNextValueUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-value&viewMode=story&args=';
const checkboxNextReadonlyUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-readonly&viewMode=story&args=';

describe('story - vl-checkbox-next - default', () => {
    it('should render', () => {
        cy.visit(checkboxNextDefaultUrl);

        cy.get('vl-checkbox-next').shadow();
    });
});

describe('story - vl-checkbox-next - switch', () => {
    it('should render', () => {
        cy.visit(checkboxNextSwitchUrl);

        cy.get('vl-checkbox-next').shadow();
    });
});

describe('story - vl-checkbox-next - value', () => {
    it('should render', () => {
        cy.visit(checkboxNextValueUrl);

        cy.get('vl-checkbox-next').shadow();
    });
});

describe('story - vl-checkbox-next - readonly', () => {
    it('should render', () => {
        cy.visit(checkboxNextReadonlyUrl);

        cy.get('vl-checkbox-next').shadow();
    });
});
