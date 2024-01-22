const radioGroupNextUrl =
    'http://localhost:8080/iframe.html?args=&id=form-next-radio-group--radio-group-default&viewMode=story';

describe('story vl-radio-group-next default', () => {
    it('should display story', () => {
        cy.visit(radioGroupNextUrl);

        cy.get('vl-radio-group-next').shadow();
    });
});
