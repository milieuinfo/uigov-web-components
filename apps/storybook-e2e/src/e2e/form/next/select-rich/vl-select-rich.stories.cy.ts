const selectRichNextDefaultUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-default&viewMode=story';

const selectRichNextSearchUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-search&viewMode=story';

const selectRichNextNotDeletableUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-not-deletable&viewMode=story';

const selectRichNextGroupsUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-groups&viewMode=story';

const selectRichNextMultipleUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-multiple&viewMode=story';

const selectRichNextSelectedOptionUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-selected-option&viewMode=story';

const selectRichNextDisabledOptionUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-disabled-option&viewMode=story';

const selectRichNextReadOnlyUrl =
    'http://localhost:8080/iframe.html?id=form-next-select-rich--select-rich-read-only&viewMode=story';

describe('story - vl-select-rich-next - default', () => {
    it('should render', () => {
        cy.visit(selectRichNextDefaultUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - search', () => {
    it('should render', () => {
        cy.visit(selectRichNextSearchUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - not-deletable', () => {
    it('should render', () => {
        cy.visit(selectRichNextNotDeletableUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - groups', () => {
    it('should render', () => {
        cy.visit(selectRichNextGroupsUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - multiple', () => {
    it('should render', () => {
        cy.visit(selectRichNextMultipleUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - selected option', () => {
    it('should render', () => {
        cy.visit(selectRichNextSelectedOptionUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - disabled option', () => {
    it('should render', () => {
        cy.visit(selectRichNextDisabledOptionUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});

describe('story - vl-select-rich-next - read only', () => {
    it('should render', () => {
        cy.visit(selectRichNextReadOnlyUrl);

        cy.get('vl-select-rich-next').shadow().find('select');
    });
});
