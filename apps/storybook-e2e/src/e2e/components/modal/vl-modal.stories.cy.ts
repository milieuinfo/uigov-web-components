const modalUrl = 'http://localhost:8080/iframe.html?id=components-modal--modal-default&viewMode=story';
const modalWithOtherActionUrl =
    'http://localhost:8080/iframe.html?id=components-modal--modal-with-other-action&viewMode=story';

const openModal = () => {
    cy.getDataCy('button-modal-toggle').click();
};

const isDialogHidden = () => {
    cy.getDataCy('modal').shadow().find('.vl-modal-dialog').should('have.attr', 'aria-hidden', 'true');
};

const isDialogVisible = () => {
    cy.getDataCy('modal').shadow().find('.vl-modal-dialog').should('have.attr', 'aria-hidden', 'false');
};

const closeWithCancelButton = () => {
    cy.getDataCy('modal').shadow().find('#modal-toggle-cancellable').click();
};

const closeWithCloseButton = () => {
    cy.getDataCy('modal').shadow().find('#close').click();
};

const clickActionButton = () => {
    cy.getDataCy('modal').find('button.vl-button').click();
};

const clickCustomActionButton = () => {
    cy.getDataCy('modal').find('button.custom-action-button').click();
};

const closeByPressingEscape = () => {
    cy.getDataCy('modal').shadow().find('#modal-toggle-title').type('{esc}');
};

describe('story vl-modal', () => {
    it('should contain a toggable modal by using the cancel button', () => {
        cy.visit(`${modalUrl}`);
        isDialogHidden();
        openModal();
        isDialogVisible();
        closeWithCancelButton();
        isDialogHidden();
    });

    it('should contain a toggable modal by using the close button', () => {
        cy.visit(`${modalUrl}&args=closable:true`);
        isDialogHidden();
        openModal();
        isDialogVisible();
        closeWithCloseButton();
        isDialogHidden();
    });

    it('should contain a non closable modal when using the action button', () => {
        cy.visit(`${modalUrl}&args=notAutoClosable:true`);
        openModal();
        isDialogVisible();
        clickActionButton();
        isDialogVisible();
        closeWithCancelButton();
        isDialogHidden();
    });

    it('should contain an automatically closable modal by clicking the custom action link', () => {
        cy.visit(`${modalWithOtherActionUrl}`);
        openModal();
        isDialogVisible();
        clickCustomActionButton();
        isDialogHidden();
    });

    // TODO: deze test faalt
    it.skip('should contain a closable modal by pressing escape', () => {
        cy.visit(`${modalWithOtherActionUrl}`);
        openModal();
        isDialogVisible();
        closeByPressingEscape();
        isDialogHidden();
    });
});
