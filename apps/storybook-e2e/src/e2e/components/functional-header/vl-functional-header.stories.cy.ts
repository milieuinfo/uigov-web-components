const functionalHeaderUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-default&viewMode=story';
const functionalHeaderActionsUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-actions&viewMode=story';
const functionalHeaderTabsUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-tabs&viewMode=story';
const functionalHeaderBreadcrumbUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-breadcrumb&viewMode=story';
const functionalHeaderSlotsUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-slots&viewMode=story';

const shouldHaveDefaultBackText = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').contains('Terug');
};

const shouldSetBackText = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').contains('Keer terug');
};

const shouldHaveDefaultBackLink = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').should('have.attr', 'href', '');
};

const shouldSetBackLink = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').should('have.attr', 'href', 'test');
};

const shouldDisableBackLinkAndEmitEvent = () => {
    cy.createStubForEvent('vl-functional-header', 'vl-click-back');
    cy.get('vl-functional-header').shadow().find('a#back-link').click();
    cy.get('@vl-click-back').should('have.been.calledOnce');
};

const shouldSetTitleLink = () => {
    cy.get('vl-functional-header')
        .shadow()
        .find('.vl-functional-header__title')
        .find('a')
        .should('have.attr', 'href', 'test');
};

const shouldSetSubTitleText = () => {
    cy.get('vl-functional-header')
        .shadow()
        .find('li.vl-functional-header__sub__action')
        .contains('Voor lager onderwijs');
};

const shouldSetTitleText = () => {
    cy.get('vl-functional-header')
        .shadow()
        .find('.vl-functional-header__title')
        .find('a')
        .contains('School en studietoelagen');
};

describe('story vl-functional-header default', () => {
    it('should have default back text', () => {
        cy.visit(functionalHeaderUrl);

        shouldHaveDefaultBackText();
    });

    it('should set back text', () => {
        cy.visit(`${functionalHeaderUrl}&args=back:Keer+terug`);

        shouldSetBackText();
    });

    it('should have default back link', () => {
        cy.visit(functionalHeaderUrl);

        shouldHaveDefaultBackLink();
    });

    it('should set back link', () => {
        cy.visit(`${functionalHeaderUrl}&args=backLink:test`);

        shouldSetBackLink();
    });

    it('should disable back link and emit event', () => {
        cy.visit(`${functionalHeaderUrl}&args=disableBackLink:true`);

        shouldDisableBackLinkAndEmitEvent();
    });

    it('should set title link', () => {
        cy.visit(`${functionalHeaderUrl}&args=link:test`);

        shouldSetTitleLink();
    });

    it('should set sub title text', () => {
        cy.visit(`${functionalHeaderUrl}&args=subTitle:Voor+lager+onderwijs`);

        shouldSetSubTitleText();
    });

    it('should set title text', () => {
        cy.visit(`${functionalHeaderUrl}&args=title:School+en+studietoelagen`);

        shouldSetTitleText();
    });
});

