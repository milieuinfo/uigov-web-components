const textAreaDefault =
    'http://localhost:8080/iframe.html?args=&id=components-textarea--textarea-default&viewMode=story';
const textAreaRich = 'http://localhost:8080/iframe.html?args=&id=components-textarea--textarea-rich&viewMode=story';

describe('story vl-textarea - default', () => {
    beforeEach(() => cy.visit(textAreaDefault));

    it('should not contain a textarea data-vl-rich attribute set to true', () => {
        cy.get('textarea[is="vl-textarea"]').should('not.have.attr', 'data-vl-rich', 'true');
    });

    it('should not contain tinymce', () => {
        cy.get('div.tox.tox-tinymce').should('not.exist');
    });
});

describe('story vl-textarea - rich', () => {
    beforeEach(() => cy.visit(textAreaRich));

    it('should contain a textarea with rich attribute set to true', () => {
        cy.get('textarea[is="vl-textarea"]').should('have.attr', 'data-vl-rich');
    });

    it('should contain tinymce', () => {
        cy.get('div.tox.tox-tinymce').should('exist');
    });

    it('should contain default tinymce controls', () => {
        const controlTitles = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strikethrough'];
        for (const title of controlTitles) {
            cy.get('div.tox.tox-tinymce').find(`button[title="${title}"]`).should('exist');
        }
    });
});
