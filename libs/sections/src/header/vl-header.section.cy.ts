import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlHeader } from './index';
import { html } from 'lit';

registerWebComponents([VlHeader]);

const mountHeaderWithSkeleton = () => {
    return cy.mount(html`
        <div is="vl-body">
            <vl-header
                data-vl-development="true"
                data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                data-vl-skeleton="true"
            ></vl-header>
        </div>
    `);
};

describe('component vl-header - default', () => {
    describe('with skeleton', () => {
        beforeEach(() => {
            mountHeaderWithSkeleton();
        });

        it('should render the skeleton container', () => {
            cy.get('vl-header[data-vl-skeleton="true"]');
            cy.get('#header__skeleton').should('exist');
        });
    });
});
