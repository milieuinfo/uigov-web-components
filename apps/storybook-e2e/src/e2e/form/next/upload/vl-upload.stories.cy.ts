const uploadDefaultUrl = 'http://localhost:8080/iframe.html?id=form-next-upload--upload-default&viewMode=story';

describe('story - vl-upload-next - default', () => {
    it('should display story', () => {
        cy.visit(uploadDefaultUrl);

        cy.get('vl-upload-next').shadow().find('input');
    });
});
