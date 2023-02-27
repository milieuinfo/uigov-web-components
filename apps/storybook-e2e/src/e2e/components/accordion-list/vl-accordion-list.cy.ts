const accordionListUrl =
    'http://localhost:8080/iframe.html?id=components-accordion-list--accordion-list-default&viewMode=story';
const accordionListNestedUrl =
    'http://localhost:8080/iframe.html?id=components-accordion-list--accordion-list-nested&viewMode=story';

describe('story vl-accordion-list default', () => {
    it('should render a list of accordions', () => {
        cy.visit(accordionListUrl);

        cy.get('vl-accordion-list')
            .shadow()
            .find('ul.vl-accordion-list')
            .find('li.vl-accordion-list__item')
            .should('have.length', 3);

        cy.get('vl-accordion-list').find('vl-accordion').should('have.length', 3);
    });

    it('should display borders', () => {
        cy.visit(`${accordionListUrl}&args=bordered:true`);

        cy.get('vl-accordion-list').shadow().find('ul.vl-accordion-list.vl-accordion-list--bordered');
    });
});

describe('story vl-accordion-list nested', () => {
    it('should render a nested list of accordions', () => {
        cy.visit(accordionListNestedUrl);

        cy.get('vl-accordion-list')
            .shadow()
            .find('ul.vl-accordion-list')
            .find('li.vl-accordion-list__item')
            .should('have.length', 9);

        cy.get('vl-accordion-list')
            .find('vl-accordion')
            .should('have.length', 9)
            .find('vl-accordion-list')
            .should('have.length', 3)
            .find('vl-accordion')
            .should('have.length', 6);
    });

    it('should display borders', () => {
        cy.visit(`${accordionListNestedUrl}&args=bordered:true`);

        cy.get('vl-accordion-list').shadow().find('ul.vl-accordion-list.vl-accordion-list--bordered');
    });
});
