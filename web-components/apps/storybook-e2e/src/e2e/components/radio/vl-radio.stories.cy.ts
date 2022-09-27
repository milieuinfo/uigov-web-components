const radioUrl = 'http://localhost:8080/iframe.html?id=components-radio--radio-default&viewMode=story';
const radioGroupUrl = 'http://localhost:8080/iframe.html?id=components-radio--radio-group-default&viewMode=story';

describe('story vl-radio', () => {
    it.skip('should contain a label', () => {
        cy.visit(`${radioUrl}`);
        cy.getDataCy('radio').shadow().find('label.vl-radio').find('#label-text').contains('Ja');
    });

    it.skip('should contain a block level radio button', () => {
        cy.visit(`${radioUrl}&args=block:true`);
        cy.getDataCy('radio').shadow().find('label.vl-radio').should('have.class', 'vl-radio--block');
    });

    it.skip('should contain a radio button in an error state', () => {
        cy.visit(`${radioUrl}&args=error:true`);
        cy.getDataCy('radio').shadow().find('label.vl-radio').should('have.class', 'vl-radio--error');
    });

    it.skip('should contain a radio button in disabled state', () => {
        cy.visit(`${radioUrl}&args=disabled:true`);
        cy.getDataCy('radio').shadow().find('label.vl-radio').should('have.class', 'vl-radio--disabled');
    });

    it.skip('should contain a radio button without a label', () => {
        cy.visit(`${radioUrl}&args=single:true`);
        cy.getDataCy('radio')
            .shadow()
            .find('label.vl-radio')
            .find('#label-text')
            .should('have.class', 'vl-u-visually-hidden');
    });

    it.skip('should contain a radio button that is checked by default', () => {
        // cy.visit(`${radioUrl}&args=checked:true`)
        // cy.getDataCy('radio')
        // .shadow()
    });

    it('should contain a radio button group where we can navigate between radio inputs with the keyboard arrow keys', () => {
        cy.visit(`${radioGroupUrl}`);

        // Click first radio and go to the next with the keyboard
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-1')
            .shadow()
            .find('label.vl-radio')
            .click()
            .type('{rightArrow}');

        // First radio should not be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-1')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Second radio should be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-2')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');

        // Go to the previous radio button by typing arrow up.
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-2')
            .shadow()
            .find('label.vl-radio')
            .click()
            .type('{upArrow}');

        // First radio should be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-1')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');

        // Second radio should not be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-2')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');
    });

    it.skip('should contain a radio button group where you can only select one radio at a time', () => {
        cy.visit(`${radioGroupUrl}`);

        // Click first radio
        cy.getDataCy('radio-button-group').find('#radio-group-1-radio-1').shadow().find('label.vl-radio').click();

        // First radio should be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-1')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');

        // Second radio should not be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-2')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Click second radio
        cy.getDataCy('radio-button-group').find('#radio-group-1-radio-2').shadow().find('label.vl-radio').click();

        // First radio should not be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-1')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Second radio should be checked
        cy.getDataCy('radio-button-group')
            .find('#radio-group-1-radio-2')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');
    });
});
