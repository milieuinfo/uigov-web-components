const textareaNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-textarea--textarea-default&viewMode=story';

describe('story - vl-textarea-next - default', () => {
    it('should render', () => {
        cy.visit(textareaNextDefaultUrl);

        cy.get('vl-textarea-next').shadow().find('textarea');
    });
});
