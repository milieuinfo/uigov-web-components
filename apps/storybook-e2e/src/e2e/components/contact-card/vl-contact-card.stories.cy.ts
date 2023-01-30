const contactCardUrl =
    'http://localhost:8080/iframe.html?id=components-contact-card--contact-card-default&viewMode=story';

describe('story vl-contact-card', () => {
    it('should contain a title', () => {
        cy.visit(`${contactCardUrl}`);
        cy.getDataCy('contact-card').find('h2').contains('Departement Onderwijs en Vorming');
    });

    it('should contain an address', () => {
        cy.visit(`${contactCardUrl}`);
        cy.getDataCy('contact-card')
            .get('.vl-properties__list')
            .children()
            .eq(0)
            .contains('Adres')
            .next()
            .contains('Hendrik Consciencegebouw')
            .next()
            .contains('Telefoon')
            .next()
            .find('.vl-link')
            .contains('02 553 72 02')
            .parent()
            .parent()
            .next()
            .contains('E-mail')
            .next()
            .find('.vl-link')
            .contains('onderwijs.vlaanderen@vlaanderen.be')
            .parent()
            .next()
            .contains('Website')
            .next()
            .find('.vl-link')
            .contains('http://onderwijs.vlaanderen.be');
    });
});
