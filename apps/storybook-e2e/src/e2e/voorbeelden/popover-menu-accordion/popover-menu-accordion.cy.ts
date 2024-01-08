const PopoverMenuAccordionDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=applicatief-voorbeelden-popover-menu-in-accordion--popover-menu-accordion&viewMode=story';

describe('story popover-menu-accordion', () => {
    it('should display story', () => {
        cy.visit(PopoverMenuAccordionDefaultUrl);
        cy.get('vl-accordion').shadow();
    });
});
