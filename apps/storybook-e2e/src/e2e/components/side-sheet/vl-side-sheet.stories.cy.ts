import { transformStringToArgument } from '../../../support/utils';

const sideSheetUrl = 'http://localhost:8080/iframe.html?id=components-side-sheet--side-sheet-default&viewMode=story';

const shouldClickToggleButton = () => {
    cy.get('vl-side-sheet').shadow().find('vl-toggle-button').shadow().find('button').click({ force: true });
};

const shouldBeOpen = () => {
    cy.get('vl-side-sheet').should('have.attr', 'data-vl-open');
    cy.get('vl-side-sheet').shadow().find('div#vl-side-sheet').shouldHaveStyle('display', 'block');
};

const shouldBeClosed = () => {
    cy.get('vl-side-sheet').should('not.have.attr', 'data-vl-open');
    cy.get('vl-side-sheet').shadow().find('div#vl-side-sheet').shouldHaveStyle('display', 'none');
};

const shouldHaveIcon = (iconName: string) => {
    cy.get('vl-side-sheet')
        .shadow()
        .find('vl-toggle-button')
        .shadow()
        .find('button')
        .find('span[is=vl-icon]')
        .should('have.class', `vl-vi-${iconName}`);
};

describe('story - vl-side-sheet default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(sideSheetUrl);

        cy.get('vl-side-sheet');
        cy.checkA11y('vl-side-sheet');
    });

    it('should open and close the side-sheet', () => {
        cy.visit(`${sideSheetUrl}`);

        shouldBeClosed();
        shouldClickToggleButton();
        shouldBeOpen();
        shouldClickToggleButton();
        shouldBeClosed();
    });

    it('should contain the expected data', () => {
        cy.visit(`${sideSheetUrl}`);

        cy.get('vl-side-sheet')
            .shadow()
            .find('slot')
            .within((slot) => {
                const slotContent = (slot[0] as any).assignedNodes();
                expect(slotContent[1].innerHTML).to.contain('Lorem ipsum dolor sit amet,');
            });
    });

    it('should not contain toggle text by default', () => {
        cy.visit(sideSheetUrl);

        cy.get('vl-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .find('span#vl-side-sheet-toggle-text')
            .should('not.contain.text');
    });

    it('should contain toggle text if set', () => {
        const toggleText = 'text on toggle button';
        cy.visit(`${sideSheetUrl.concat(`&args=toggleText:${transformStringToArgument(toggleText)}`)}`);

        cy.get('vl-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .find('span#vl-side-sheet-toggle-text')
            .contains(toggleText);
    });

    it('should not be absolutely positioned by default', () => {
        cy.visit(sideSheetUrl);

        cy.get('vl-side-sheet')
            .shouldHaveStyle('position', 'absolute', true)
            .should('not.have.class', 'vl-side-sheet--absolute');
    });

    it('should be absolutely positioned', () => {
        cy.visit(`${sideSheetUrl.concat('&args=absolute:true')}`);

        cy.get('vl-side-sheet').shouldHaveStyle('position', 'absolute').should('have.class', 'vl-side-sheet--absolute');
    });

    it('should not contain a tooltip by default', () => {
        cy.visit(sideSheetUrl);

        cy.get('vl-side-sheet').shadow().find('vl-toggle-button').should('not.have.attr', 'title');
    });

    it('should contain a custom tooltip', () => {
        const toolTipText = 'text on native tooltip';
        cy.visit(`${sideSheetUrl.concat(`&args=tooltipText:${transformStringToArgument(toolTipText)}`)}`);

        cy.get('vl-side-sheet').shadow().find('vl-toggle-button').should('have.attr', 'title', toolTipText);
    });

    it('should be right by default & change default icon direction when opening or closing', () => {
        cy.visit(`${sideSheetUrl}`);

        cy.get('vl-side-sheet').shouldHaveStyle('right', '0px');
        shouldHaveIcon('nav-left');
        shouldClickToggleButton();
        shouldHaveIcon('nav-right');
        shouldClickToggleButton();
        shouldHaveIcon('nav-left');
    });

    it('should be left & change icon direction when opening or closing', () => {
        cy.visit(`${sideSheetUrl.concat(`&args=left:true`)}`);

        cy.get('vl-side-sheet').shouldHaveStyle('left', '0px');
        shouldHaveIcon('nav-right');
        shouldClickToggleButton();
        shouldHaveIcon('nav-left');
        shouldClickToggleButton();
        shouldHaveIcon('nav-right');
    });

    it('should have a custom icon & remain the same when opening or closing', () => {
        const customIcon = 'list-add';
        cy.visit(`${sideSheetUrl.concat(`&args=customIcon:${customIcon}`)}`);

        shouldHaveIcon(customIcon);
        shouldClickToggleButton();
        shouldHaveIcon(customIcon);
        shouldClickToggleButton();
        shouldHaveIcon(customIcon);
    });

    it('should hide toggle button', () => {
        cy.visit(`${sideSheetUrl}&args=hideToggleButton:true`);

        cy.get('vl-side-sheet').shadow().find('vl-toggle-button').should('have.class', 'vl-u-visually-hidden');
    });

    it('should open and close the side-sheet when toggle button is hidden', () => {
        cy.visit(`${sideSheetUrl}&args=hideToggleButton:true`);

        shouldBeClosed();
        shouldClickToggleButton();
        shouldBeOpen();
        shouldClickToggleButton();
        shouldBeClosed();
    });

    it('should place icon before the text by default', () => {
        cy.visit(`${sideSheetUrl}&args=toggleText:toggle-side-sheet`);

        cy.get('vl-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .shadow()
            .find('button.vl-button')
            .children()
            .first()
            .should('have.class', 'vl-icon');
    });

    it('should place icon behind the text ', () => {
        cy.visit(`${sideSheetUrl}&args=iconPlacement:after;toggleText:toggle-side-sheet`);

        cy.get('vl-side-sheet')
            .shadow()
            .find('vl-toggle-button')
            .shadow()
            .find('button.vl-button')
            .children()
            .last()
            .should('have.class', 'vl-icon');
    });
});
