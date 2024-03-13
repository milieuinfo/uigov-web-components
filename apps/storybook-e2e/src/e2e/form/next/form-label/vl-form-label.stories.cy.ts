const formLabelNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-form-label--form-label-default&viewMode=story';

describe('story - vl-form-label-next - default', () => {
    it('should render', () => {
        cy.visit(formLabelNextDefaultUrl);

        cy.get('vl-form-label-next').shadow().find('label');
    });
});
