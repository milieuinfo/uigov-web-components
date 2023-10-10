import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlSideNavigation } from './vl-side-navigation.element';
import { VlSideNavigationContentElement } from './vl-side-navigation-content.element';
import { VlSideNavigationGroupElement } from './vl-side-navigation-group.element';
import { VlSideNavigationItemElement } from './vl-side-navigation-item.element';
import { VlSideNavigationToggleElement } from './vl-side-navigation-toggle.element';
import { VlColumnElement, VlGridElement, VlLayoutElement, VlRegionElement } from '../grid';
import { VlSideNavigationH5 } from './vl-side-navigation-title.element';
import { VlSideNavigationReferenceElement } from './vl-side-navigation-reference.element';
import { VlH2Element, VlH3Element, VlH5Element } from '../title';

registerWebComponents([
    VlRegionElement,
    VlLayoutElement,
    VlGridElement,
    VlColumnElement,
    VlH2Element,
    VlH3Element,
    VlH5Element,
    VlSideNavigation,
    VlSideNavigationContentElement,
    VlSideNavigationGroupElement,
    VlSideNavigationItemElement,
    VlSideNavigationToggleElement,
    VlSideNavigationReferenceElement,
    VlSideNavigationH5,
]);

describe('element vl-side-navigation', () => {
    beforeEach(() => {
        cy.viewport(960, 1440);

        cy.mount(html`
            <section is="vl-region">
                <div is="vl-layout">
                    <div is="vl-grid" data-vl-is-stacked>
                        <div
                            is="vl-column"
                            data-vl-size="8"
                            data-vl-medium-size="8"
                            data-vl-small-size="8"
                            data-vl-extra-small-size="12"
                        >
                            <div is="vl-side-navigation-reference">
                                <section id="content-1" is="vl-region">
                                    <h2 is="vl-h2">Content 1</h2>
                                </section>
                                <section id="content-1-1" is="vl-region">
                                    <h3 is="vl-h3">Content 1 - 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-1-2" is="vl-region">
                                    <h3 is="vl-h3">Content 1 - 2</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-1-3" is="vl-region">
                                    <h3 is="vl-h3">Content 1 - 3</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-1-4" is="vl-region">
                                    <h3 is="vl-h3">Content 1 - 4</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-2" is="vl-region">
                                    <h2 is="vl-h2">Content 2</h2>
                                </section>
                                <section id="content-2-1" is="vl-region">
                                    <h3 is="vl-h3">Content 2 - 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-2-2" is="vl-region">
                                    <h3 is="vl-h3">Content 2 - 2</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-2-3" is="vl-region">
                                    <h3 is="vl-h3">Content 2 - 3</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-2-4" is="vl-region">
                                    <h3 is="vl-h3">Content 2 - 4</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                                <section id="content-3" is="vl-region">
                                    <h2 is="vl-h2">Content 3</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </section>
                            </div>
                        </div>
                        <div
                            is="vl-column"
                            data-vl-size="3"
                            data-vl-medium-size="3"
                            data-vl-small-size="3"
                            data-vl-extra-small-size="0"
                        >
                            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                                <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                                <div is="vl-side-navigation-content">
                                    <ul is="vl-side-navigation-group">
                                        <li is="vl-side-navigation-item" data-vl-parent="content-1">
                                            <a
                                                is="vl-side-navigation-toggle"
                                                href="#content-1"
                                                data-vl-child="content-1"
                                            >
                                                content 1
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                            <ul>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-1-1" data-vl-parent="content-1"
                                                            >content 1 - 1</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-1-2" data-vl-parent="content-1"
                                                            >content 1 - 2</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-1-3" data-vl-parent="content-1"
                                                            >content 1 - 3</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-1-4" data-vl-parent="content-1"
                                                            >content 1 - 4</a
                                                        >
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li is="vl-side-navigation-item" data-vl-parent="content-2">
                                            <a
                                                is="vl-side-navigation-toggle"
                                                href="#content-2"
                                                data-vl-child="content-2"
                                            >
                                                content 2
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                            <ul>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-2-1" data-vl-parent="content-2"
                                                            >content 2 - 1</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-2-2" data-vl-parent="content-2"
                                                            >content 2 - 2</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-2-3" data-vl-parent="content-2"
                                                            >content 2 - 3</a
                                                        >
                                                    </div>
                                                </li>
                                                <li is="vl-side-navigation-item">
                                                    <div>
                                                        <a href="#content-2-4" data-vl-parent="content-2"
                                                            >content 2 - 4</a
                                                        >
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                            <a
                                                is="vl-side-navigation-toggle"
                                                href="#content-3"
                                                data-vl-child="content-3"
                                            >
                                                content 3
                                                <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        `);
    });

    it('should mount', () => {
        cy.get('nav[is="vl-side-navigation"]');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('nav[is="vl-side-navigation"]', {
            // heading-order rule uitgezet.
            // DV bouwt het zij-menu op dezelfde manier op, hier van afwijken zou de huisstijl veranderen.
            rules: {
                'heading-order': { enabled: false },
            },
        });
        cy.checkA11y('div[is="vl-side-navigation-reference"]');
    });

    it('should be accessible on mobile', () => {
        cy.injectAxe();
        cy.viewport(320, 480);

        cy.checkA11y('nav[is="vl-side-navigation"]', {
            // heading-order rule uitgezet.
            // DV bouwt het zij-menu op dezelfde manier op, hier van afwijken zou de huisstijl veranderen.
            rules: {
                'heading-order': { enabled: false },
            },
        });
        cy.checkA11y('div[is="vl-side-navigation-reference"]');
    });

    it('should show child links on scroll', () => {
        cy.get('div[is="vl-side-navigation-reference"]').find('section#content-1-1').scrollIntoView();

        cy.get('nav[is="vl-side-navigation"]')
            .find('a[is="vl-side-navigation-toggle"][href="#content-1"]')
            .should('have.attr', 'aria-expanded', 'true');

        cy.get('div[is="vl-side-navigation-reference"]').get('section#content-2-1').scrollIntoView();

        cy.get('nav[is="vl-side-navigation"]')
            .find('a[is="vl-side-navigation-toggle"][href="#content-2"]')
            .should('have.attr', 'aria-expanded', 'true');
    });

    it('should set attributes', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .should('have.attr', 'data-vl-side-navigation', '')
            .should('have.attr', 'data-vl-side-navigation-scrollable', '')
            .should('have.attr', 'data-vl-scrollspy', '')
            .should('have.attr', 'data-vl-scrollspy-mobile', 'Navigatie')
            .should('have.attr', 'data-vl-sticky', '')
            .should('have.attr', 'data-vl-sticky-offset-top', '43');

        cy.get('div[is="vl-side-navigation-reference"]').should('have.attr', 'data-vl-scrollspy-content', '');
    });

    it('should set classes', () => {
        cy.get('nav[is="vl-side-navigation"]')
            .should('have.class', 'vl-side-navigation')
            .should('have.class', 'js-vl-side-navigation')
            .should('have.class', 'js-vl-sticky')
            .should('have.class', 'js-vl-scrollspy');

        cy.get('nav[is="vl-side-navigation"]')
            .find('h5[is="vl-side-navigation-h5"]')
            .should('have.class', 'vl-side-navigation__title');

        cy.get('nav[is="vl-side-navigation"]')
            .find('div[is="vl-side-navigation-content"]')
            .should('have.class', 'vl-side-navigation__content');

        cy.get('nav[is="vl-side-navigation"]')
            .find('ul[is="vl-side-navigation-group"]')
            .should('have.class', 'vl-side-navigation__group');

        cy.get('nav[is="vl-side-navigation"]')
            .find('li[is="vl-side-navigation-item"]')
            .should('have.class', 'vl-side-navigation__item');

        cy.get('nav[is="vl-side-navigation"]')
            .find('li[is="vl-side-navigation-item"]')
            .should('have.attr', 'data-vl-parent', 'content-1')
            .should('have.class', 'vl-side-navigation__item--parent');

        cy.get('nav[is="vl-side-navigation"]')
            .find('a[is="vl-side-navigation-toggle"]')
            .should('have.class', 'vl-side-navigation__toggle');

        cy.get('div[is="vl-side-navigation-reference"]').should('have.class', 'js-vl-scrollspy__content');
        cy.get('div[is="vl-side-navigation-reference"]').should('have.class', 'js-vl-scrollspy__content');
    });

    it('should open mobile menu', () => {
        cy.viewport(320, 480);

        cy.get('div[is="vl-side-navigation-reference"]')
            .find('button.vl-button.js-vl-scrollspy__toggle')
            .should('have.attr', 'aria-expanded', 'false');
        cy.get('nav[is="vl-side-navigation"]').should('have.attr', 'data-vl-sticky-dressed', 'true');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');

        cy.get('div[is="vl-side-navigation-reference"]').find('button.vl-button.js-vl-scrollspy__toggle').click();

        cy.get('nav[is="vl-side-navigation"]').should('be.visible');
    });

    it('should switch between mobile & desktop', () => {
        cy.get('nav[is="vl-side-navigation"]').find('button.vl-button.js-vl-scrollspy__toggle').should('not.exist');
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');

        cy.viewport(320, 480);

        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('not.be.visible');

        cy.viewport(960, 1440);

        cy.get('button.vl-button.js-vl-scrollspy__toggle').should('not.be.visible');
        cy.get('nav[is="vl-side-navigation"]').should('be.visible');
    });
});
