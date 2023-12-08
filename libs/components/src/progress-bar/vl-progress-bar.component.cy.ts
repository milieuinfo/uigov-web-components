import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlTooltipComponent } from '../tooltip/vl-tooltip.component';
import { VlProgressBarComponent } from './vl-progress-bar.component';
import { html } from 'lit';

registerWebComponents([VlProgressBarComponent, VlTooltipComponent]);

const mountDefault = (steps: string[]) => cy.mount(html`<vl-progress-bar .steps=${steps}></vl-progress-bar> `);
const mountWithProps = () =>
    cy.mount(
        html`<vl-progress-bar
            .steps=${['Step 1', 'Step 2', 'Step 3']}
            .numeric=${true}
            .activeStep=${2}
            .showSteps=${true}
        ></vl-progress-bar>`
    );

describe('component vl-progress-bar - default', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];

    beforeEach(() => {
        mountDefault(steps);
    });

    it('should mount', () => {
        cy.get('vl-progress-bar');
    });

    it('should be accessible', () => {
        cy.injectAxe();
        cy.checkA11y('vl-progress-bar');
    });

    it('should render steps correctly', () => {
        cy.get('vl-progress-bar').shadow().find('.vl-progress-bar__step').should('have.length', steps.length);

        steps.forEach((step, index) => {
            cy.get('vl-progress-bar')
                .shadow()
                .find(`.vl-progress-bar__step:nth-child(${index + 1}) `)
                .find('vl-tooltip')
                .contains(step);
        });
    });

    it('should emit vl-click-step event when a step is clicked', () => {
        cy.createStubForEvent('vl-progress-bar', 'vl-click-step');
        cy.get('vl-progress-bar').shadow().find('.vl-progress-bar__step:nth-child(2) button').click();
        cy.get('@vl-click-step').should('have.been.calledWithMatch', { detail: { step: steps[1], number: 2 } });
        cy.get('@vl-click-step').should('not.have.been.calledWithMatch', { detail: { step: steps[1], number: 1 } });
    });
});

describe('component vl-progress-bar - with properties', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const activeStep = 2;

    beforeEach(() => {
        mountWithProps();
    });

    it('should have numeric class when numeric property is true', () => {
        cy.get('vl-progress-bar').shadow().find('.vl-progress-bar--numeric').should('exist');
    });

    it('should have active step class on the correct step when activeStep property is set', () => {
        cy.get('vl-progress-bar')
            .shadow()
            .find(`.vl-progress-bar__step:nth-child(${activeStep})`)
            .should('have.class', 'vl-progress-bar__step--active');
    });

    it('should always show step text when showSteps property is true', () => {
        steps.forEach((__, index) => {
            cy.get('vl-progress-bar')
                .shadow()
                .find(`.vl-progress-bar__step:nth-child(${index + 1}) .vl-progress-bar__bullet__text`)
                .should('exist');
        });
    });
});
