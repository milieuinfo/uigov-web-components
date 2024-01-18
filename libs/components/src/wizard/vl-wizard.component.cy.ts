import { registerWebComponents } from '@domg-wc/common-utilities';
import { html, nothing } from 'lit';
import { VlWizardPane } from './vl-wizard-pane.component';
import { VlWizard } from './vl-wizard.component';

registerWebComponents([VlWizardPane, VlWizard]);

type MountDefaultProps = {
    activeStep?: number;
    panes?: string[];
    showSteps?: boolean;
};

const mountDefault = ({ activeStep, panes, showSteps=false }: MountDefaultProps) => {
    const paneElements = panes?.map((paneName) => {
        const pane = document.createElement('vl-wizard-pane');
        pane.setAttribute('data-vl-name', paneName);
        pane.innerHTML = `<p>Wizard Pane Content (${paneName})</p>`;
        return pane;
    });

    cy.mount(html` <vl-wizard data-vl-active-step=${activeStep || nothing} ?data-vl-show-steps=${showSteps}> ${paneElements}</vl-wizard> `);
};

describe('component vl-wizard - default', () => {

    it('should mount', () => {
        mountDefault({});
        cy.get('[data-cy-root]').within(() => {
            cy.get('vl-wizard').shadow();
        });
    });

    it('should be accessible', () => {
        mountDefault({});

        cy.injectAxe();
        cy.checkA11y('vl-wizard');
    });

});

describe('component vl-wizard-pane - properties', () => {

    it('should reflect <activeStep> attribute', () => {
        mountDefault({ activeStep: 2 });

        cy.get('vl-wizard').should('have.attr', 'data-vl-active-step', '2');
    });

    it('should render correct number of panes', () => {
        mountDefault({ panes: ['Step 1', 'Step 2', 'Step 3'] });

        cy.get('vl-wizard').find('vl-wizard-pane').should('have.length', 3);
        cy.get('vl-wizard').find('vl-wizard-pane').should('not.have.length', 4);
    });

    it('should render correct <pane.name> when the pane is hovered', () => {
        mountDefault({
            panes: ['Step 1', 'Step 2', 'Step 3'],
            activeStep: 1,
        });

        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="Step 1"]').trigger('mouseover');
        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="Step 1"]').contains('Wizard Pane Content (Step 1)');
    });

    it('should set correct pane as active', () => {
        mountDefault({
            panes: ['Step 1', 'Step 2', 'Step 3'],
            activeStep: 2,
        });
        cy.get('vl-wizard').find('vl-wizard-pane[data-vl-name="Step 2"]').contains('Wizard Pane Content (Step 2)');
    });

    it('should not display the steps\' labels by default', () => {
        mountDefault({ panes: ['Step 1', 'Step 2', 'Step 3'] });

        cy.get('vl-wizard').should('not.have.attr', 'data-vl-show-steps');
    })

    it('should should the steps\' labels when <data-vl-show-steps> is true', () => {
        mountDefault({ panes: ['Step 1', 'Step 2', 'Step 3'], showSteps: true });

        cy.get('vl-wizard').should('have.attr', 'data-vl-show-steps');

        cy.get('vl-wizard')
            .shadow()
            .find('vl-progress-bar')
            .shadow()
            .find('.vl-progress-bar__step')
            .eq(0)
            .find('.vl-progress-bar__bullet__text')
            .should('contain.text', 'Step 1');
        cy.get('vl-wizard')
            .shadow()
            .find('vl-progress-bar')
            .shadow()
            .find('.vl-progress-bar__step')
            .eq(1)
            .find('.vl-progress-bar__bullet__text')
            .should('contain.text', 'Step 2');
    });
});
