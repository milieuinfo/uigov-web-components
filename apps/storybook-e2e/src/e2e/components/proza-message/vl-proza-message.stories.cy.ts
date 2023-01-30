const prozaMessageUrl =
    'http://localhost:8080/iframe.html?id=components-proza-message--proza-message-editable&viewMode=story';

describe('story vl-proza-message', () => {
    it('as a user, I can see inline the proza action buttons ', () => {
        cy.visit(`${prozaMessageUrl}`);
        cy.get('vl-proza-message[data-vl-code=inline]').shadow().find('#edit-button').should('exist');
        cy.get('vl-proza-message[data-vl-code=inline]').shadow().find('#refresh-button').should('exist');
    });
});
