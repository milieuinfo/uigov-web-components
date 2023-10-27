const doormatDefaultUrl =
    'http://localhost:8080/iframe.html?id=elements-doormat-doormat--doormat-default&viewMode=story';
const doormatWithImageUrl =
    'http://localhost:8080/iframe.html?id=elements-doormat-doormat-image--doormat-with-image&viewMode=story';

describe('story elements / button / vl-doormat - default', () => {
    it('should contain a doormat', () => {
        cy.visit(`${doormatDefaultUrl}`);
        cy.getDataCy('doormat').should('have.class', 'vl-doormat');
    });

    it('should contain a doormat with alt styling', () => {
        cy.visit(`${doormatDefaultUrl}&args=alt:true`);
        cy.getDataCy('doormat').should('have.class', 'vl-doormat--alt');
    });

    it('should contain a doormat with an image', () => {
        cy.visit(`${doormatWithImageUrl}`);
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat')
            .getDataCy('doormat-image')
            .should('have.class', 'vl-doormat__image');
    });

    it('should contain a doormat with an image with graphic styling', () => {
        cy.visit(`${doormatWithImageUrl}&args=graphic:true`);
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat')
            .getDataCy('doormat-image')
            .should('have.class', 'vl-doormat__graphic');
    });
});
