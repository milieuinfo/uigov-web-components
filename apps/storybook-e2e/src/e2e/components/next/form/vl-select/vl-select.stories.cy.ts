const selectNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-default&viewMode=story';

const selectNextSearchUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-search&viewMode=story';

const selectNextDeletableUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-deletable&viewMode=story';

const selectNextGroupsUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-groups&viewMode=story';

const selectNextMultipleUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-multiple&viewMode=story';

const selectNextSelectedOptionUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-selected-option&viewMode=story';

const selectNextDisabledOptionUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-disabled-option&viewMode=story';

const selectNextReadOnlyUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-select-next--select-read-only&viewMode=story';

describe('story vl-select-next default', () => {
    it('should display story', () => {
        cy.visit(selectNextDefaultUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next search', () => {
    it('should display story', () => {
        cy.visit(selectNextSearchUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next deletable', () => {
    it('should display story', () => {
        cy.visit(selectNextDeletableUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next groups', () => {
    it('should display story', () => {
        cy.visit(selectNextGroupsUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next multiple', () => {
    it('should display story', () => {
        cy.visit(selectNextMultipleUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next selected option', () => {
    it('should display story', () => {
        cy.visit(selectNextSelectedOptionUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next disabled option', () => {
    it('should display story', () => {
        cy.visit(selectNextDisabledOptionUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story vl-select-next read only', () => {
    it('should display story', () => {
        cy.visit(selectNextReadOnlyUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});
