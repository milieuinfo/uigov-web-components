const alertUrl = 'http://localhost:8080/iframe.html?id=components-alert--alert-default&viewMode=story';

describe('story vl-alert', () => {
    it('should contain a title', () => {
        cy.visit(`${alertUrl}&args=type:error`);
        cy.getDataCy('alert').shadow().find('#alert').should('have.class', 'vl-alert').contains('Lorem ipsum');
    });

    it('should contain a text', () => {
        cy.visit(`${alertUrl}&args=type:error`);
        cy.getDataCy('alert')
            .find('p')
            .contains(
                'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.'
            );
    });

    it('should contain an icon', () => {
        cy.visit(`${alertUrl}&args=type:error`);
        cy.getDataCy('alert')
            .shadow()
            .find('.vl-alert__icon > span')
            .should('have.class', 'vl-icon')
            .should('have.class', 'vl-vi-warning');
    });

    it('should contain a close button', () => {
        cy.visit(`${alertUrl}&args=type:error;closable:true`);
        cy.getDataCy('alert').shadow().find('#close').should('have.class', 'vl-alert__close');
    });

    it('should be removed after clicking the close button', () => {
        cy.visit(`${alertUrl}&args=type:error;closable:true`);
        cy.getDataCy('alert').shadow().find('#close').click();
        cy.getDataCy('alert').should('not.exist');
    });
});
