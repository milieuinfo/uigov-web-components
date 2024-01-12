const errorMessageNextUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-error-message-next--error-message-default&viewMode=story';

describe('story vl-error-message-next default', () => {
    it('should display story', () => {
        cy.visit(errorMessageNextUrl);

        cy.get('vl-error-message-next').shadow().find('p');
    });
});
