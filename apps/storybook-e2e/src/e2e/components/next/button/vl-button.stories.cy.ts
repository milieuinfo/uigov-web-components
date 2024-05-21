const buttonNextPrimaryUrl =
    'http://localhost:8080/iframe.html?id=components-next-button--button-primary&viewMode=story';
const buttonNextSecondaryUrl =
    'http://localhost:8080/iframe.html?id=components-next-button--button-secondary&viewMode=story';
const buttonNextTertiaryUrl =
    'http://localhost:8080/iframe.html?id=components-next-button--button-tertiary&viewMode=story';
const buttonNextDisabledUrl =
    'http://localhost:8080/iframe.html?id=components-next-button--button-disabled&viewMode=story';
const buttonNextErrorUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-error&viewMode=story';
const buttonNextBlockUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-block&viewMode=story';
const buttonNextLargeUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-large&viewMode=story';
const buttonNextWideUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-wide&viewMode=story';
const buttonNextNarrowUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-narrow&viewMode=story';
const buttonNextLoadingUrl =
    'http://localhost:8080/iframe.html?id=components-next-button--button-loading&viewMode=story';
const buttonNextToggleUrl = 'http://localhost:8080/iframe.html?id=components-next-button--button-toggle&viewMode=story';

describe('story - vl-button-next - default', () => {
    it('should render', () => {
        cy.visit(buttonNextPrimaryUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - secondary', () => {
    it('should render', () => {
        cy.visit(buttonNextSecondaryUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - tertiary', () => {
    it('should render', () => {
        cy.visit(buttonNextTertiaryUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - disabled', () => {
    it('should render', () => {
        cy.visit(buttonNextDisabledUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - error', () => {
    it('should render', () => {
        cy.visit(buttonNextErrorUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - block', () => {
    it('should render', () => {
        cy.visit(buttonNextBlockUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - large', () => {
    it('should render', () => {
        cy.visit(buttonNextLargeUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - wide', () => {
    it('should render', () => {
        cy.visit(buttonNextWideUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - narrow', () => {
    it('should render', () => {
        cy.visit(buttonNextNarrowUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - loading', () => {
    it('should render', () => {
        cy.visit(buttonNextLoadingUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});

describe('story - vl-button-next - toggle', () => {
    it('should render', () => {
        cy.visit(buttonNextToggleUrl);

        cy.get('vl-button-next').shadow().find('button');
    });
});
