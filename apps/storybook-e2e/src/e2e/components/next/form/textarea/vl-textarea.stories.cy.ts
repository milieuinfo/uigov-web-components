const textareaNextUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-textarea-next--textarea-default&viewMode=story';

describe('story vl-textarea-next default', () => {
    it('should display story', () => {
        cy.visit(textareaNextUrl);

        cy.get('vl-textarea-next').shadow().find('textarea');
    });
});
