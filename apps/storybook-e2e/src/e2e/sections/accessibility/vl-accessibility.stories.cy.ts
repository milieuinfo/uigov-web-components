const accessibilityUrl =
    'http://localhost:8080/iframe.html?id=sections-accessibility--accessibility-default&viewMode=story';

describe('story vl-accessibility', () => {
    it('should have accessibility header', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility').shadow().find('h1').contains('Toegankelijkheidsverklaring');
    });

    it('should have default application', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility').shadow().find('p').contains('deze applicatie');
    });

    it('should set application', () => {
        cy.visit(`${accessibilityUrl}&args=application:deze+nieuwe+applicatie`);

        cy.get('vl-accessibility').shadow().find('p').contains('deze nieuwe applicatie');
    });

    it('should have default compliance if evaluation is not set to NOT_EVALUATED', () => {
        cy.visit(`${accessibilityUrl}&args=evaluation:EXPERT_EVALUATED`);

        cy.get('vl-accessibility').shadow().contains('Deze website voldoet gedeeltelijk');
    });

    it('should have compliance NOT_COMPLIANT if evaluation is set to NOT_EVALUATED', () => {
        cy.visit(`${accessibilityUrl}`);

        cy.get('vl-accessibility').shadow().contains('Deze website voldoet niet aan');
    });

    it('should set compliance if evaluation is not set to NOT_EVALUATED', () => {
        cy.visit(`${accessibilityUrl}&args=compliance:FULLY_COMPLIANT;evaluation:EXPERT_EVALUATED`);

        cy.get('vl-accessibility').shadow().contains('Deze website voldoet volledig');
    });

    it('should have default date', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility').shadow().contains('is opgesteld op 20 juli 2021');
    });

    it('should set date', () => {
        cy.visit(`${accessibilityUrl}&args=date:27+januari+2023`);

        cy.get('vl-accessibility').shadow().contains('is opgesteld op 27 januari 2023');
    });

    it('should have default date modified', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility').shadow().contains('voor het laatst herzien op 20 juli 2021');
    });

    it('should set date modified', () => {
        cy.visit(`${accessibilityUrl}&args=dateModified:27+januari+2023`);

        cy.get('vl-accessibility').shadow().contains('voor het laatst herzien op 27 januari 2023');
    });

    it('should disable back link and emit event', () => {
        cy.visit(`${accessibilityUrl}&args=disableBackLink:true`);

        // De event listener wordt toegevoegd op het document omdat vl-accessibility geen property 'addEventListener' heeft volgens Cypress.
        // Aangezien bubbles op true staat voor het event werkt dit.
        cy.document().invoke('addEventListener', 'vl-click-back', cy.stub().as('vl-click-back'));
        cy.get('vl-accessibility').shadow().find('vl-functional-header').shadow().find('a#back-link').click();
        cy.get('@vl-click-back').should('have.been.calledOnce');
    });

    it('should have default evaluation', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility')
            .shadow()
            .contains(
                'Deze toegankelijkheidsverklaring is opgesteld op 20 juli 2021 en werd voor het laatst herzien op 20 juli 2021.'
            );
    });

    it('should set evaluation', () => {
        cy.visit(`${accessibilityUrl}&args=evaluation:EXPERT_EVALUATED`);

        cy.get('vl-accessibility').shadow().contains('gebaseerd op een analyse van een web accessibility specialist');
    });

    it('should have default version', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility').shadow().find('span').contains('1.0.0');
    });

    it('should set version', () => {
        cy.visit(`${accessibilityUrl}&args=version:v24`);

        cy.get('vl-accessibility').shadow().find('span').contains('v24');
    });

    it('should not set limitations if evaluation is set to NOT_EVALUATED', () => {
        cy.visit(accessibilityUrl);

        cy.get('vl-accessibility')
            .shadow()
            .contains('De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.');
    });

    it('should not set limitations if compliance is set to FULLY_COMPLIANT', () => {
        cy.visit(`${accessibilityUrl}&args=evaluation:EXPERT_EVALUATED;compliance:FULLY_COMPLIANT`);

        cy.get('vl-accessibility')
            .shadow()
            .contains('Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.');
    });

    it('should set limitations if evaluation is not set to NOT_EVALUATED', () => {
        cy.visit(`${accessibilityUrl}&args=evaluation:EXPERT_EVALUATED`);

        cy.get('vl-accessibility')
            .shadow()
            .find('p')
            .contains('De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):');

        cy.get('vl-accessibility').shadow().find('h3').contains('Niet-naleving van het bestuursdecreet');
        cy.get('vl-accessibility').shadow().find('h3').contains('Onevenredige last');
        cy.get('vl-accessibility')
            .shadow()
            .find('h3')
            .contains('De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving');
    });
});
