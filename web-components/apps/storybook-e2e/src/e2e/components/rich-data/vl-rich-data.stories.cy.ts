const richDataUrl = 'http://localhost:8080/iframe.html?args=&id=components-rich-data--rich-data-pager&viewMode=story';

describe('story vl-rich-data', () => {
    it('as a user, I can see the rich-data pager', () => {
        cy.visit(`${richDataUrl}`);
        cy.get('vl-pager')
            .shadow()
            .find('li[id=bounds]')
            .children('strong')
            .then((child) => {
                expect(child[0]).to.contain('1-5');
            });
        cy.get('vl-pager').shadow().find('li[data-vl-pager-page=2]').click();
        cy.get('vl-pager')
            .shadow()
            .find('li[id=bounds]')
            .children('strong')
            .then((child) => {
                expect(child[0]).to.contain('6-10');
            });
    });
});
