const popoverDefaultUrl = 'http://localhost:8080/iframe.html?id=components-popover--popover-default&viewMode=story';
const popoverHoverUrl = 'http://localhost:8080/iframe.html?id=components-popover--popover-hover&viewMode=story';
describe('story vl-popover default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(popoverDefaultUrl);
        cy.get('a#btn-acties').click({ force: true });
        cy.checkA11y('vl-popover');
    });

    it('should open', () => {
        cy.visit(popoverDefaultUrl);
        cy.get('a#btn-acties').click({ force: true });
        cy.get('vl-popover').should('have.attr', 'data-vl-open');
        cy.get('a#btn-acties').click({ force: true });
        cy.get('vl-popover').should('not.have.attr', 'data-vl-open');
    });

    it('should have default bottom placement', () => {
        cy.visit(popoverDefaultUrl);
        cy.get('a#btn-acties').click({ force: true });
        cy.get('vl-popover').should('have.attr', 'data-vl-placement', 'bottom-start');
    });
});

describe('story vl-popover hover', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(popoverHoverUrl);
        cy.get('button#btn-close').trigger('mouseover');
        cy.checkA11y('vl-popover');
    });

    it('should open', () => {
        cy.visit(popoverHoverUrl);
        cy.get('button#btn-close').trigger('mouseover');
        cy.get('vl-popover').should('have.attr', 'data-vl-open');
    });

    it('should have default bottom placement', () => {
        cy.visit(popoverHoverUrl);
        cy.get('button#btn-close').trigger('mouseover');
        cy.get('vl-popover').should('have.attr', 'data-vl-placement', 'bottom');
    });
});
