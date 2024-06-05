const iconNextDefaultUrl = 'http://localhost:8080/iframe.html?id=components-next-icon--icon-default&viewMode=story';
const iconNextSmallUrl = 'http://localhost:8080/iframe.html?id=components-next-icon--icon-small&viewMode=story';
const iconNextLargeUrl = 'http://localhost:8080/iframe.html?id=components-next-icon--icon-large&viewMode=story';
const iconNextLightUrl = 'http://localhost:8080/iframe.html?id=components-next-icon--icon-light&viewMode=story';
const iconNextClickableUrl = 'http://localhost:8080/iframe.html?id=components-next-icon--icon-clickable&viewMode=story';
const iconNextBeforeTextUrl =
    'http://localhost:8080/iframe.html?id=components-next-icon--icon-before-text&viewMode=story';
const iconNextAfterTextUrl =
    'http://localhost:8080/iframe.html?id=components-next-icon--icon-after-text&viewMode=story';

describe('story - vl-icon-next - default', () => {
    it('should render', () => {
        cy.visit(iconNextDefaultUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - small', () => {
    it('should render', () => {
        cy.visit(iconNextSmallUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - large', () => {
    it('should render', () => {
        cy.visit(iconNextLargeUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - light', () => {
    it('should render', () => {
        cy.visit(iconNextLightUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - clickable', () => {
    it('should render', () => {
        cy.visit(iconNextClickableUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - before text', () => {
    it('should render', () => {
        cy.visit(iconNextBeforeTextUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});

describe('story - vl-icon-next - after text', () => {
    it('should render', () => {
        cy.visit(iconNextAfterTextUrl);

        cy.get('vl-icon-next').shadow().find('span.vl-icon');
    });
});
