const datepickerNextDefaultUrl =
    'http://localhost:8080/iframe.html?args=&id=form-next-datepicker--datepicker-default&viewMode=story';

describe('story - vl-datepicker-next - default', () => {
    it('should render', () => {
        cy.visit(datepickerNextDefaultUrl);

        cy.get('vl-datepicker-next').shadow();
    });
});
