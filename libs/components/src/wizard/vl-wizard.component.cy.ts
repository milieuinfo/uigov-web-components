import { registerWebComponents } from '@domg-wc/common-utilities';
import { html, nothing } from 'lit';
import { VlWizardPane } from './vl-wizard-pane.component';
import { VlWizard } from './vl-wizard.component';

registerWebComponents([VlWizardPane, VlWizard]);

describe('component vl-wizard - default', () => {
    const mountDefault = ({ activeStep, panes }: { activeStep?: number; panes?: string[] }) => {
        const paneElements = panes?.map((paneName) => {
            const pane = document.createElement('vl-wizard-pane');
            pane.setAttribute('data-vl-name', paneName);
            pane.innerHTML = `<p>Wizard Pane Content (${paneName})</p>`;
            return pane;
        });

        cy.mount(html` <vl-wizard data-vl-active-step=${activeStep || nothing}> ${paneElements} </vl-wizard> `);
    };

    it('should mount', () => {
        mountDefault({});
        cy.get('[data-cy-root]').within(() => {
            cy.get('vl-wizard');
        });
    });

    it('should be accessible', () => {
        mountDefault({});

        cy.injectAxe();
        cy.checkA11y('vl-wizard');
    });

    it('should reflect <activeStep> attribute', () => {
        mountDefault({ activeStep: 2 });

        cy.get('vl-wizard').should('have.attr', 'data-vl-active-step', '2');
    });

    it('should render correct number of panes', () => {
        mountDefault({ panes: ['pane1', 'pane2', 'pane3'] });

        cy.get('vl-wizard').find('vl-wizard-pane').should('have.length', 3);
        cy.get('vl-wizard').find('vl-wizard-pane').should('not.have.length', 4);
    });

    it('should render correct <pane.name> when the pane is hovered', () => {
        mountDefault({
            panes: ['pane1', 'pane2', 'pane3'],
            activeStep: 1,
        });

        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="pane1"]').trigger('mouseover');
        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="pane1"]').contains('Wizard Pane Content (pane1)');
    });

    it('should set correct pane as active', () => {
        mountDefault({
            panes: ['pane1', 'pane2', 'pane3'],
            activeStep: 2,
        });
        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="pane2"]').contains('Wizard Pane Content (pane2)');
    });
});