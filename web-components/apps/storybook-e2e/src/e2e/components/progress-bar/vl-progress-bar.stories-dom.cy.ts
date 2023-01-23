const progressBarUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-default&viewMode=story';
const progressBarNumericUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-numeric&viewMode=story';
const progressBarFocusedUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-focused&viewMode=story';

const changeActiveStep = (stepNumber: number) => {
    cy.get('vl-progress-bar').invoke('attr', 'data-vl-active-step', stepNumber);
};

const shouldHaveThreeSteps = () => {
    cy.get('vl-progress-bar').shadow().find('.vl-progress-bar__step').should('have.length', 3);
};

const shouldHaveActiveStep = (stepNumber: number) => {
    cy.get('vl-progress-bar')
        .shadow()
        .find('.vl-progress-bar__step')
        .eq(stepNumber - 1)
        .should('have.class', 'vl-progress-bar__step--active');
};

const shouldSetCorrectActiveStep = () => {
    shouldHaveActiveStep(1);
    changeActiveStep(2);
    shouldHaveActiveStep(2);
    changeActiveStep(3);
    shouldHaveActiveStep(3);
};

const shouldHaveVisibleTooltipForStep = (stepNumber) => {
    cy.get('vl-progress-bar')
        .shadow()
        .find('.vl-progress-bar__step')
        .eq(stepNumber - 1)
        .find('button.vl-progress-bar__bullet')
        .next()
        .should('have.attr', 'aria-hidden', 'false');
};

describe('story vl-progress-bar', () => {
    it('default - should have 3 steps', () => {
        cy.visit(progressBarUrl);

        shouldHaveThreeSteps();
    });

    it('default - should set correct active step', () => {
        cy.visit(progressBarUrl);

        shouldSetCorrectActiveStep();
    });

    it('numeric - should have 3 steps', () => {
        cy.visit(progressBarNumericUrl);

        shouldHaveThreeSteps();
    });

    it('numeric - should set correct active step', () => {
        cy.visit(progressBarNumericUrl);

        shouldSetCorrectActiveStep();
    });

    it('numeric - should have numeric progress bar', () => {
        cy.visit(progressBarNumericUrl);

        cy.get('vl-progress-bar').shadow().find('.vl-progress-bar').should('have.class', 'vl-progress-bar--numeric');
    });

    it('focused - should have 3 steps', () => {
        cy.visit(progressBarFocusedUrl);

        shouldHaveThreeSteps();
    });

    it('focused - should set correct active step', () => {
        cy.visit(progressBarFocusedUrl);

        shouldSetCorrectActiveStep();
    });

    it('focused - should have visible tootltip for active step', () => {
        cy.visit(progressBarFocusedUrl);

        shouldHaveVisibleTooltipForStep(1);
        changeActiveStep(2);
        shouldHaveVisibleTooltipForStep(2);
        changeActiveStep(3);
        shouldHaveVisibleTooltipForStep(3);
    });
});
