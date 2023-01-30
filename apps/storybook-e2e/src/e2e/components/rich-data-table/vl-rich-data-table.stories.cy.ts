const richDataTableUrl =
    'http://localhost:8080/iframe.html?args=&id=components-rich-data-table--rich-data-table-default&viewMode=story';

describe('story vl-rich-data-table', () => {
    it('as a user, I can see the rich-data-table', () => {
        cy.visit(`${richDataTableUrl}`);
        cy.get('vl-rich-data-table')
            .shadow()
            .find('tr')
            .then((rows) => {
                expect(rows.length).to.equal(3);
            });
    });
});
