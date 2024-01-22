const errorMessageNextUrl =
    'http://localhost:8080/iframe.html?id=form-next-error-message--error-message-default&viewMode=story';

describe('story vl-error-message-next default', () => {
    it('should display story', () => {
        cy.visit(errorMessageNextUrl);

        cy.get('vl-error-message-next').shadow().find('p');
    });
});
