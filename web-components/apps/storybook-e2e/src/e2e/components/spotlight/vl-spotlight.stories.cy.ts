const spotlightUrl =
    'http://localhost:8080/iframe.html?args=&id=components-spotlight--spotlight-with-subtitle&viewMode=story';

describe('story vl-spotlight', () => {
    it('as a user, I can see the spotlight with title', () => {
        cy.visit(`${spotlightUrl}`);
        cy.get('vl-spotlight')
            .shadow()
            .find('slot[name=title]')
            .within((slot) => {
                const slotContent = (slot[0] as any).assignedNodes()[0];
                expect(slotContent.innerHTML).to.equal('Communicatiespecialist te Willebroek - contract 1 jaar');
            });
    });
});
