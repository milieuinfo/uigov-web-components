const progressBarUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-default&viewMode=story';
const progressBarNumericUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-numeric&viewMode=story';
const progressBarFocusedUrl =
    'http://localhost:8080/iframe.html?id=components-progress-bar--progress-bar-focused&viewMode=story';

const changeActiveStep = (stepNumber: number) => {
    cy.get('vl-progress-bar').invoke('attr', 'data-vl-active-step', stepNumber);
};

const shouldSetSteps = () => {
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

describe('story vl-progress-bar default', () => {
    it('should set steps', () => {
        cy.visit(progressBarUrl);

        shouldSetSteps();
    });

    it('should set correct active step', () => {
        cy.visit(progressBarUrl);

        shouldSetCorrectActiveStep();
    });
});

describe('story vl-progress-bar numeric', () => {
    it('should set steps', () => {
        cy.visit(progressBarNumericUrl);

        shouldSetSteps();
    });

    it('should set correct active step', () => {
        cy.visit(progressBarNumericUrl);

        shouldSetCorrectActiveStep();
    });

    it('should have numeric progress bar', () => {
        cy.visit(progressBarNumericUrl);

        cy.get('vl-progress-bar').shadow().find('.vl-progress-bar').should('have.class', 'vl-progress-bar--numeric');
    });
});

describe('story vl-progress-bar focused', () => {
    it('should set steps', () => {
        cy.visit(progressBarFocusedUrl);

        shouldSetSteps();
    });

    it('should set correct active step', () => {
        cy.visit(progressBarFocusedUrl);

        shouldSetCorrectActiveStep();
    });

    it('should have visible tootltip for active step', () => {
        cy.visit(progressBarFocusedUrl);

        shouldHaveVisibleTooltipForStep(1);
        changeActiveStep(2);
        shouldHaveVisibleTooltipForStep(2);
        changeActiveStep(3);
        shouldHaveVisibleTooltipForStep(3);
    });
});
