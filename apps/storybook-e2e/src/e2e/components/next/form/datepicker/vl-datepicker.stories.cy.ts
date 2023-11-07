const datepickerNextUrl =
    'http://localhost:8080/iframe.html?id=components-next-form-datepicker--datepicker-default&viewMode=story&args=';

describe('story vl-datepicker-next default', () => {
    it('should render story', () => {
        cy.visit(`${datepickerNextUrl}`);

        cy.get('vl-datepicker-next').shadow();
    });
});
