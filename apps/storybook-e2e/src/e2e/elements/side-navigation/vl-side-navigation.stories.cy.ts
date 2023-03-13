const sideNavigationUrl =
    'http://localhost:8080/iframe.html?id=elements-side-navigation--side-navigation-default&viewMode=story';

describe('story vl-side-navigation default', () => {
    beforeEach(() => cy.visit(sideNavigationUrl));

    it('should have child and parent links', () => {
        const shouldHaveChildAttribute = (href: string, child: string) => {
            cy.get('nav[is="vl-side-navigation"]')
                .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
                .should('have.attr', 'data-vl-child', child);
        };

        const shouldHaveParentAttribute = (href: string, parent: string) => {
            cy.get('nav[is="vl-side-navigation"]')
                .find(`a[href="${href}"]`)
                .should('have.attr', 'data-vl-parent', parent);
        };

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
        const shouldHaveExpandedToggle = (href: string, expanded: boolean) => {
            cy.get('nav[is="vl-side-navigation"]')
                .find(`a[is="vl-side-navigation-toggle"][href="${href}"]`)
                .should('have.attr', 'aria-expanded', `${expanded}`);
        };

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
});
