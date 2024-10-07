import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common';
import { VlText } from './vl-text.element';

registerWebComponents([VlText]);

describe('component - vl-text', () => {
    it('should contain a text', () => {
        cy.mount(html`<span is="vl-text">Tekst</span>`);
        cy.get('span[is="vl-text"]').contains('Tekst');
    });

    it('should be hidden', () => {
        cy.mount(html`<span is="vl-text" data-vl-visually-hidden>Tekst</span>`);
        cy.get('span[is="vl-text"]').should('have.class', 'vl-u-visually-hidden');
        cy.get('span[is="vl-text"]').shouldHaveComputedStyle({
            style: 'clip',
            value: 'rect(1px, 1px, 1px, 1px)',
        });
        cy.get('span[is="vl-text"]').shouldHaveComputedStyle({
            style: 'margin',
            value: '-1px',
        });
    });

    it('should have success styling', () => {
        cy.mount(html`<span is="vl-text" data-vl-success>Tekst</span>`);
        cy.get('span[is="vl-text"]').should('have.class', 'vl-u-text--success');
        cy.get('span[is="vl-text"]').shouldHaveComputedStyle({ style: 'color', value: 'rgb(0, 122, 55)' });
    });

    it('should have warning styling', () => {
        cy.mount(html`<span is="vl-text" data-vl-warning>Tekst</span>`);
        cy.get('span[is="vl-text"]').should('have.class', 'vl-u-text--warning');
        cy.get('span[is="vl-text"]').shouldHaveComputedStyle({ style: 'color', value: 'rgb(159, 88, 4)' });
    });

    it('should have error styling', () => {
        cy.mount(html`<span is="vl-text" data-vl-error>Tekst</span>`);
        cy.get('span[is="vl-text"]').should('have.class', 'vl-u-text--error');
        cy.get('span[is="vl-text"]').shouldHaveComputedStyle({ style: 'color', value: 'rgb(210, 55, 60)' });
    });
});
