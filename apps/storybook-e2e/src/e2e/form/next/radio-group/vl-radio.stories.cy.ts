const radioNextDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=form-next-radio-group--radio-default&viewMode=story';

describe('story - vl-radio-next - default', () => {
    it('should render', () => {
        cy.visit(radioNextDefaultUrl);

        cy.get('vl-radio-next').shadow().find('input');
    });
});
