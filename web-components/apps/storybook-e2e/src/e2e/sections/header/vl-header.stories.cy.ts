const headerUrl = 'http://localhost:8080/iframe.html?args=&id=sections-header--header-in-body&viewMode=story';

describe('story vl-header', () => {
    it.skip('should render', () => {
        cy.visit(`${headerUrl}`);
        cy.getDataCy('header').get('.vlw__primary-bar__brand__host').contains('Departement Omgeving (test)');
    });
});
