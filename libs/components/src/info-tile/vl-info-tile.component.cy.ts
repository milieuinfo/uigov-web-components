import { registerWebComponents } from '@domg-wc/common';
import { VlInfoTile } from './index';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

registerWebComponents([VlInfoTile]);

const mountDefault = ({
    autoOpen,
    toggleable,
    center,
    contentSlot,
    subtitleSlot,
    titleSlot,
}: {
    autoOpen?: boolean;
    toggleable?: boolean;
    center?: boolean;
    contentSlot?: string;
    subtitleSlot?: string;
    titleSlot?: string;
}) =>
    cy.mount(html`
        <vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen} ?data-vl-center=${center}>
            ${unsafeHTML(titleSlot)}${unsafeHTML(subtitleSlot)}${unsafeHTML(contentSlot)}
        </vl-info-tile>
    `);

describe('component vl-info-tile - default', () => {
    beforeEach(() => {
        mountDefault({
            titleSlot: `<span slot="title">Broos Deprez</span>`,
            subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
            contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
        });
    });

    it('should mount', () => {
        cy.get('vl-info-tile');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-info-tile');
    });

    it('should contain a title', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="title"]');
        cy.get('vl-info-tile').find('span[slot="title"]').contains('Broos Deprez');
    });

    it('should contain a subtitle', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="subtitle"]');
        cy.get('vl-info-tile').find('span[slot="subtitle"]').contains('Uw zoon (19.05.2005)');
    });

    it('should contain content', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="content"]');
        cy.get('vl-info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });
});

describe('story vl-info-tile - toggleable', () => {
    beforeEach(() => {
        mountDefault({
            toggleable: true,
            titleSlot: `<span slot="title">Broos Deprez</span>`,
            subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
            contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
        });
    });

    it('should mount', () => {
        cy.get('vl-info-tile');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-info-tile');
    });

    it('should contain a title', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="title"]');
        cy.get('vl-info-tile').find('span[slot="title"]').contains('Broos Deprez');
    });

    it('should contain a subtitle', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="subtitle"]');
        cy.get('vl-info-tile').find('span[slot="subtitle"]').contains('Uw zoon (19.05.2005)');
    });

    it('should contain content', () => {
        cy.get('vl-info-tile').shadow().find('slot[name="content"]');
        cy.get('vl-info-tile')
            .find('div[slot="content"]')
            .contains('De studietoelage voor Broos Deprez werd toegekend.');
    });

    it('should be able to open and close', () => {
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('not.have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'false');
        cy.checkA11y('vl-info-tile');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').click();
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'true');
        cy.checkA11y('vl-info-tile');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').click();
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('not.have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'false');
        cy.checkA11y('vl-info-tile');
    });
});

describe('story vl-info-tile - center', () => {
    beforeEach(() => {
        mountDefault({
            center: true,
            titleSlot: `<span slot="title">Broos Deprez</span>`,
            subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
            contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
        });
    });

    it('should mount', () => {
        cy.get('vl-info-tile');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-info-tile');
    });

    it('should center', () => {
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('have.class', 'vl-info-tile--center');
    });
});

describe('story vl-info-tile - auto open', () => {
    beforeEach(() => {
        mountDefault({
            autoOpen: true,
            toggleable: true,
            titleSlot: `<span slot="title">Broos Deprez</span>`,
            subtitleSlot: `<span slot="subtitle">Uw zoon (19.05.2005)</span>`,
            contentSlot: `<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>`,
        });
    });

    it('should mount', () => {
        cy.get('vl-info-tile');
    });

    it('should be accessible', () => {
        cy.injectAxe();

        cy.checkA11y('vl-info-tile');
    });

    it('should open the info-tile automatically', () => {
        cy.get('vl-info-tile').shadow().find('.vl-info-tile').should('have.class', 'js-vl-accordion--open');
        cy.get('vl-info-tile').shadow().find('button.vl-toggle').should('have.attr', 'aria-expanded', 'true');
    });
});
