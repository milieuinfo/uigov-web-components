import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlRadioComponent } from './vl-radio.component';

registerWebComponents([VlRadioComponent]);

const clickRadioWithValue = (value: string) => {
    cy.get(`vl-radio-next[value="${value}"]`).shadow().find('input').click({ force: true });
};

const shouldDisabledDefault = () => {
    cy.get('vl-radio-next').invoke('attr', 'disabled', '');
    cy.get('vl-radio-next').should('have.attr', 'disabled');
    cy.get('vl-radio-next')
        .shadow()
        .find('.vl-radio')
        .shouldHaveComputedStyle({ style: 'color', value: 'rgb(51, 51, 50)' })
        .should('have.class', 'vl-radio--disabled');
};

describe('component vl-radio-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-radio-next label="plaats"></vl-radio-next>`);

        cy.get('vl-radio-next').shadow();
    });

    it('should be disabled', () => {
        cy.mount(html`<vl-radio-next label="plaats"></vl-radio-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-radio-next');
        shouldDisabledDefault();
    });

    it('should be error', () => {
        cy.mount(html`<vl-radio-next label="plaats"></vl-radio-next>`);
        cy.injectAxe();

        cy.get('vl-radio-next').invoke('attr', 'error', '');
        cy.get('vl-radio-next').should('have.attr', 'error');
        cy.get('vl-radio-next').shadow().find('.vl-radio').should('have.class', 'vl-radio--error');
        cy.checkA11y('vl-radio-next');

        cy.get('vl-radio-next')
            .shadow()
            .find('.vl-radio__label')
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'background-color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'border-color', value: 'rgb(210, 55, 60)' });
    });

    it('should be success', () => {
        cy.mount(html`<vl-radio-next label="plaats"></vl-radio-next>`);
        cy.injectAxe();

        cy.get('vl-radio-next').invoke('attr', 'success', '');
        cy.get('vl-radio-next').should('have.attr', 'success');
        cy.get('vl-radio-next').shadow().find('.vl-radio').should('have.class', 'vl-radio--success');
        cy.checkA11y('vl-radio-next');

        cy.get('vl-radio-next')
            .shadow()
            .find('.vl-radio__label')
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'background-color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'border-color', value: 'rgb(0, 158, 71)' });
    });

    it('should dispatch vl-checked event on check', () => {
        cy.mount(html`<vl-radio-next label="plaats"></vl-radio-next>`);
        cy.injectAxe();

        const value = 'test';
        cy.get('vl-radio-next').invoke('attr', 'value', value);

        cy.createStubForEvent('vl-radio-next', 'vl-checked');
        cy.get('vl-radio-next').shadow().find('.vl-radio__toggle').click({ force: true });
        cy.get('@vl-checked')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { checked: true, value });
        cy.checkA11y('vl-radio-next');
    });
});
