const infoTileUrl = 'http://localhost:8080/iframe.html?id=components-info-tile--info-tile-default&viewMode=story';
const infoTileToggleableUrl =
    'http://localhost:8080/iframe.html?id=components-info-tile--info-tile-toggleable&viewMode=story';

describe('story vl-info-tile - default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(infoTileUrl);

        cy.checkA11y('vl-info-tile');
    });

    it('should contain a title', () => {
        cy.visit(infoTileUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="title"]');
        cy.get('vl-info-tile').find('span[slot="title"]').contains('Broos Deprez');
    });

    it('should contain a subtitle', () => {
        cy.visit(infoTileUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="subtitle"]');
        cy.get('vl-info-tile').find('span[slot="subtitle"]').contains('Uw zoon (19.05.2005)');
    });

    it('should contain content', () => {
        cy.visit(infoTileUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="content"]');
        cy.get('vl-info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });
});

describe('story vl-info-tile - toggleable', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(infoTileToggleableUrl);

        cy.checkA11y('vl-info-tile');
    });

    it('should contain a title', () => {
        cy.visit(infoTileToggleableUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="title"]');
        cy.get('vl-info-tile').find('span[slot="title"]').contains('Broos Deprez');
    });

    it('should contain a subtitle', () => {
        cy.visit(infoTileToggleableUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="subtitle"]');
        cy.get('vl-info-tile').find('span[slot="subtitle"]').contains('Uw zoon (19.05.2005)');
    });

    it('should contain content', () => {
        cy.visit(infoTileToggleableUrl);

        cy.get('vl-info-tile').shadow().find('slot[name="content"]');
        cy.get('vl-info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });

    it('should be able to open and close', () => {
        cy.visitWithA11y(infoTileToggleableUrl);

        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('not.have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'false');
        cy.checkA11y('vl-info-tile');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').click();
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'true');
        cy.checkA11y('vl-info-tile');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').click();
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('not.have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'false');
        cy.checkA11y('vl-info-tile');
    });

    it('should open the info-tile automatically', () => {
        cy.visit(`${infoTileToggleableUrl}&args=autoOpen:true`);

        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'true');
    });
});
