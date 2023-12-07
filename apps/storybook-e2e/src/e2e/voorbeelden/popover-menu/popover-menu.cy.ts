const PopoverMenuHamburgerUrl =
    'http://localhost:8080/iframe.html?args=&id=applicatief-voorbeelden-popover-menu--hamburger-menu&viewMode=story';
const PopoverMenuKebabrUrl =
    'http://localhost:8080/iframe.html?args=&id=applicatief-voorbeelden-popover-menu--kebab-menu&viewMode=story';
const PopoverMenuMeatballUrl =
    'http://localhost:8080/iframe.html?args=&id=applicatief-voorbeelden-popover-menu--meatball-menu&viewMode=story';

describe('story popover-hamburger-menu', () => {
    it('should display story', () => {
        cy.visit(PopoverMenuHamburgerUrl);
        cy.get('vl-popover').shadow();
    });
});

describe('story popover-kebab-menu', () => {
    it('should display story', () => {
        cy.visit(PopoverMenuKebabrUrl);
        cy.get('vl-popover').shadow();
    });
});

describe('story popover-meatball-menu', () => {
    it('should display story', () => {
        cy.visit(PopoverMenuMeatballUrl);
        cy.get('vl-popover').shadow();
    });
});
