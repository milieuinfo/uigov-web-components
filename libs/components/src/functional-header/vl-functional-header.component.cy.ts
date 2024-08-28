import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlFunctionalHeaderComponent } from './vl-functional-header.component';
import { VlBreadcrumbComponent } from './../breadcrumb';
import { VlTabsComponent } from './../tabs';

registerWebComponents([VlFunctionalHeaderComponent, VlTabsComponent, VlBreadcrumbComponent]);

describe('story - vl-functional-header', () => {
    it('should be accessible', () => {
        cy.mount(html` <vl-functional-header title="test"> </vl-functional-header>`);

        cy.injectAxe();
        cy.checkA11y();
    });

    it('should have default back text', () => {
        cy.mount(html` <vl-functional-header> </vl-functional-header>`);

        shouldHaveDefaultBackText();
    });

    it('should set back text', () => {
        cy.mount(html` <vl-functional-header data-vl-back="Keer terug"> </vl-functional-header>`);

        shouldSetBackText();
    });

    it('should have default back link', () => {
        cy.mount(html` <vl-functional-header> </vl-functional-header>`);

        shouldHaveDefaultBackLink();
    });

    it('should set back link', () => {
        cy.mount(html` <vl-functional-header data-vl-back-link="test"> </vl-functional-header>`);

        shouldSetBackLink();
    });

    it('should hide back link', () => {
        cy.mount(html` <vl-functional-header data-vl-hide-back-link=""> </vl-functional-header>`);

        cy.get('vl-functional-header').shadow().find('a#back-link').should('not.exist');
    });

    it('should hide sub-header', () => {
        cy.mount(html` <vl-functional-header data-vl-hide-sub-header=""> </vl-functional-header>`);

        cy.get('vl-functional-header')
            .shadow()
            .find('#sub-header')
            .should('have.class', 'sub-header-hidden')
            .shouldHaveComputedStyle({ style: 'padding-bottom', value: '13px' })
            .find('slot')
            .and('not.be.visible');
    });

    it('should disable back link and emit event', () => {
        cy.mount(html` <vl-functional-header data-vl-disable-back-link=""> </vl-functional-header>`);

        shouldDisableBackLinkAndEmitEvent();
    });

    it('should set title link', () => {
        cy.mount(html` <vl-functional-header data-vl-link="test"> </vl-functional-header>`);

        shouldSetTitleLink();
    });

    it('should set sub title text', () => {
        cy.mount(html` <vl-functional-header data-vl-sub-title="Voor lager onderwijs"> </vl-functional-header>`);

        shouldSetSubTitleText();
    });

    it('should set title text', () => {
        cy.mount(html` <vl-functional-header data-vl-title="School en studietoelagen"> </vl-functional-header>`);

        shouldSetTitleText();
    });
});

