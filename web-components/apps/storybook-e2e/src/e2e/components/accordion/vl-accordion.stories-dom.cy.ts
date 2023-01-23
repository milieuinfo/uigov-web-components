const accordionUrl = 'http://localhost:8080/iframe.html?id=components-accordion--accordion-default&viewMode=story';
const accordionTitleSlotUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-title-slot&viewMode=story';
const accordionDynamicToggleUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-dynamic-toggle&viewMode=story';

const toggleAccordion = () => {
    cy.get('vl-accordion').shadow().find('button.vl-toggle').click();
};

const shouldBeClosed = () => {
    cy.get('vl-accordion').shadow().find('.vl-accordion').should('not.have.class', 'js-vl-accordion--open');
};

const shouldBeOpen = () => {
    cy.get('vl-accordion').shadow().find('.vl-accordion').should('have.class', 'js-vl-accordion--open');
};

const shouldBeToggleable = () => {
    shouldBeClosed();
    toggleAccordion();
    shouldBeOpen();
    toggleAccordion();
    shouldBeClosed();
};

const containsContent = () => {
    cy.get('vl-accordion').contains('Onderwijs helpt jonge mensen');
};

const containsTitle = (title: string) => {
    cy.get('vl-accordion').shadow().find('.vl-accordion__title').contains(title);
};

describe('story vl-accordion dom', () => {
    it('default - should be toggleable', () => {
        cy.visit(accordionUrl);

        shouldBeToggleable();
    });

    it('default - contains title', () => {
        cy.visit(accordionUrl);

        containsTitle('Lees meer over de onderwijsdoelstelling');
    });

    it('default - contains content', () => {
        cy.visit(accordionUrl);

        containsContent();
    });

    it('title slot - should be toggleable', () => {
        cy.visit(accordionTitleSlotUrl);

        shouldBeToggleable();
    });

    it('title slot - contains title slot', () => {
        cy.visit(accordionTitleSlotUrl);

        cy.get('vl-accordion').find('[slot="title"]').contains('Lees meer over de onderwijsdoelstelling');
    });

    it('title slot - contains content', () => {
        cy.visit(accordionTitleSlotUrl);

        containsContent();
    });

    it('dynamic toggle - should be toggleable', () => {
        cy.visit(accordionDynamicToggleUrl);

        shouldBeToggleable();
    });

    it('dynamic toggle - contains dynamic toggle', () => {
        cy.visit(accordionDynamicToggleUrl);

        containsTitle('Open de onderwijsdoelstelling');
        toggleAccordion();
        containsTitle('Sluit de onderwijsdoelstelling');
        toggleAccordion();
        containsTitle('Open de onderwijsdoelstelling');
    });

    it('dynamic toggle - contains content', () => {
        cy.visit(accordionDynamicToggleUrl);

        containsContent();
    });
});
