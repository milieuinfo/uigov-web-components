const checkboxNextUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-default&viewMode=story&args=';
const checkboxNextSwitchUrl =
    'http://localhost:8080/iframe.html?id=form-next-checkbox--checkbox-switch&viewMode=story&args=';

describe('story vl-checkbox-next default', () => {
    it('should render story', () => {
        cy.visit(`${checkboxNextUrl}checked:true`);

        cy.get('vl-checkbox-next').shadow();
    });
});

describe('story vl-checkbox-next switch', () => {
    it('should render story', () => {
        cy.visit(`${checkboxNextSwitchUrl}checked:true`);

        cy.get('vl-checkbox-next').shadow();
    });
});
