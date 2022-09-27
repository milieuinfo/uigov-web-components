const functionalHeaderUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-default&viewMode=story';
const functionalHeaderWithSlotsUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-with-slot-elements&viewMode=story';
const functionalHeaderWithUserInteractionUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-with-user-interaction&viewMode=story';

describe('story vl-functional-header', () => {
    it('should contain a title and sub title', () => {
        cy.visit(`${functionalHeaderUrl}`);
        cy.getDataCy('functional-header')
            .shadow()
            .find('a.vl-functional-header__title')
            .contains('School- en studietoelagen');

        cy.getDataCy('functional-header')
            .shadow()
            .find('li.vl-functional-header__sub__action')
            .contains('Voor lager, middelbaar en hoger onderwijs');
    });

    it('should contain a title and sub title when using slots', () => {
        cy.visit(`${functionalHeaderWithSlotsUrl}`);
        cy.getDataCy('functional-header-with-slot-elements')
            .find('span[slot="title"]')
            .contains('School- en studietoelagen');

        cy.getDataCy('functional-header-with-slot-elements')
            .find('span[slot="sub-title"]')
            .contains('Voor lager, middelbaar en hoger onderwijs');
    });

    it('should contain a clickable title link', () => {
        cy.visit(`${functionalHeaderUrl}`);
        cy.getDataCy('functional-header')
            .shadow()
            .find('a.vl-functional-header__title')
            .should('have.attr', 'href', '#')
            .should('have.attr', 'tabindex', '0');
    });

    it('should contain a clickable action link', () => {
        cy.visit(`${functionalHeaderWithUserInteractionUrl}`);
        cy.getDataCy('functional-header-with-user-interaction')
            .shadow()
            .find('.vl-functional-header__actions')
            .find('.vl-functional-header__action a')
            .should('have.attr', 'href', '#')
            .contains('Koen Peeters');
    });
});
