const errorMessageNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-error-message--error-message-default&viewMode=story';

describe('story - vl-error-message-next - default', () => {
    it('should render', () => {
        cy.visit(errorMessageNextDefaultUrl);

        cy.get('vl-error-message-next').shadow().find('p');
    });
});
