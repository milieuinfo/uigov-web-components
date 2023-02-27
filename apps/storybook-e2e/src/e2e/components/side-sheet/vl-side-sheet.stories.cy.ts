const sideSheetUrl =
    'http://localhost:8080/iframe.html?args=&id=components-side-sheet--side-sheet-default&viewMode=story';

describe('story vl-side-sheet', () => {
    it('as a user, I can open and close the side-sheet', () => {
        cy.visit(`${sideSheetUrl}`);
        cy.get('vl-side-sheet').invoke('attr', 'data-vl-open').should('not.exist');
        cy.get('vl-side-sheet').shadow().find('button').click();
        cy.get('vl-side-sheet').invoke('attr', 'data-vl-open').should('exist');
        cy.get('vl-side-sheet').shadow().find('button').click();
        cy.get('vl-side-sheet').invoke('attr', 'data-vl-open').should('not.exist');
    });

    it('the side-sheet contains the expected data', () => {
        cy.visit(`${sideSheetUrl}`);
        cy.get('vl-side-sheet')
            .shadow()
            .find('slot')
            .within((slot) => {
                const slotContent = (slot[0] as any).assignedNodes();
                expect(slotContent[1].innerHTML).to.contain('Lorem ipsum dolor sit amet,');
            });
    });
});
