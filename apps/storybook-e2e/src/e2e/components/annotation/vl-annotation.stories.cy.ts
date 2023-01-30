const annotationUrl = 'http://localhost:8080/iframe.html?id=components-annotation--annotation-default&viewMode=story';

describe('story vl-annotation', () => {
    it('as a user, I can see the default annotation', () => {
        cy.visit(`${annotationUrl}`);
        cy.get('vl-annotation').shadow().find('.vl-annotation');
    });
});
