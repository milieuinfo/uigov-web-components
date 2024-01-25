const datepickerNextUrl =
    'http://localhost:8080/iframe.html?args=&id=components-next-form-datepicker--datepicker-default&viewMode=story';

describe('story vl-datepicker-next default', () => {
    it('should render story', () => {
        cy.visit(`${datepickerNextUrl}`);

        cy.get('vl-datepicker-next').shadow();
    });
});
