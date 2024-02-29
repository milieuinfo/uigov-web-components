const textareaRichNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-textarea-rich--textarea-rich-default&viewMode=story';
const textareaRichNextToolbarUrl =
    'http://localhost:8080/iframe.html?id=form-next-textarea-rich--textarea-rich-toolbar&viewMode=story';
const textareaRichNextPluginsUrl =
    'http://localhost:8080/iframe.html?id=form-next-textarea-rich--textarea-rich-plugins&viewMode=story';

describe('story - vl-textarea-rich-next - default', () => {
    it('should render', () => {
        cy.visit(textareaRichNextDefaultUrl);

        cy.get('vl-textarea-rich-next').shadow().find('textarea');
    });
});

describe('story - vl-textarea-rich-next - custom toolbar', () => {
    it('should render', () => {
        cy.visit(textareaRichNextToolbarUrl);

        cy.get('vl-textarea-rich-next').shadow().find('textarea');
    });
});

describe('story - vl-textarea-rich-next - custom plugins', () => {
    it('should render', () => {
        cy.visit(textareaRichNextPluginsUrl);

        cy.get('vl-textarea-rich-next').shadow().find('textarea');
    });
});
