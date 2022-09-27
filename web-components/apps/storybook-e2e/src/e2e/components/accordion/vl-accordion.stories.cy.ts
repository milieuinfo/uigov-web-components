const accordionUrl = 'http://localhost:8080/iframe.html?id=components-accordion--accordion-default&viewMode=story';
const accordionWithTitleSlotUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-with-title-slot&viewMode=story';
const dynamicAccordionUrl =
    'http://localhost:8080/iframe.html?id=components-accordion--accordion-dynamic-toggle&viewMode=story';

const accordionToggle = () => {
    cy.getDataCy('accordion').shadow().find('button.vl-toggle').click();
};

const accordionShouldNotBeOpen = () => {
    cy.getDataCy('accordion').shadow().find('.vl-accordion').should('not.have.class', 'js-vl-accordion--open');
};

const accordionShouldBeOpen = () => {
    cy.getDataCy('accordion').shadow().find('.vl-accordion').should('have.class', 'js-vl-accordion--open');
};

describe('story vl-accordion', () => {
    it('should contain toggable accordion', () => {
        cy.visit(`${accordionUrl}`);

        accordionShouldNotBeOpen();
        accordionToggle();
        accordionShouldBeOpen();
        accordionToggle();
        accordionShouldNotBeOpen();
    });

    it('should contain toggable dynamic accordion', () => {
        cy.visit(`${dynamicAccordionUrl}`);

        accordionShouldNotBeOpen();
        accordionToggle();
        accordionShouldBeOpen();
        accordionToggle();
        accordionShouldNotBeOpen();
    });

    it('should contain a title', () => {
        cy.visit(`${accordionUrl}`);

        cy.getDataCy('accordion')
            .shadow()
            .find('.vl-accordion__title')
            .contains('Lees meer over de onderwijsdoelstelling');
    });

    it('should contain a title slot', () => {
        cy.visit(`${accordionWithTitleSlotUrl}`);

        cy.getDataCy('accordion-with-title-slot')
            .find('span[slot="title"]')
            .contains('Lees meer over de onderwijsdoelstelling');
    });

    it('should contain content', () => {
        cy.visit(`${accordionUrl}`);

        cy.getDataCy('accordion')
            .find('span')
            .contains(
                'Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.'
            );
    });
});
