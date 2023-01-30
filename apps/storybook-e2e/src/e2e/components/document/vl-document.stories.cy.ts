const documentUrl = 'http://localhost:8080/iframe.html?id=components-document--document-default&viewMode=story';

describe('story vl-document', () => {
    it('should contain a document type and icon', () => {
        cy.visit(`${documentUrl}`);
        cy.getDataCy('document')
            .shadow()
            .find('.vl-document__type')
            .find('i')
            .should('have.class', 'vl-vi')
            .should('have.class', 'vl-vi-document');

        cy.getDataCy('document')
            .shadow()
            .find('.vl-document__type')
            .find('span')
            .should('have.class', 'vl-document__type__text');
    });

    it('should contain a document title', () => {
        cy.visit(`${documentUrl}`);
        cy.getDataCy('document').find('span[slot="title"]').contains('Hubert en Jan van Eyck, Vlaamse Primitieven');
    });

    it('should contain a document metadata', () => {
        cy.visit(`${documentUrl}`);
        cy.getDataCy('document').find('span[slot="metadata"]').contains('PDF - 580 kB');
    });
});
