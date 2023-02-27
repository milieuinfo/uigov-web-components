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

const shouldSetDefaultSlot = () => {
    cy.get('vl-accordion').contains('Onderwijs helpt jonge mensen');
};

const shouldSetTitle = (title: string) => {
    cy.get('vl-accordion').shadow().find('.vl-accordion__title').contains(title);
};

const shouldEmitEventOnToggle = () => {
    cy.createStubForEvent('vl-accordion', 'vl-on-toggle');
    toggleAccordion();
    cy.get('@vl-on-toggle').should('have.been.calledOnce');
};

describe('story vl-accordion default', () => {
    it('should be toggleable', () => {
        cy.visit(accordionUrl);

        shouldBeToggleable();
    });

    it('should set default slot', () => {
        cy.visit(accordionUrl);

        shouldSetDefaultSlot();
    });

    it('should set title', () => {
        cy.visit(`${accordionUrl}&args=toggleText:Lees+meer+over+de+onderwijsdoelstelling`);

        shouldSetTitle('Lees meer over de onderwijsdoelstelling');
    });

    it('should emit event on toggle', () => {
        cy.visit(accordionUrl);

        shouldEmitEventOnToggle();
    });
});

describe('story vl-accordion dynamic toggle', () => {
    it('should be toggleable', () => {
        cy.visit(accordionDynamicToggleUrl);

        shouldBeToggleable();
    });

    it('should set default slot', () => {
        cy.visit(accordionDynamicToggleUrl);

        shouldSetDefaultSlot();
    });

    it('should set dynamic toggle', () => {
        cy.visit(
            `${accordionDynamicToggleUrl}&args=openToggleText:Open+de+onderwijsdoelstelling;closeToggleText:Sluit+de+onderwijsdoelstelling`
        );

        shouldSetTitle('Open de onderwijsdoelstelling');
        toggleAccordion();
        shouldSetTitle('Sluit de onderwijsdoelstelling');
        toggleAccordion();
        shouldSetTitle('Open de onderwijsdoelstelling');
    });

    it('should emit event on toggle', () => {
        cy.visit(accordionDynamicToggleUrl);

        shouldEmitEventOnToggle();
    });
});

describe('story vl-accordion title slot', () => {
    it('should be toggleable', () => {
        cy.visit(accordionTitleSlotUrl);

        shouldBeToggleable();
    });

    it('should set default slot', () => {
        cy.visit(accordionTitleSlotUrl);

        shouldSetDefaultSlot();
    });

    it('should set title slot', () => {
        cy.visit(accordionTitleSlotUrl);

        cy.get('vl-accordion').find('[slot="title"]').contains('Lees meer over de onderwijsdoelstelling');
    });

    it('should emit event on toggle', () => {
        cy.visit(accordionTitleSlotUrl);

        shouldEmitEventOnToggle();
    });
});
