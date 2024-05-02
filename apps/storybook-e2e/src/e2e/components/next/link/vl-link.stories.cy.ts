const linkNextDefaultUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-default&viewMode=story';
const linkNextBoldUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-bold&viewMode=story';
const linkNextSmallUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-small&viewMode=story';
const linkNextLargeUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-large&viewMode=story';
const linkNextErrorUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-error&viewMode=story';
const linkNextExternalUrl = 'http://localhost:8080/iframe.html?id=components-next-link--link-external&viewMode=story';

describe('story - vl-link-next - default', () => {
    it('should render', () => {
        cy.visit(linkNextDefaultUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});

describe('story - vl-link-next - bold', () => {
    it('should render', () => {
        cy.visit(linkNextBoldUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});

describe('story - vl-link-next - small', () => {
    it('should render', () => {
        cy.visit(linkNextSmallUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});

describe('story - vl-link-next - large', () => {
    it('should render', () => {
        cy.visit(linkNextLargeUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});

describe('story - vl-link-next - error', () => {
    it('should render', () => {
        cy.visit(linkNextErrorUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});

describe('story - vl-link-next - external', () => {
    it('should render', () => {
        cy.visit(linkNextExternalUrl);

        cy.get('vl-link-next').shadow().find('a');
    });
});