describe('story - vl-functional-header - actions', () => {
    it('should be accessible', () => {
        cy.mount(html`
            <vl-functional-header title="test">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        cy.injectAxe();
        cy.checkA11y();
    });

    it('should have default back text', () => {
        cy.mount(html`
            <vl-functional-header>
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldHaveDefaultBackText();
    });

    it('should set back text', () => {
        cy.mount(html`
            <vl-functional-header data-vl-back="Keer terug">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldSetBackText();
    });

    it('should have default back link', () => {
        cy.mount(html`
            <vl-functional-header>
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldHaveDefaultBackLink();
    });

    it('should set back link', () => {
        cy.mount(html`
            <vl-functional-header data-vl-back-link="test">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldSetBackLink();
    });

    it('should disable back link and emit event', () => {
        cy.mount(html`
            <vl-functional-header data-vl-disable-back-link="">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldDisableBackLinkAndEmitEvent();
    });

    it('should set title link', () => {
        cy.mount(html`
            <vl-functional-header data-vl-link="test">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldSetTitleLink();
    });

    it('should set sub title text', () => {
        cy.mount(html`
            <vl-functional-header data-vl-sub-title="Voor lager onderwijs">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldSetSubTitleText();
    });

    it('should set title text', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

        shouldSetTitleText();
    });

    it('should set actions slot', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <div slot="actions">
                    <a href="#">Actie 1</a>
                    <a href="#">Actie 2</a>
                </div>
            </vl-functional-header>
        `);

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

describe('story - vl-functional-header - tabs', () => {
    it('should be accessible', () => {
        cy.mount(html`
            <vl-functional-header title="test">
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

        cy.injectAxe();
        cy.checkA11y();
    });

    it('should set title link', () => {
        cy.mount(html`
            <vl-functional-header data-vl-link="test">
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

        shouldSetTitleLink();
    });

    it('should set title text', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

        shouldSetTitleText();
    });

    it('should have three tabs with titles', () => {
        cy.mount(html`
            <vl-functional-header>
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

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
        cy.mount(html`
            <vl-functional-header>
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

        cy.createStubForEvent('vl-tabs', 'change');
        cy.get('vl-tabs').shadow().find('button[data-vl-tabs-toggle]').click({ force: true });
        cy.get('vl-tabs').shadow().find('a#trein').click({ force: true });
        cy.get('@change').should('have.been.calledOnce');
    });

    it('should open/close tablist on mobile', () => {
        cy.viewport(550, 750);
        cy.mount(html`
            <vl-functional-header>
                <vl-tabs
                    slot="sub-header"
                    data-vl-disable-links
                    data-vl-within-functional-header
                    data-vl-active-tab="trein"
                >
                    <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                    <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
                </vl-tabs>
            </vl-functional-header>
        `);

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

describe('story - vl-functional-header - breadcrumb', () => {
    it('should be accessible', () => {
        cy.mount(html`
            <vl-functional-header title="test">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

        cy.injectAxe();
        cy.checkA11y();
    });

    it('should set title link', () => {
        cy.mount(html`
            <vl-functional-header data-vl-link="test">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

        shouldSetTitleLink();
    });

    it('should set title text', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

        shouldSetTitleText();
    });

    it('should contain 4 breadcrumb items', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

        cy.get('vl-breadcrumb')
            .shadow()
            .find('.vl-breadcrumb__list')
            .children('.vl-breadcrumb__list__item')
            .should('have.length', 4);
    });

    it('should contain correct breadcrumb items', () => {
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

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
        cy.mount(html`
            <vl-functional-header data-vl-title="School en studietoelagen">
                <vl-breadcrumb slot="sub-title">
                    <vl-breadcrumb-item data-vl-href="1">Vlaanderen Intern</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="2">Regelgeving</vl-breadcrumb-item>
                    <vl-breadcrumb-item data-vl-href="3">Webuniversum</vl-breadcrumb-item>
                    <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
                </vl-breadcrumb>
            </vl-functional-header>
        `);

        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(0).shadow().find('a').should('have.attr', 'href', '1');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(1).shadow().find('a').should('have.attr', 'href', '2');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(2).shadow().find('a').should('have.attr', 'href', '3');
        cy.get('vl-breadcrumb').find('vl-breadcrumb-item').eq(3).shadow().find('span');
    });
});

describe('story - vl-functional-header - slots', () => {
    it('should be accessible', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.injectAxe();
        cy.checkA11y();
    });

    it('should set title slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="title">School- en studietoelagen</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header')
            .shadow()
            .find('.vl-functional-header__title')
            .find('a')
            .find('slot[name="title"]');
        cy.get('vl-functional-header').find('span[slot="title"]').contains('School- en studietoelagen');
    });

    it('should set sub header slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header').shadow().find('div.vl-functional-header__sub').find('slot[name="sub-header"]');
        cy.get('vl-functional-header').find('span[slot="sub-header"]').contains('Sub header content');
    });

    it('should set sub title slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header')
            .shadow()
            .find('li.vl-functional-header__sub__action')
            .find('slot[name="sub-title"]');

        cy.get('vl-functional-header')
            .find('span[slot="sub-title"]')
            .contains('Voor lager, middelbaar en hoger onderwijs');
    });

    it('should set back link slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header')
            .shadow()
            .find('li.vl-functional-header__sub__action')
            .find('slot[name="back-link"]');

        cy.get('vl-functional-header').find('a[slot="back-link"]').should('have.attr', 'href', '#').contains('Terug');
    });

    it('should set back slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header').shadow().find('li.vl-functional-header__sub__action').find('slot[name="back"]');
        cy.get('vl-functional-header').find('span[slot="back"]').contains('Terug');
    });

    it('should set top-left slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header').shadow().find('div.vl-functional-header__content').find('slot[name="top-left"]');
        cy.get('vl-functional-header').find('span[slot="top-left"]').contains('Linkerbovenhoek content');
    });

    it('should set top-right slot', () => {
        cy.mount(html`
            <vl-functional-header>
                <span slot="back">Terug</span>
                <a slot="back-link" href="#">Terug</a>
                <span slot="sub-header">Sub header content</span>
                <span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>
                <span slot="title">School- en studietoelagen</span>
                <span slot="top-left">Linkerbovenhoek content</span>
                <span slot="top-right">Rechterbovenhoek content</span>
            </vl-functional-header>
        `);

        cy.get('vl-functional-header')
            .shadow()
            .find('div.uig-functional-header__top-right')
            .find('slot[name="top-right"]');

        cy.get('vl-functional-header').find('span[slot="top-right"]').contains('Rechterbovenhoek content');
    });
});

const shouldHaveDefaultBackText = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').contains('Terug');
};

const shouldSetBackText = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').contains('Keer terug');
};

const shouldHaveDefaultBackLink = () => {
    cy.get('vl-functional-header').shadow().find('a#back-link').should('have.attr', 'href', document.referrer);
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
