const titleNextDefaultUrl = 'http://localhost:8080/iframe.html?id=components-next-title--title-default&viewMode=story';

describe('story - vl-title-next - default', () => {
    it('should render', () => {
        cy.visit(titleNextDefaultUrl);

        cy.get('vl-title-next').shadow();
    });
});
