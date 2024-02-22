import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlHeader } from './index';

registerWebComponents([VlHeader]);

describe('component - vl-header', () => {
    beforeEach(() => {
        cy.mount(html`
            <div is="vl-body">
                <vl-header data-vl-development data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"></vl-header>
            </div>
        `);
    });

    it('should mount', () => {
        cy.get('vl-header');
        cy.get('#header__container');
    });

    it('should be accessible', () => {
        cy.get('vl-header');

        cy.injectAxe();
        cy.checkA11y('vl-header');
        cy.checkA11y('#header__container');
    });

    it('should render with fixed height', () => {
        cy.get('#header__container').should('have.css', 'min-height', '43px');
    });

    it('should dispatch ready event when ready', () => {
        // Mogelijke flaky test aangezien het event afgevuurd kan worden vooraleer de eventListener is toegevoegd.
        cy.createStubForEvent('vl-header', 'ready');
        cy.get('@ready').should('have.been.calledOnce');
    });
});

describe('component - vl-header - skeleton', () => {
    it('should render the skeleton container', () => {
        cy.mount(html`
            <div is="vl-body">
                <vl-header
                    data-vl-development
                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    data-vl-skeleton
                ></vl-header>
            </div>
        `);

        cy.get('#header__skeleton').should('have.css', 'height', '43px');
    });
});
