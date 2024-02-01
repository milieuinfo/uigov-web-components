const selectNextDefaultUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-default&viewMode=story';

const selectNextSearchUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-search&viewMode=story';

const selectNextDeletableUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-deletable&viewMode=story';

const selectNextGroupsUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-groups&viewMode=story';

const selectNextMultipleUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-multiple&viewMode=story';

const selectNextSelectedOptionUrl =
    'http://localhost:8080/iframe.html?id=form-next-select--select-selected-option&viewMode=story';

const selectNextDisabledOptionUrl =
    'http://localhost:8080/iframe.html?id=form-next-select--select-disabled-option&viewMode=story';

const selectNextReadOnlyUrl = 'http://localhost:8080/iframe.html?id=form-next-select--select-read-only&viewMode=story';

describe('story - vl-select-next - default', () => {
    it('should render', () => {
        cy.visit(selectNextDefaultUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - search', () => {
    it('should render', () => {
        cy.visit(selectNextSearchUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - deletable', () => {
    it('should render', () => {
        cy.visit(selectNextDeletableUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - groups', () => {
    it('should render', () => {
        cy.visit(selectNextGroupsUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - multiple', () => {
    it('should render', () => {
        cy.visit(selectNextMultipleUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - selected option', () => {
    it('should render', () => {
        cy.visit(selectNextSelectedOptionUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - disabled option', () => {
    it('should render', () => {
        cy.visit(selectNextDisabledOptionUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});

describe('story - vl-select-next - read only', () => {
    it('should render', () => {
        cy.visit(selectNextReadOnlyUrl);

        cy.get('vl-select-next').shadow().find('select');
    });
});
