import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlRadioComponent } from './vl-radio.component';
import { VlRadioGroupComponent } from './vl-radio-group.component';

registerWebComponents([VlRadioComponent, VlRadioGroupComponent]);

const clickRadioWithValue = (value: string) => {
    cy.get(`vl-radio-next[value="${value}"]`).shadow().find('input').click({ force: true });
};

describe('component - vl-radio-group-next', () => {
    it('should mount', () => {
        cy.mount(html`<vl-radio-group-next></vl-radio-group-next>`);

        cy.get('vl-radio-group-next').shadow();
    });

    it('should be accessible', () => {
        cy.mount(html`
            <vl-radio-group-next>
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.checkA11y('vl-radio-group-next');
    });

    it('should contain a radio button group where we can navigate between radio inputs with the keyboard arrow keys', () => {
        cy.mount(html`
            <vl-radio-group-next>
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        // Eerste radio checken en met de pijltjestoets naar de volgende gaan
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('.vl-radio__toggle')
            .click({ force: true });
        cy.get('vl-radio-group-next').trigger('keydown', { code: 'ArrowDown' });

        // Eerste radio mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Tweede radio moet gecheckt zijn & focus hebben
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked')
            .and('have.focus');

        cy.checkA11y('vl-radio-group-next');

        // Met de pijltjestoets naar de vorige gaan
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('.vl-radio__toggle')
            .click({ force: true });
        cy.get('vl-radio-group-next').trigger('keydown', { code: 'ArrowUp' });

        // Eerste radio moet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked')
            .and('have.focus');

        // Tweede radio mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');
    });

    it('should contain a radio button group where you can only select one radio at a time', () => {
        cy.mount(html`
            <vl-radio-group-next>
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);

        // Eerste radio checken
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('.vl-radio__toggle')
            .click({ force: true });

        // Eerste radio moet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');

        // Tweede radio mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Tweede radio checken
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('.vl-radio__toggle')
            .click({ force: true });

        // Eerste radio mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked');

        // Tweede radio moet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="zee"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked');
    });

    it('should check focused radio on space press', () => {
        cy.mount(html`
            <vl-radio-group-next>
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);

        cy.get('vl-radio-group-next').find<VlRadioComponent>('vl-radio-next[value="land"]').shadow().find('input');

        // tabbing werkt momenteel niet in cypress (zonder plugins): https://github.com/cypress-io/cypress/issues/299
        // focus radio met value "land"
        cy.get('vl-radio-group-next')
            .find<VlRadioComponent>('vl-radio-next[value="land"]')
            .then(($radio) => {
                $radio[0].focus();
            });

        // radio met value "land" mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked')
            .and('have.focus');

        cy.get('vl-radio-group-next').trigger('keydown', { code: 'Space', force: true });

        // radio met value "land" moet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="land"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked')
            .and('have.focus');

        // focus radio met value "lucht"
        cy.get('vl-radio-group-next')
            .find<VlRadioComponent>('vl-radio-next[value="lucht"]')
            .then(($radio) => {
                $radio[0].focus();
            });

        // radio met value "zee" mag niet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="lucht"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('not.be.checked')
            .and('have.focus');

        cy.get('vl-radio-group-next').trigger('keydown', { code: 'Space', force: true });

        // radio met value "zee" moet gecheckt zijn
        cy.get('vl-radio-group-next')
            .find('vl-radio-next[value="lucht"]')
            .shadow()
            .find('label.vl-radio > input')
            .should('be.checked')
            .and('have.focus');
    });
});

describe('component - vl-radio-group-next - in form', () => {
    it('should work inside a form', () => {
        cy.mount(html`
            <form>
                <vl-radio-group-next id="land-zee" name="land-zee">
                    <vl-radio-next value="land">Land</vl-radio-next>
                    <vl-radio-next value="zee">Zee</vl-radio-next>
                    <vl-radio-next value="lucht">Lucht</vl-radio-next>
                </vl-radio-group-next>
            </form>
        `);

        clickRadioWithValue('zee');

        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
    });

    it('should reset to null when the form is reset with no value', () => {
        cy.mount(html`
            <form>
                <vl-radio-group-next id="land-zee" name="land-zee" required>
                    <vl-radio-next value="land">Land</vl-radio-next>
                    <vl-radio-next value="zee">Zee</vl-radio-next>
                    <vl-radio-next value="lucht">Lucht</vl-radio-next>
                </vl-radio-group-next>
                <button class="vl-button" type="reset">Reset</button>
            </form>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').runTest((radioGroup) => {
            // @ts-ignore test private property
            expect(radioGroup.value).to.be.null;
        });

        clickRadioWithValue('zee');

        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');

        cy.get('button[type="reset"]').click();

        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-group-next').runTest((radioGroup) => {
            // @ts-ignore test private property
            expect(radioGroup.value).to.be.null;
        });
    });

    it('should reset the value when the form is reset', () => {
        cy.mount(html`
            <form>
                <vl-radio-group-next id="land-zee" name="land-zee" value="land" required>
                    <vl-radio-next value="land">Land</vl-radio-next>
                    <vl-radio-next value="zee">Zee</vl-radio-next>
                    <vl-radio-next value="lucht">Lucht</vl-radio-next>
                </vl-radio-group-next>
                <button class="vl-button" type="reset">Reset</button>
            </form>
        `);
        cy.injectAxe();

        clickRadioWithValue('zee');

        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');

        cy.get('button[type="reset"]').click();

        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');
    });

    it('should set the value', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee" value="land" required>
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-group-next').invoke('attr', 'value', 'zee');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="land"]').should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="zee"]').should('have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next[value="lucht"]').should('not.have.attr', 'checked');
        cy.checkA11y('vl-radio-group-next');
    });

    it('should set error', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').invoke('attr', 'error', '');

        cy.get('vl-radio-group-next')
            .find('vl-radio-next')
            .first()
            .shadow()
            .find('.vl-radio__label')
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'background-color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'border-color', value: 'rgb(210, 55, 60)' });
    });

    it('should dispatch vl-checked event on check', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        const value = 'land';

        cy.createStubForEvent('vl-radio-group-next', 'vl-checked');
        cy.get('vl-radio-group-next')
            .find(`vl-radio-next[value=${value}]`)
            .shadow()
            .find('.vl-radio__toggle')
            .click({ force: true });
        cy.get('@vl-checked')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { checked: true, value });
    });

    it('should set success', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').invoke('attr', 'success', '');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-group-next')
            .find('vl-radio-next')
            .first()
            .shadow()
            .find('.vl-radio__label')
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'background-color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'border-color', value: 'rgb(0, 158, 71)' });
    });

    it('should set block', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);

        cy.get('vl-radio-group-next').invoke('attr', 'block', '');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-group-next')
            .find('vl-radio-next')
            .shadow()
            .find('.vl-radio')
            .should('have.class', 'vl-radio--block');
    });

    it('should set readonly', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').invoke('attr', 'readonly', '');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-group-next').find('vl-radio-next').first().click();
        cy.get('vl-radio-group-next').find('vl-radio-next').first().should('not.have.attr', 'checked');
        cy.get('vl-radio-group-next').find('vl-radio-next').first().should('have.focus');
    });

    it('should set disabled', () => {
        cy.mount(html`
            <vl-radio-group-next id="land-zee" name="land-zee">
                <vl-radio-next value="land">Land</vl-radio-next>
                <vl-radio-next value="zee">Zee</vl-radio-next>
                <vl-radio-next value="lucht">Lucht</vl-radio-next>
            </vl-radio-group-next>
        `);
        cy.injectAxe();

        cy.get('vl-radio-group-next').invoke('attr', 'disabled', '');
        cy.checkA11y('vl-radio-group-next');

        cy.get('vl-radio-next').should('have.attr', 'disabled');
        cy.get('vl-radio-next')
            .shadow()
            .find('.vl-radio')
            .shouldHaveComputedStyle({ style: 'color', value: 'rgb(51, 51, 50)' })
            .should('have.class', 'vl-radio--disabled');
    });
});
