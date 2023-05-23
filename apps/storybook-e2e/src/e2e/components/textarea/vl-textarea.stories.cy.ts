const textAreaDefault =
    'http://localhost:8080/iframe.html?args=&id=components-textarea--textarea-default&viewMode=story';
const textAreaRich = 'http://localhost:8080/iframe.html?id=components-textarea--textarea-rich&viewMode=story';

describe('story vl-textarea - default', () => {
    it('should not contain a textarea data-vl-rich attribute set to true', () => {
        cy.visit(textAreaDefault);
        cy.get('textarea[is="vl-textarea"]').should('not.have.attr', 'data-vl-rich', 'true');
    });

    it('should not contain tinymce', () => {
        cy.visit(textAreaDefault);
        cy.get('div.tox.tox-tinymce').should('not.exist');
    });
});

describe('story vl-textarea - rich', () => {
    it('should contain a textarea with rich attribute set to true', () => {
        cy.visit(textAreaRich);
        cy.get('textarea[is="vl-textarea"]').should('have.attr', 'data-vl-rich');
    });

    it('should contain tinymce', () => {
        cy.visit(textAreaRich);
        cy.get('div.tox.tox-tinymce').should('exist');
    });

    it('should contain default tinymce controls', () => {
        cy.visit(textAreaRich);
        const controlTitles = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strikethrough'];
        for (const title of controlTitles) {
            cy.get('div.tox.tox-tinymce').find(`button[title="${title}"]`).should('exist');
        }
    });

    it('should be editable', () => {
        cy.visit(textAreaRich);

        const textToType = 'hello world!';
        // eslint-disable-next-line cypress/no-assigning-return-values
        const iframeBody = cy
            .get('div.tox.tox-tinymce')
            .find('iframe#textarea-rich_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframeBody.focus().type('h' + textToType);

        iframeBody.should('contain.text', textToType);
    });

    it('should not be editable when readonly', () => {
        cy.visit(textAreaRich + '&args=readonly:true');

        const textToType = 'hello world!';
        // eslint-disable-next-line cypress/no-assigning-return-values
        const iframeBody = cy
            .get('div.tox.tox-tinymce')
            .find('iframe#textarea-rich_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframeBody.focus().type(textToType);

        iframeBody.should('not.contain.text', textToType);
    });

    it('should not have visible tinymce controls when readonly', () => {
        cy.visit(textAreaRich + '&args=readonly:true');
        cy.get('div.tox-editor-header').should('have.class', 'vl-u-hidden');
    });

    it('should not be editable when disabled', () => {
        cy.visit(textAreaRich + '&args=disabled:true');

        const textToType = 'hello world!';
        // eslint-disable-next-line cypress/no-assigning-return-values
        const iframeBody = cy
            .get('div.tox.tox-tinymce')
            .find('iframe#textarea-rich_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframeBody.focus().type(textToType);

        iframeBody.should('not.contain.text', textToType);
    });

    it('should contain default tinymce controls when disabled', () => {
        cy.visit(textAreaRich + '&args=disabled:true');
        const controlTitles = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strikethrough'];
        for (const title of controlTitles) {
            cy.get('div.tox.tox-tinymce').find(`button[title="${title}"]`).should('exist');
        }
    });

    it('should have disabled tinymce controls when disabled', () => {
        cy.visit(textAreaRich + '&args=disabled:true');
        cy.get('div.tox.tox-tinymce').should('have.class', 'tox-tinymce--disabled');
    });
});