describe('story vl-functional-header actions', () => {
    it('should have default back text', () => {
        cy.visit(functionalHeaderActionsUrl);

        shouldHaveDefaultBackText();
    });

    it('should set back text', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=back:Keer+terug`);

        shouldSetBackText();
    });

    it('should have default back link', () => {
        cy.visit(functionalHeaderActionsUrl);

        shouldHaveDefaultBackLink();
    });

    it('should set back link', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=backLink:test`);

        shouldSetBackLink();
    });

    it('should disable back link and emit event', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=disableBackLink:true`);

        shouldDisableBackLinkAndEmitEvent();
    });

    it('should set title link', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=link:test`);

        shouldSetTitleLink();
    });

    it('should set sub title text', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=subTitle:Voor+lager+onderwijs`);

        shouldSetSubTitleText();
    });

    it('should set title text', () => {
        cy.visit(`${functionalHeaderActionsUrl}&args=title:School+en+studietoelagen`);

        shouldSetTitleText();
    });

    it('should set actions slot', () => {
        cy.visit(functionalHeaderActionsUrl);

        cy.get('vl-functional-header')
            .shadow()
            .find('div.vl-functional-header__actions')
            .find('li.vl-functional-header__action')
            .find('a')
            .should('have.attr', 'href', '#')
            .contains('Actie 1');

        cy.get('vl-functional-header')
            .shadow()
            .find('div.vl-functional-header__actions')
            .find('li.vl-functional-header__action')
            .find('a')
            .should('have.attr', 'href', '#')
            .contains('Actie 2');
    });
});

describe('story vl-functional-header tabs', () => {
    it('should set title link', () => {
        cy.visit(`${functionalHeaderTabsUrl}&args=link:test`);

        shouldSetTitleLink();
    });

    it('should set title text', () => {
        cy.visit(`${functionalHeaderTabsUrl}&args=title:School+en+studietoelagen`);

        shouldSetTitleText();
    });

    it('should have three tabs with titles', () => {
        cy.visit(functionalHeaderTabsUrl);

        cy.get('vl-tabs')
            .shadow()
            .find('ul.vl-tabs')
            .find('li[data-vl-id="trein"]')
            .find('a')
            .find('slot')
            .contains('Trein');

        cy.get('vl-tabs')
            .shadow()
            .find('ul.vl-tabs')
            .find('li[data-vl-id="metro"]')
            .find('a')
            .find('slot')
            .contains('Metro, tram en bus');

        cy.get('vl-tabs')
            .shadow()
            .find('ul.vl-tabs')
            .find('li[data-vl-id="fiets"]')
            .find('a')
            .find('slot')
            .contains('Fiets');
    });

    it('should emit event on click tab', () => {
        cy.visit(functionalHeaderTabsUrl);

        cy.createStubForEvent('vl-tabs', 'change');
        cy.get('vl-tabs').shadow().find('button[data-vl-tabs-toggle]').click();
        cy.get('vl-tabs').shadow().find('a#trein').click();
        cy.get('@change').should('have.been.calledOnce');
    });

    it('should open/close tablist on mobile', () => {
        cy.viewport(550, 750);
        cy.visit(functionalHeaderTabsUrl);

        cy.get('vl-tabs').shadow().find('ul#tab-list').should('have.attr', 'data-vl-show', 'false');
        cy.get('vl-tabs').shadow().find('button.vl-tabs__toggle').click();
        cy.get('vl-tabs').shadow().find('ul#tab-list').should('have.attr', 'data-vl-show', 'true');
        cy.get('vl-tabs').shadow().find('button.vl-tabs__toggle').click();
        cy.get('vl-tabs').shadow().find('ul#tab-list').should('have.attr', 'data-vl-show', 'false');
        cy.get('vl-tabs').shadow().find('button.vl-tabs__toggle').click();
        cy.get('vl-tabs').shadow().find('ul#tab-list').should('have.attr', 'data-vl-show', 'true');
        cy.get('vl-tabs').shadow().find('a#trein').click();
        cy.get('vl-tabs').shadow().find('ul#tab-list').should('have.attr', 'data-vl-show', 'false');
    });
});

describe('story vl-functional-header breadcrumb', () => {
    it('should set title link', () => {
        cy.visit(`${functionalHeaderBreadcrumbUrl}&args=link:test`);

        shouldSetTitleLink();
    });

    it('should set title text', () => {
        cy.visit(`${functionalHeaderBreadcrumbUrl}&args=title:School+en+studietoelagen`);

        shouldSetTitleText();
    });

    it('should contain 4 breadcrumb items', () => {
        cy.visit(functionalHeaderBreadcrumbUrl);

        cy.get('vl-breadcrumb')
            .shadow()
            .find('.vl-breadcrumb__list')
            .children('.vl-breadcrumb__list__item')
            .should('have.length', 4);
    });

    it('should contain correct breadcrumb items', () => {
        cy.visit(functionalHeaderBreadcrumbUrl);

        cy.get('vl-breadcrumb')
            .find('vl-breadcrumb-item')
            .first()
            .contains('Vlaanderen Intern')
            .next()
            .contains('Regelgeving')
            .next()
            .contains('Webuniversum')
            .next()
            .contains('Componenten');
    });

    it('should set correct links for breadcrumb items', () => {
        cy.visit(functionalHeaderBreadcrumbUrl);

        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(0).shadow().find('a').should('have.attr', 'href', '1');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(1).shadow().find('a').should('have.attr', 'href', '2');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(2).shadow().find('a').should('have.attr', 'href', '3');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(3).shadow().find('span');
    });
});

describe('story vl-functional-header slots', () => {
    it('should set title slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header')
            .shadow()
            .find('.vl-functional-header__title')
            .find('a')
            .find('slot[name="title"]');
        cy.get('vl-functional-header').find('span[slot="title"]').contains('School- en studietoelagen');
    });

    it('should set sub header slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header').shadow().find('div.vl-functional-header__sub').find('slot[name="sub-header"]');
        cy.get('vl-functional-header').find('span[slot="sub-header"]').contains('Sub header content');
    });

    it('should set sub title slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header')
            .shadow()
            .find('li.vl-functional-header__sub__action')
            .find('slot[name="sub-title"]');

        cy.get('vl-functional-header')
            .find('span[slot="sub-title"]')
            .contains('Voor lager, middelbaar en hoger onderwijs');
    });

    it('should set back link slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header')
            .shadow()
            .find('li.vl-functional-header__sub__action')
            .find('slot[name="back-link"]');

        cy.get('vl-functional-header').find('a[slot="back-link"]').should('have.attr', 'href', '#').contains('Terug');
    });

    it('should set back slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header').shadow().find('li.vl-functional-header__sub__action').find('slot[name="back"]');
        cy.get('vl-functional-header').find('span[slot="back"]').contains('Terug');
    });

    it('should set top-left slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header').shadow().find('div.vl-functional-header__content').find('slot[name="top-left"]');
        cy.get('vl-functional-header').find('span[slot="top-left"]').contains('Linkerbovenhoek content');
    });

    it('should set top-right slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header')
            .shadow()
            .find('div.uig-functional-header__top-right')
            .find('slot[name="top-right"]');

        cy.get('vl-functional-header').find('span[slot="top-right"]').contains('Rechterbovenhoek content');
    });
});
