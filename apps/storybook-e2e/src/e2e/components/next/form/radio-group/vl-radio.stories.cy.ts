const radioNextUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-form-radio-group--radio-default&viewMode=story';

describe('story vl-radio-next default', () => {
    it('should display story', () => {
        cy.visit(radioNextUrl);

        cy.get('vl-radio-next').shadow().find('input');
    });
});
