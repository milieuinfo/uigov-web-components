const infoTileUrl = 'http://localhost:8080/iframe.html?id=components-info-tile--info-tile-default&viewMode=story';

describe('story vl-info-tile', () => {
    it('should contain a title', () => {
        cy.visit(`${infoTileUrl}`);
        cy.getDataCy('info-tile').find('span[slot="title"]').contains('Broos Deprez');
    });

    it('should contain a subtitle', () => {
        cy.visit(`${infoTileUrl}`);
        cy.getDataCy('info-tile').find('span[slot="subtitle"]').contains('Uw zoon (19.05.2005)');
    });

    it('should contain content', () => {
        cy.visit(`${infoTileUrl}`);
        cy.getDataCy('info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });

    it('should be able to open and close a toggeble info tile', () => {
        cy.visit(`${infoTileUrl}&args=toggleable:true`);
        cy.getDataCy('info-tile')
            .shadow()
            .find('button.vl-toggle')
            .should('have.attr', 'aria-expanded', 'false')
            .click()
            .should('have.attr', 'aria-expanded', 'true')
            .click()
            .should('have.attr', 'aria-expanded', 'false');
    });

    it('should be able immediately see the content of an info tile after it opens automatically', () => {
        cy.visit(`${infoTileUrl}&args=autoOpen:true;toggleable:true`);
        cy.getDataCy('info-tile').shadow().find('.js-vl-accordion--open');

        cy.getDataCy('info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });
});
