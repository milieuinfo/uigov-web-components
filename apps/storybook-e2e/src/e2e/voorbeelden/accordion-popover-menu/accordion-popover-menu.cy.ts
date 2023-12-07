const AccordionPopoverMenuDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=applicatief-voorbeelden-accordion-popover-menu--accordion-popover-menu&viewMode=story';

describe('story accordion-popover-menu', () => {
    it('should display story', () => {
        cy.visit(AccordionPopoverMenuDefaultUrl);
        cy.get('vl-accordion').shadow();
    });
});
