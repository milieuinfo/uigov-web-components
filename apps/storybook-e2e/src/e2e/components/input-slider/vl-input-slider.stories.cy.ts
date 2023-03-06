const inputSliderUrl =
    'http://localhost:8080/iframe.html?id=components-input-slider--input-slider-default&viewMode=story';

describe('story vl-input-slider default', () => {
    it('should have default initial value', () => {
        cy.visit(inputSliderUrl);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'value', 0);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'value', 0);
    });

    it('should set initial value', () => {
        cy.visit(`${inputSliderUrl}&args=initialValue:50`);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'value', 50);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'value', 50);
    });

    it('should have default maximum value', () => {
        cy.visit(inputSliderUrl);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'max', 100);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'max', 100);
    });

    it('should set maximum value', () => {
        cy.visit(`${inputSliderUrl}&args=maxValue:80`);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'max', 80);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'max', 80);
    });

    it('should have default minimum value', () => {
        cy.visit(inputSliderUrl);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'min', 0);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'min', 0);
    });

    it('should set minimum value', () => {
        cy.visit(`${inputSliderUrl}&args=minValue:20`);

        cy.get('vl-input-slider').shadow().find('input[type="range"]').should('have.attr', 'min', 20);
        cy.get('vl-input-slider').shadow().find('input[type="number"]').should('have.attr', 'min', 20);
    });

    it('should emit event on change value of range input', () => {
        cy.visit(inputSliderUrl);

        cy.createStubForEvent('vl-input-slider', 'vl-change-value');
        cy.get('vl-input-slider').shadow().find('input[type="range"]').invoke('attr', 'value', '10').trigger('input');
        cy.get('@vl-change-value').should('have.been.calledOnce');
    });

    it('should emit event on change value of number input', () => {
        cy.visit(inputSliderUrl);

        cy.createStubForEvent('vl-input-slider', 'vl-change-value');
        cy.get('vl-input-slider').shadow().find('input[type="number"]').invoke('attr', 'value', '10').trigger('input');
        cy.get('@vl-change-value').should('have.been.calledOnce');
    });
});
