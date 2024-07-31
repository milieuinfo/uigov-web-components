import { registerWebComponents } from '@domg-wc/common-utilities';
import { html } from 'lit';
import { VlMap } from '../../vl-map';
import { VlMapSideSheet } from './vl-map-side-sheet';

registerWebComponents([VlMap, VlMapSideSheet]);

const mapSideSheetFixture = html`
    <vl-map>
        <vl-map-side-sheet></vl-map-side-sheet>
    </vl-map>
`;

describe('vl-map-side-sheet', () => {
    it('de side sheet zal absoluut en links gepositioneerd worden', () => {
        cy.mount(mapSideSheetFixture);
        cy.runTestFor<VlMapSideSheet>('vl-map-side-sheet', (vlMapSideSheet) => {
            expect(vlMapSideSheet.hasAttribute('data-vl-left')).to.be.true;
            expect(vlMapSideSheet.hasAttribute('data-vl-absolute')).to.be.true;
        });
    });

    it('should have arrow in correct position', () => {
        cy.mount(html` <vl-map-side-sheet></vl-map-side-sheet> `);

        cy.get('vl-map-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .shadow()
            .find('button.vl-button')
            .find('span[is="vl-icon"]')
            .should('have.class', 'vl-icon')
            .and('have.class', 'vl-vi-nav-right');
    });

    it('should be right by default & change default icon direction when opening or closing', () => {
        cy.mount(html` <vl-map-side-sheet></vl-map-side-sheet> `);

        cy.get('vl-map-side-sheet').shouldHaveComputedStyle({ style: 'left', value: '0px' });
        shouldHaveIcon('nav-right');
        cy.get('vl-map-side-sheet').shadow().find('vl-toggle-button').shadow().find('button').click({ force: true });
        shouldHaveIcon('nav-left');
        cy.get('vl-map-side-sheet').shadow().find('vl-toggle-button').shadow().find('button').click({ force: true });
        shouldHaveIcon('nav-right');
    });

    it('should have arrow in correct position when starting in open position', () => {
        cy.mount(html` <vl-map-side-sheet data-vl-open=""></vl-map-side-sheet> `);

        cy.get('vl-map-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .shadow()
            .find('button.vl-button')
            .find('span[is="vl-icon"]')
            .should('have.class', 'vl-icon')
            .and('have.class', 'vl-vi-nav-left');
    });

    it('should have arrow in correct position when starting in open position from the right', () => {
        cy.mount(html` <vl-map-side-sheet data-vl-open="" data-vl-right=""></vl-map-side-sheet> `);

        cy.get('vl-map-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .shadow()
            .find('button.vl-button')
            .find('span[is="vl-icon"]')
            .should('have.class', 'vl-icon')
            .and('have.class', 'vl-vi-nav-right');
    });
});

const shouldHaveIcon = (iconName: string) => {
    cy.get('vl-map-side-sheet')
        .shadow()
        .find('vl-toggle-button')
        .shadow()
        .find('button')
        .find('span[is=vl-icon]')
        .should('have.class', `vl-vi-${iconName}`);
};
