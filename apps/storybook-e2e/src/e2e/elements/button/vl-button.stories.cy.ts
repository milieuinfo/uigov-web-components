const buttonDefaultUrl = 'http://localhost:8080/iframe.html?id=elements-button--button-default&viewMode=story';

describe('story elements / button / vl-button - default', () => {
    it('should apply the content', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button`);
        cy.getDataCy('button-default').should('contain.text', 'my-button');
    });

    it('should apply the disabled style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;disabled:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('be.disabled');
    });

    it('should apply the secondary style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;secondary:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--secondary');
    });

    it('should apply the tertiary style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;tertiary:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--tertiary');
    });

    it('should apply the loading style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;loading:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--loading');
    });

    it('should apply the error style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;error:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--error');
    });

    it('should apply the block style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;block:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--block');
    });

    it('should apply the large style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;large:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--large');
    });

    it('should apply the wide style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;wide:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--wide');
    });

    it('should apply the narrow style', () => {
        cy.visit(`${buttonDefaultUrl}&args=content:my-button;narrow:true`);
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--narrow');
    });

    it('should apply multiple styles', () => {
        cy.visit(
            `${buttonDefaultUrl}&args=content:my-button;disabled:true;secondary:true;tertiary:true;loading:true;error:true;block:true;large:true;wide:true;narrow:true`
        );
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('be.disabled')
            .should('have.class', 'vl-button--secondary')
            .should('have.class', 'vl-button--tertiary')
            .should('have.class', 'vl-button--loading')
            .should('have.class', 'vl-button--error')
            .should('have.class', 'vl-button--block')
            .should('have.class', 'vl-button--large')
            .should('have.class', 'vl-button--wide')
            .should('have.class', 'vl-button--narrow');
    });

    it('should not apply multiple styles - because not specified', () => {
        cy.visit(`${buttonDefaultUrl}`);
        cy.getDataCy('button-default')
            .should('contain.text', 'button')
            .should('have.class', 'vl-button')
            .should('not.be.disabled')
            .should('not.have.class', 'vl-button--secondary')
            .should('not.have.class', 'vl-button--tertiary')
            .should('not.have.class', 'vl-button--loading')
            .should('not.have.class', 'vl-button--error')
            .should('not.have.class', 'vl-button--block')
            .should('not.have.class', 'vl-button--large')
            .should('not.have.class', 'vl-button--wide')
            .should('not.have.class', 'vl-button--narrow');
    });

    it('should not apply multiple styles - because specified as falls', () => {
        cy.visit(
            `${buttonDefaultUrl}&args=content:my-button;disabled:false;secondary:false;tertiary:false;loading:false;error:false;block:false;large:false;wide:false;narrow:false`
        );
        cy.getDataCy('button-default')
            .should('contain.text', 'my-button')
            .should('have.class', 'vl-button')
            .should('not.be.disabled')
            .should('not.have.class', 'vl-button--secondary')
            .should('not.have.class', 'vl-button--tertiary')
            .should('not.have.class', 'vl-button--loading')
            .should('not.have.class', 'vl-button--error')
            .should('not.have.class', 'vl-button--block')
            .should('not.have.class', 'vl-button--large')
            .should('not.have.class', 'vl-button--wide')
            .should('not.have.class', 'vl-button--narrow');
    });
});
