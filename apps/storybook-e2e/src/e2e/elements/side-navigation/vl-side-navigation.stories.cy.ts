const sideNavigationUrl =
    'http://localhost:8080/iframe.html?id=elements-side-navigation--side-navigation-default&viewMode=story';
const stepsWithSideNavigationUrl =
    'http://localhost:8080/iframe.html?args=&id=components-steps--steps-with-side-navigation&viewMode=story';

describe('story vl-side-navigation default', () => {
    beforeEach(() => cy.visit(sideNavigationUrl));

    it('should have child and parent links', () => {
        shouldHaveChildAttribute('#content-1', 'content-1');
        shouldHaveChildAttribute('#content-2', 'content-2');

        shouldHaveParentAttribute('#content-1-1', 'content-1');
        shouldHaveParentAttribute('#content-1-2', 'content-1');
        shouldHaveParentAttribute('#content-1-3', 'content-1');
        shouldHaveParentAttribute('#content-1-4', 'content-1');
        shouldHaveParentAttribute('#content-2-1', 'content-2');
        shouldHaveParentAttribute('#content-2-2', 'content-2');
        shouldHaveParentAttribute('#content-2-3', 'content-2');
        shouldHaveParentAttribute('#content-2-4', 'content-2');
    });

    it('should show child links on scroll', () => {
        shouldHaveExpandedToggle('#content-1', false);
        shouldHaveExpandedToggle('#content-2', false);

        cy.get('section#content-1-1').scrollIntoView();

        shouldHaveExpandedToggle('#content-1', true);

        cy.get('section#content-2-1').scrollIntoView();

        shouldHaveExpandedToggle('#content-2', true);
    });

    it('should set correct attributes on vl-side-navigation', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .should('have.attr', 'data-vl-side-navigation', '')
            .should('have.attr', 'data-vl-side-navigation-scrollable', '')
            .should('have.attr', 'data-vl-scrollspy', '')
            .should('have.attr', 'data-vl-scrollspy-mobile', 'Navigatie')
            .should('have.attr', 'data-vl-sticky', '')
            .should('have.attr', 'data-vl-sticky-offset-top', '43');
    });

    it('should set correct classes on vl-side-navigation', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .should('have.class', 'vl-side-navigation')
            .should('have.class', 'js-vl-side-navigation')
            .should('have.class', 'js-vl-sticky')
            .should('have.class', 'js-vl-scrollspy');
    });

    it('should set correct classes on vl-side-navigation-title', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .find('h5[is="vl-side-navigation-h5"]')
            .should('have.class', 'vl-side-navigation__title');
    });

    it('should set correct classes on vl-side-navigation-content', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .find('div[is="vl-side-navigation-content"]')
            .should('have.class', 'vl-side-navigation__content');
    });

    it('should set correct classes on vl-side-navigation-group', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .find('ul[is="vl-side-navigation-group"]')
            .should('have.class', 'vl-side-navigation__group');
    });

    it('should set correct classes on vl-side-navigation-item', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .find('li[is="vl-side-navigation-item"]')
            .should('have.class', 'vl-side-navigation__item');

        cy.get('nav[is="vl-side-navigation"]')
            .find('li[is="vl-side-navigation-item"]')
            .should('have.attr', 'data-vl-parent', 'content-1')
            .should('have.class', 'vl-side-navigation__item--parent');
    });

    it('should set correct classes on vl-side-navigation-toggle', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .find('a[is="vl-side-navigation-toggle"]')
            .should('have.class', 'vl-side-navigation__toggle');
    });

    it('should set correct attributes on vl-side-navigation-reference', () => {
        cy.get('div[is="vl-side-navigation-reference"]').should('have.attr', 'data-vl-scrollspy-content', '');
    });

    it('should set correct classes on vl-side-navigation-reference', () => {
        cy.get('div[is="vl-side-navigation-reference"]').should('have.class', 'js-vl-scrollspy__content');
    });

    it('should set correct classes on vl-side-navigation-reference', () => {
        cy.get('div[is="vl-side-navigation-reference"]').should('have.class', 'js-vl-scrollspy__content');
    });
});

describe('story vl-side-navigation mobile', () => {
    it('should open mobile side-navigation menu', () => {
        cy.viewport(320, 480);
        cy.visit(sideNavigationUrl);

        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('have.attr', 'aria-expanded', 'false');
        cy.get('nav[is="vl-side-navigation"]').should('have.attr', 'data-vl-sticky-dressed', 'true');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500); // Het zou niet mogen, maar deze wait maakt de test 100% succesvol terwijl hij anders flaky is.
        cy.get('button.vl-button.js-vl-scrollspy__toggle').click();
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');
    });

    it('should be able to switch between mobile & desktop', () => {
        cy.viewport(320, 480);
        cy.visit(sideNavigationUrl);

        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');

        cy.viewport(1000, 660);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('not.be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');

        cy.viewport(320, 480);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');

        cy.viewport(1000, 660);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('not.be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');

        cy.viewport(320, 480);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');

        cy.viewport(1000, 660);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('not.be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');

        cy.viewport(320, 480);
        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');
    });
});

describe('story vl-side-navigation with vl-steps', () => {
    beforeEach(() => cy.visit(stepsWithSideNavigationUrl));

    it('should show child links on scroll', () => {
        shouldHaveExpandedToggle('#vl-steps-4-step-2', false);

        cy.get('vl-steps')
            .shadow()
            .find('#vl-steps-4-step-2-abstract')
            .scrollIntoView({ duration: 2500 })
            .should('be.visible');
        shouldHaveExpandedToggle('#vl-steps-4-step-2', true);

        cy.get('vl-steps')
            .shadow()
            .find('#vl-steps-4-step-2-volledig')
            .scrollIntoView({ duration: 2500 })
            .should('be.visible');
        shouldHaveExpandedToggle('#vl-steps-4-step-2', true);

        cy.get('vl-steps')
            .shadow()
            .find('#vl-steps-4-step-3')
            .scrollIntoView({ duration: 2500 })
            .should('be.visible');
        shouldHaveExpandedToggle('#vl-steps-4-step-2', false);
    });
});

const shouldHaveChildAttribute = (href: string, child: string) => {
    cy.get('nav[is="vl-side-navigation"]')
        .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
        .should('have.attr', 'data-vl-child', child);
};

const shouldHaveParentAttribute = (href: string, parent: string) => {
    cy.get('nav[is="vl-side-navigation"]').find(`a[href="${href}"]`).should('have.attr', 'data-vl-parent', parent);
};

const shouldHaveExpandedToggle = (href: string, expanded: boolean) => {
    cy.get('nav[is="vl-side-navigation"]')
        .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
        .should('have.attr', 'aria-expanded', `${expanded}`);
};
