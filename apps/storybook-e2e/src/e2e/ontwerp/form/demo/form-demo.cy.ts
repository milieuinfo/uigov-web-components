const formDemoUrl = 'http://localhost:8080/iframe.html?id=ontwerp-form-demo--demo&viewMode=story';

describe('story - form demo', () => {
    it('should render', () => {
        cy.visit(formDemoUrl);

        cy.get('vl-form-demo').shadow();
    });
});
