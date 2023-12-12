import { registerWebComponents } from '@domg-wc/common-utilities';
import { html } from 'lit';
import { VlMultiSelect } from './vl-multiselect.element';

registerWebComponents([VlMultiSelect]);

const mountDefault = () => {
    return cy.mount(html`
        <select is="vl-multiselect">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
    `);
};

describe('component vl-multiselect - default', () => {
    it('should mount', () => {
        mountDefault();

        cy.get('[data-cy-root]').within(() => {
            cy.get('select[is="vl-multiselect"]').should('exist');
            cy.get('select[is="vl-select"]').should('not.exist');
            cy.get('select').should('have.attr', 'is');
            cy.get('select').should('have.attr', 'data-vl-multiselect');
        });
    });

    it('should be accessible', () => {
        mountDefault();

        cy.injectAxe();
        cy.checkA11y('select[is="vl-multiselect"]');
    });
});
