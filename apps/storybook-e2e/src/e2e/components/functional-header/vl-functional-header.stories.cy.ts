const functionalHeaderUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-default&viewMode=story';
const functionalHeaderActionsUrl =
    'http://localhost:8080/iframe.html?id=components-functional-header--functional-header-actions&viewMode=story';
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
    // De event listener wordt toegevoegd op het document omdat vl-functional-header geen property 'addEventListener' heeft volgens Cypress.
    // Aangezien bubbles op true staat voor het event werkt dit.
    cy.document().invoke('addEventListener', 'vl-click-back', cy.stub().as('vl-click-back'));
    cy.get('vl-functional-header').shadow().find('a#back-link').click();
    cy.get('@vl-click-back').should('have.been.calledOnce');
};

const shouldSetTitleLink = () => {
    cy.get('vl-functional-header').shadow().find('a.vl-functional-header__title').should('have.attr', 'href', 'test');
};

const shouldSetSubTitleText = () => {
    cy.get('vl-functional-header')
        .shadow()
        .find('li.vl-functional-header__sub__action')
        .contains('Voor lager onderwijs');
};

const shouldSetTitleText = () => {
    cy.get('vl-functional-header').shadow().find('a.vl-functional-header__title').contains('School en studietoelagen');
};

describe('story vl-functional-header-default', () => {
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

describe('story vl-functional-header-actions', () => {
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

describe('story vl-functional-header-slots', () => {
    it('should set title slot', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header').shadow().find('a.vl-functional-header__title').find('slot[name="title"]');
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
