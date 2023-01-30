const autocompleteUrl =
    'http://localhost:8080/iframe.html?args=&id=components-autocomplete--autocomplete-default&viewMode=story';

describe('story vl-autocomplete', () => {
    it('as a user, I can see the autocomplete placeholder', () => {
        cy.visit(`${autocompleteUrl}`);
        cy.get('vl-autocomplete').shadow().find('input').invoke('attr', 'placeholder').should('eq', 'Hint: typ Gent');
    });

    it('as a user, I can see 5 suggestions after typing the g character', () => {
        cy.visit(`${autocompleteUrl}`);
        cy.get('vl-autocomplete').shadow().find('input').type('g');
        cy.get('vl-autocomplete').shadow().find('#suggestions').find('li').should('have.length', 5);
    });
});
