const mapLegendItemDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=map-legend-item--map-legend-item-default&viewMode=story';
const mapLegendItemIconUrl =
    'http://localhost:8080/iframe.html?args=&id=map-legend-item--map-legend-item-icon&viewMode=story';
const mapLegendItemLabelUrl =
    'http://localhost:8080/iframe.html?args=&id=map-legend-item--map-legend-item-label&viewMode=story';
const mapLegendItemIconLabelUrl =
    'http://localhost:8080/iframe.html?args=&id=map-legend-item--map-legend-item-icon-label&viewMode=story';

describe('story vl-map-legend-item default', () => {
    it('should display story', () => {
        cy.visit(mapLegendItemDefaultUrl);
        cy.get('vl-map-legend-item').shadow();
    });
});

describe('story vl-map-legend-item icon', () => {
    it('should display story', () => {
        cy.visit(mapLegendItemIconUrl);
        cy.get('vl-map-legend-item').shadow();
    });
});

describe('story vl-map-legend-item label', () => {
    it('should display story', () => {
        cy.visit(mapLegendItemLabelUrl);
        cy.get('vl-map-legend-item').shadow();
    });
});

describe('story vl-map-legend-item default icon and label', () => {
    it('should display story', () => {
        cy.visit(mapLegendItemIconLabelUrl);
        cy.get('vl-map-legend-item').shadow();
    });
});
