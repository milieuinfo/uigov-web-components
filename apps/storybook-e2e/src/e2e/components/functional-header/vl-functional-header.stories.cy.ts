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

describe('story - vl-functional-header - default', () => {
    it('should render', () => {
        cy.visit(functionalHeaderUrl);

        cy.get('vl-functional-header').shadow().find('header');
    });
});

describe('story - vl-functional-header - actions', () => {
    it('should render', () => {
        cy.visit(functionalHeaderActionsUrl);

        cy.get('vl-functional-header').shadow().find('header');
    });
});

describe('story - vl-functional-header - tabs', () => {
    it('should render', () => {
        cy.visit(functionalHeaderTabsUrl);

        cy.get('vl-functional-header').shadow().find('header');
    });
});

describe('story - vl-functional-header - breadcrumb', () => {
    it('should render', () => {
        cy.visit(functionalHeaderBreadcrumbUrl);

        cy.get('vl-functional-header').shadow().find('header');
    });
});

describe('story - vl-functional-header - slots', () => {
    it('should render', () => {
        cy.visit(functionalHeaderSlotsUrl);

        cy.get('vl-functional-header').shadow().find('header');
    });
});
