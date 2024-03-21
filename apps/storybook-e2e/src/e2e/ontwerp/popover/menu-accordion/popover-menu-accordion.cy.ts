const popoverMenuAccordionDefaultUrl =
    'http://localhost:8080/iframe.html?id=ontwerp-popover-menu-accordion--menu-accordion&viewMode=story';

describe('story - popover menu accordion', () => {
    it('should render', () => {
        cy.visit(popoverMenuAccordionDefaultUrl);

        cy.get('vl-popover-menu-accordion').find('vl-accordion').shadow();
    });
});
