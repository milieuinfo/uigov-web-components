const propertiesUrl = 'http://localhost:8080/iframe.html?id=elements-properties--properties-default&viewMode=story';
const propertiesColumnUrl =
    'http://localhost:8080/iframe.html?id=elements-properties--properties-column&viewMode=story';

const shouldSetCollapsedClass = () => {
    cy.get('vl-properties').should('have.class', 'vl-properties--collapsed');
};

const shouldSetFullWidthClass = () => {
    cy.get('vl-properties').should('have.class', 'vl-properties--full-width');
};

describe('story vl-properties default', () => {
    it('should render properties and values', () => {
        cy.visit(propertiesUrl);

        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Voornaam');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Koen');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Naam');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Peeters');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Geslacht');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Man');
    });

    it('should set collapsed class', () => {
        cy.visit(`${propertiesUrl}&args=collapsed:true`);

        shouldSetCollapsedClass();
    });

    it('should set full-width class', () => {
        cy.visit(`${propertiesUrl}&args=fullWidth:true`);

        shouldSetFullWidthClass();
    });
});

describe('story vl-properties column', () => {
    it('should render properties and values', () => {
        cy.visit(propertiesColumnUrl);

        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Voornaam');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Koen');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Naam');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Peeters');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Geslacht');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('Man');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Telefoon');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('000/00.00.00');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('Gsm-nummer');
        cy.get('vl-properties').find('dd').should('have.class', 'vl-properties__data').contains('000/00.00.00');
        cy.get('vl-properties').find('dt').should('have.class', 'vl-properties__label').contains('E-mailadres');
        cy.get('vl-properties')
            .find('dd')
            .should('have.class', 'vl-properties__data')
            .contains('koen.peeters@outlook.be');
    });

    it('should set collapsed class', () => {
        cy.visit(`${propertiesColumnUrl}&args=collapsed:true`);

        shouldSetCollapsedClass;
    });

    it('should set full class on column', () => {
        cy.visit(`${propertiesColumnUrl}&args=full:true`);

        cy.get('vl-properties').find('[is="vl-properties-column"]').should('have.class', 'vl-properties__column--full');
    });

    it('should set full-width class', () => {
        cy.visit(`${propertiesColumnUrl}&args=fullWidth:true`);

        shouldSetFullWidthClass();
    });
});
