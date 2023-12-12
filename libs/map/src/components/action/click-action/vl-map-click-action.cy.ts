import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlMapClickAction } from './vl-map-click-action';
import { VlMap, VlMapBaseLayerGRBGray } from '../../../';

registerWebComponents([VlMapClickAction, VlMap, VlMapBaseLayerGRBGray]);

describe('vl-map-click-action', () => {
    beforeEach(() => {
        cy.mount(html`
            <section style="width: 100%">
                <vl-map>
                    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                    <vl-map-click-action></vl-map-click-action>
                </vl-map>
            </section>
        `);
    });

    it('should mount', () => {
        cy.get('vl-map-click-action');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-map-click-action');
    });

    it('should remove the marker when <vl-map-click-action> is removed from the DOM', () => {
        cy.get('vl-map').should('exist');

        cy.get('vl-map-click-action').should('exist');

        cy.get('vl-map').click();

        cy.get('vl-map').shadow().find('vl-map-click-action-pindrop').should('exist');

        cy.get('vl-map-click-action').then(($el) => $el.remove());

        cy.get('vl-map').shadow().find('vl-map-click-action-pindrop').should('not.exist');
    });

    it('should NOT throw a nullpointer exception (TypeError) when the map is clicked and the vl-map-click-action is not present on the DOM', () => {
        cy.get('vl-map').should('exist');

        cy.get('vl-map-click-action').then(($el) => $el.remove());

        cy.get('vl-map-click-action').should('not.exist');

        cy.get('vl-map').click();

        cy.get('vl-map').should('exist');

        cy.window().then((win) => {
            cy.spy(win.console, 'error').as('consoleError');
        });

        cy.get('@consoleError').should('not.have.been.called');
    });
});

describe('vl-map-click-action marker functionality', () => {
    beforeEach(() => {
        cy.mount(html`
            <section style="width: 100%">
                <vl-map>
                    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                    <vl-map-click-action></vl-map-click-action>
                </vl-map>
            </section>
        `);
    });

    it('should add a marker on the map if vl-map-click-action is present in the DOM and the map has been clicked ', () => {
        cy.get('vl-map').shadow();

        cy.get('vl-map-click-action').shadow();

        cy.get('vl-map').click();

        cy.get('vl-map').shadow().find('vl-map-click-action-pindrop').should('exist');
    });

    it('should add only one overlay to the map even after multiple clicks', () => {
        cy.get('vl-map').should('exist');
        cy.get('vl-map-click-action').should('exist');

        const numberOfClicks = 5;
        for (let i = 0; i < numberOfClicks; i++) {
            cy.get('vl-map').click();
        }

        cy.get('vl-map').shadow().find('vl-map-click-action-pindrop').should('have.length', 1);
    });
});
