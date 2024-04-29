const propertiesDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-properties--properties-default&viewMode=story';
const propertiesWithPropsUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-properties--properties-with-props&viewMode=story';
const propertiesHtmlEnrichedUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-properties--properties-html-enriched&viewMode=story';
const propertiesCollapsedUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-properties--properties-collapsed&viewMode=story';
const propertiesColumnsUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-properties--properties-columns&viewMode=story';

describe('story - vl-properties-next - default', () => {
    it('should render', () => {
        cy.visit(propertiesDefaultUrl);

        cy.get('vl-properties-next').shadow().find('dl');
    });
});

describe('story - vl-properties-next - with props', () => {
    it('should render', () => {
        cy.visit(propertiesWithPropsUrl);

        cy.get('vl-properties-next').shadow().find('dl');
    });
});

describe('story - vl-properties-next - html enriched', () => {
    it('should render', () => {
        cy.visit(propertiesHtmlEnrichedUrl);

        cy.get('vl-properties-next').shadow().find('dl');
    });
});

describe('story - vl-properties-next - collapsed', () => {
    it('should render', () => {
        cy.visit(propertiesCollapsedUrl);

        cy.get('vl-properties-next').shadow().find('dl');
    });
});

describe('story - vl-properties-next - columns', () => {
    it('should render', () => {
        cy.visit(propertiesColumnsUrl);

        cy.get('vl-properties-next').shadow().find('dl');
    });
});
