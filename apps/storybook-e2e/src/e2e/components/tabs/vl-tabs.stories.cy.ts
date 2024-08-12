const tabsUrl = 'http://localhost:8080/iframe.html?args=&id=components-tabs-tabs--tabs-default&viewMode=story';
const tabsWithoutActiveUrl =
    'http://localhost:8080/iframe.html?args=&id=components-tabs-tabs--tabs-without-active-tab&viewMode=story';
const tabsDynamicUrl = 'http://localhost:8080/iframe.html?args=&id=components-tabs-tabs--tabs-dynamic&viewMode=story';

const shouldHaveTabWithTitle = (selector: string, title: string) => {
    cy.get('vl-tabs').shadow().find('ul.vl-tabs').find(selector).find('a').find('slot').contains(title);
};

describe('story vl-tabs - no active tab', () => {
    it('should display the story', () => {
        cy.visit(tabsWithoutActiveUrl);
        cy.get('vl-tabs').shadow();
    });
});

describe('story vl-tabs - default', () => {
    it('should display the story', () => {
        cy.visit(tabsUrl);
        cy.get('vl-tabs').shadow();
    });
});

describe('story vl-tabs - dynamic', () => {
    it('should display the story and add a tab dynamically', () => {
        cy.visit(tabsDynamicUrl);

        cy.get('button#add-pane-button').click();
        shouldHaveTabWithTitle('li[data-vl-id="fiets-0"]', 'Fiets 0');
    });
});
