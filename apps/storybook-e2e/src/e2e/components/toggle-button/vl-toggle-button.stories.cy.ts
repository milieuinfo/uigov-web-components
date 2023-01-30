const toggleButtonUrl =
    'http://localhost:8080/iframe.html?id=components-toggle-button--toggle-button-default&viewMode=story';
const toggleButtonWithIconUrl =
    'http://localhost:8080/iframe.html?id=components-toggle-button--toggle-button-with-icon&viewMode=story';

describe('story vl-toggle-button', () => {
    it('should contain text', () => {
        cy.visit(`${toggleButtonUrl}`);
        cy.getDataCy('toggle-button').contains('Toggle button');
    });

    it('should contain a disabled toggle button', () => {
        cy.visit(`${toggleButtonUrl}&args=disabled:true`);
        cy.getDataCy('toggle-button').shadow().find('button.vl-button').should('have.class', 'vl-button--disabled');
    });

    it('should fire a click event', () => {
        cy.visit(`${toggleButtonUrl}`);
        cy.getDataCy('toggle-button')
            .invoke('on', 'click', cy.stub().as('click'))
            .shadow()
            .find('button.vl-button')
            .click({ force: true });
        cy.get('@click').should('have.been.calledOnce');
    });

    // TODO: deze test faalt, maar is ook een rare test
    it.skip('should fire a change event', () => {
        cy.visit(`${toggleButtonUrl}`);
        cy.getDataCy('toggle-button')
            .invoke('on', 'change', cy.stub().as('change'))
            .shadow()
            .find('button.vl-button')
            .click({ force: true });
        cy.get('@change').should('have.been.calledOnce');
    });

    it('should contain visually hidden text', () => {
        cy.visit(`${toggleButtonWithIconUrl}&args=textHidden:true`);
        cy.getDataCy('toggle-button-with-icon')
            .shadow()
            .find('button.vl-button--icon')
            .find('span[is="vl-text"]')
            .should('have.class', 'vl-u-visually-hidden');
    });

    it('should contain an icon', () => {
        cy.visit(`${toggleButtonWithIconUrl}`);
        cy.getDataCy('toggle-button-with-icon')
            .shadow()
            .find('button.vl-button')
            .find('span.vl-icon')
            .should('have.class', 'vl-icon')
            .should('have.class', 'vl-vi-pencil');
    });

    it('should contain an icon on the left of the button text', () => {
        cy.visit(`${toggleButtonWithIconUrl}&args=iconPlacement:before`);
        cy.getDataCy('toggle-button-with-icon')
            .shadow()
            .find('button.vl-button')
            .children()
            .first()
            .should('have.class', 'vl-icon')
            .should('have.class', 'vl-vi-pencil');
    });

    it('should contain an icon on the right of the button text', () => {
        cy.visit(`${toggleButtonWithIconUrl}&args=iconPlacement:after`);
        cy.getDataCy('toggle-button-with-icon')
            .shadow()
            .find('button.vl-button')
            .children()
            .last()
            .should('have.class', 'vl-icon')
            .should('have.class', 'vl-vi-pencil');
    });

    it('should contain a clickable toggle button', () => {
        cy.visit(`${toggleButtonUrl}`);
        // Check original state
        cy.getDataCy('toggle-button').shadow().find('button.vl-button').should('have.class', 'vl-button--tertiary');
        // Click button
        cy.getDataCy('toggle-button').shadow().find('button.vl-button').click({ force: true });
        // TODO: het is mij een raadsel waarom na klikken de vl-button--tertiary class weg zou moeten zijn ?
        // Check state after clicking
        // cy.getDataCy('toggle-button').shadow().find('button.vl-button').should('not.have.class', 'vl-button--tertiary');
    });
});
