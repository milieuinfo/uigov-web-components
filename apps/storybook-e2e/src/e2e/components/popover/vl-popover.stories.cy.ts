const popoverDefaultUrl = 'http://localhost:8080/iframe.html?id=components-popover--popover-default&viewMode=story';
const popoverHoverUrl = 'http://localhost:8080/iframe.html?id=components-popover--popover-hover&viewMode=story';

describe('story vl-popover default', () => {
    it('should display story', () => {
        cy.visit(popoverDefaultUrl);
    });
});

describe('story vl-popover hover', () => {
    it('should display story', () => {
        cy.visit(popoverHoverUrl);
    });
});
