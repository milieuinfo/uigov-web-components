const tabsUrl = 'http://localhost:8080/iframe.html?id=components-tabs--tabs-default&viewMode=story';
const tabsDynamicUrl = 'http://localhost:8080/iframe.html?id=components-tabs--tabs-dynamic&viewMode=story';

const shouldHaveTabWithTitle = (selector: string, title: string) => {
    cy.get('vl-tabs').shadow().find('ul.vl-tabs').find(selector).find('a').find('slot').contains(title);
};

const shouldBeVisible = (selector: string) => {
    cy.get('vl-tabs')
        .shadow()
        .find(selector)
        .should('have.attr', 'data-vl-show', 'true')
        .should('have.css', 'display', 'block');
};

const shouldBeHidden = (selector: string) => {
    cy.get('vl-tabs')
        .shadow()
        .find(selector)
        .should('have.attr', 'data-vl-show', 'false')
        .should('have.css', 'display', 'none');
};

describe('story vl-tabs default', () => {
    it('should contain three tabs with titles', () => {
        cy.visit(tabsUrl);

        shouldHaveTabWithTitle('li[data-vl-id="trein"]', 'Trein');
        shouldHaveTabWithTitle('li[data-vl-id="metro"]', 'Metro, tram en bus');
        shouldHaveTabWithTitle('li[data-vl-id="fiets"]', 'Fiets');
    });

    it('should show/hide content on click tab', () => {
        cy.visit(tabsUrl);

        cy.get('vl-tabs').shadow().find('a#trein').click();
        shouldBeVisible('section#trein-pane');
        shouldBeHidden('section#metro-pane');
        shouldBeHidden('section#fiets-pane');

        cy.get('vl-tabs').shadow().find('a#metro').click();
        shouldBeHidden('section#trein-pane');
        shouldBeVisible('section#metro-pane');
        shouldBeHidden('section#fiets-pane');

        cy.get('vl-tabs').shadow().find('a#fiets').click();
        shouldBeHidden('section#trein-pane');
        shouldBeHidden('section#metro-pane');
        shouldBeVisible('section#fiets-pane');
    });

    it('should set active-tab', () => {
        cy.visit(`${tabsUrl}&args=activeTab:metro`);

        shouldBeHidden('section#trein-pane');
        shouldBeVisible('section#metro-pane');
        shouldBeHidden('section#fiets-pane');
    });

    it('should emit event on click tab', () => {
        cy.visit(`${tabsUrl}&args=activeTab:null`);

        cy.createStubForEvent('vl-tabs', 'change');
        cy.get('vl-tabs').shadow().find('a#trein').click();
        cy.get('@change').should('have.been.calledOnce');
    });

    it('should open/close tablist on mobile', () => {
        cy.viewport(550, 750);
        cy.visit(tabsUrl);

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

describe('story vl-tabs dynamic', () => {
    it('should add tab dynamically', () => {
        cy.visit(tabsDynamicUrl);

        cy.get('button#add-pane-button').click();
        shouldHaveTabWithTitle('li[data-vl-id="fiets-0"]', 'Fiets 0');
    });
});
