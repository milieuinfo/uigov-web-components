const stepsUrl = 'http://localhost:8080/iframe.html?id=components-steps--steps-default&viewMode=story';
const stepsWithAccordionsUrl =
    'http://localhost:8080/iframe.html?id=components-steps--steps-with-accordions&viewMode=story';
const stepsWithTimelineUrl =
    'http://localhost:8080/iframe.html?id=components-steps--steps-with-timeline&viewMode=story';

describe('story vl-steps', () => {
    it('should contain steps', () => {
        cy.visit(`${stepsUrl}`);
        cy.getDataCy('step-1').shadow().find('span[slot="identifier"]').contains('1');
        cy.getDataCy('step-1').shadow().find('h3.vl-step__title').find('span[slot="title"]').contains('Step 1: action');
        cy.getDataCy('step-1')
            .shadow()
            .find('p.vl-step__subtitle')
            .find('span[slot="sub-title"]')
            .contains('This is a subtitle.');

        cy.getDataCy('step-2').shadow().find('span[slot="identifier"]').contains('2');
        cy.getDataCy('step-2').shadow().find('h3.vl-step__title').find('span[slot="title"]').contains('Step 2: action');
        cy.getDataCy('step-2')
            .shadow()
            .find('p.vl-step__subtitle')
            .find('span[slot="sub-title"]')
            .contains('This is a subtitle.');

        cy.getDataCy('step-3').shadow().find('span[slot="identifier"]').contains('3');
        cy.getDataCy('step-3').shadow().find('h3.vl-step__title').find('span[slot="title"]').contains('Step 3: action');
        cy.getDataCy('step-3')
            .shadow()
            .find('p.vl-step__subtitle')
            .find('span[slot="sub-title"]')
            .contains('This is a subtitle.');

        cy.getDataCy('step-4').shadow().find('span[slot="identifier"]').contains('4');
        cy.getDataCy('step-4').shadow().find('h3.vl-step__title').find('span[slot="title"]').contains('Step 4: action');
        cy.getDataCy('step-4')
            .shadow()
            .find('p.vl-step__subtitle')
            .find('span[slot="sub-title"]')
            .contains('This is a subtitle.');

        cy.getDataCy('step-5').shadow().find('span[slot="identifier"]').contains('5');
        cy.getDataCy('step-5').shadow().find('h3.vl-step__title').find('span[slot="title"]').contains('Step 5: action');
        cy.getDataCy('step-5')
            .shadow()
            .find('p.vl-step__subtitle')
            .find('span[slot="sub-title"]')
            .contains('This is a subtitle.');
    });

    it('should contain a disabled step', () => {
        cy.visit(`${stepsUrl}`);
        cy.getDataCy('step-2')
            .shadow()
            .find('> li')
            .should('have.class', 'vl-step')
            .should('have.class', 'vl-step--disabled');
    });

    it('should contain a success step', () => {
        cy.visit(`${stepsUrl}`);
        cy.getDataCy('step-3')
            .shadow()
            .find('> li')
            .should('have.class', 'vl-step')
            .should('have.class', 'vl-step--success');
    });

    it('should contain a warning step', () => {
        cy.visit(`${stepsUrl}`);
        cy.getDataCy('step-4')
            .shadow()
            .find('> li')
            .should('have.class', 'vl-step')
            .should('have.class', 'vl-step--warning');
    });

    it('should contain a error step', () => {
        cy.visit(`${stepsUrl}`);
        cy.getDataCy('step-5')
            .shadow()
            .find('> li')
            .should('have.class', 'vl-step')
            .should('have.class', 'vl-step--error');
    });

    it('should contain a clickable button ', () => {
        // Check closed state
        cy.visit(stepsWithAccordionsUrl);
        cy.get('vl-steps')
            .shadow()
            .find('.vl-steps')
            .find('li.vl-step--accordion')
            .eq(0)
            .should('have.class', 'vl-step')
            .should('have.class', 'vl-step--accordion')
            .should('have.class', 'js-vl-accordion')
            .should('have.attr', 'aria-expanded', 'false');

        // Click toggle button
        cy.getDataCy('steps-with-accordions')
            .shadow()
            .find('.vl-steps')
            .find('li.vl-step--accordion')
            .eq(0)
            .find('button.js-vl-accordion__toggle')
            .click();
    });

    it('should contain a timeline with a sub identifier', () => {
        // Check closed state
        cy.visit(`${stepsWithTimelineUrl}`);
        cy.getDataCy('steps-with-timeline')
            .shadow()
            .find('.vl-steps')
            .children()
            .first()
            .find('span[slot="identifier-annotation"]')
            .contains('maa');
    });

    it('should contain a timeline with a title', () => {
        // Check closed state
        cy.visit(`${stepsWithTimelineUrl}`);
        cy.getDataCy('steps-with-timeline')
            .shadow()
            .find('.vl-steps')
            .children()
            .first()
            .find('span[slot="title"]')
            .contains('Central Station');
    });

    it('should contain a timeline with a title annotation', () => {
        // Check closed state
        cy.visit(`${stepsWithTimelineUrl}`);
        cy.getDataCy('steps-with-timeline')
            .shadow()
            .find('.vl-steps')
            .children()
            .first()
            .find('span[slot="title-annotation"]')
            .contains('13u00 - 15u00');
    });

    it('should contain a duration step', () => {
        // Check closed state
        cy.visit(`${stepsWithTimelineUrl}`);
        cy.getDataCy('steps-with-timeline')
            .shadow()
            .find('.vl-steps')
            .find('.vl-duration-step')
            .contains('Vrije tijd: 1 uur');
    });

    it('should contain a div.vl-steps around the ul.vl-steps__list and a div.vl-step__container per step', () => {
        cy.visit(stepsWithTimelineUrl);
        cy.get('vl-steps').shadow().find('div.vl-steps > ul.vl-steps__list').should('exist');
        cy.get('vl-steps').shadow().find('li.vl-step > div.vl-step__container').should('exist');
    });
});
