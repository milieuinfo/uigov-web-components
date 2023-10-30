import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlCheckboxComponent, CheckboxDefaults } from './index';

registerWebComponents([VlCheckboxComponent]);
type CheckboxDefaultTypes = Partial<typeof CheckboxDefaults>;

const mountCheckbox = ({ name, value, isSwitch }: CheckboxDefaultTypes) => {
    cy.mount(html` <vl-checkbox-next name=${name} value=${value} ?switch=${isSwitch}>Bevestig.</vl-checkbox-next> `);
};

const mountCheckboxInForm = ({ value, isSwitch, checked }: CheckboxDefaultTypes) => {
    cy.mount(html`
        <form
            id="form"
            class="vl-form"
            @submit=${(e: Event) => {
                e.preventDefault();

                const data = new FormData(e.target as HTMLFormElement);
                console.log(Object.fromEntries(data));
            }}
        >
            <div class="vl-form-grid vl-form-grid--is-stacked">
                <div class="vl-col--3-12">
                    <label class="vl-form__label vl-form__label--block" for="confirmation">Bevestig *</label>
                </div>
                <div class="vl-col--9-12">
                    <vl-checkbox-next
                        id="confirmation"
                        name="confirmation"
                        block
                        required
                        value=${value}
                        ?switch=${isSwitch}
                        ?checked=${checked}
                    >
                        Bevestig.
                    </vl-checkbox-next>
                    <vl-error-message-next input="confirmation" state="valueMissing"
                        >Gelieve je gegevens te bevestigen.</vl-error-message-next
                    >
                </div>
                <div class="vl-col--9-12 vl-push--3-12">
                    <div class="vl-action-group">
                        <button class="vl-button" type="submit">Verstuur</button>
                        <button class="vl-button" type="reset">Reset</button>
                    </div>
                </div>
            </div>
        </form>
    `);
};

const shouldDisabledDefault = () => {
    cy.get('vl-checkbox-next').invoke('attr', 'disabled', '');
    cy.get('vl-checkbox-next').should('have.attr', 'disabled');
    cy.get('vl-checkbox-next')
        .shadow()
        .find('.vl-checkbox')
        .shouldHaveComputedStyle({ style: 'color', value: 'rgb(51, 51, 50)' })
        .should('have.class', 'vl-checkbox--disabled');
};

const shouldDisabledSwitch = () => {
    cy.get('vl-checkbox-next').invoke('attr', 'disabled', '');
    cy.get('vl-checkbox-next').should('have.attr', 'disabled');
    cy.get('vl-checkbox-next')
        .shadow()
        .find('.vl-checkbox--switch__wrapper')
        .shouldHaveComputedStyle({ style: 'color', value: 'rgb(51, 51, 50)' })
        .should('have.class', 'vl-checkbox--disabled');
};

const shouldCheckWithClick = (clickTarget: string) => {
    cy.get('vl-checkbox-next').should('not.have.attr', 'checked');
    cy.get('vl-checkbox-next').shadow().find(clickTarget).click({ force: true });
    cy.get('vl-checkbox-next').should('have.attr', 'checked');
    cy.get('vl-checkbox-next').shadow().find(clickTarget).click({ force: true });
    cy.get('vl-checkbox-next').should('not.have.attr', 'checked');
    cy.get('vl-checkbox-next').shadow().find(clickTarget).click({ force: true });
    cy.get('vl-checkbox-next').should('have.attr', 'checked');
};

const shouldHaveErrorStyleSwitch = () => {
    cy.get('vl-checkbox-next')
        .shadow()
        .find('.vl-checkbox--switch__wrapper')
        .should('have.class', 'vl-checkbox--error');

    cy.get('vl-checkbox-next')
        .shadow()
        .find('.vl-checkbox--switch__label')
        .shouldHaveComputedStyle({ pseudo: 'after', style: 'background-color', value: 'rgb(255, 255, 255)' })
        .shouldHaveComputedStyle({ pseudo: 'after', style: 'border-color', value: 'rgb(210, 55, 60)' })
        .shouldHaveComputedStyle({ pseudo: 'after', style: 'color', value: 'rgb(210, 55, 60)' });
};

describe('component vl-checkbox-next - default', () => {
    const value = 'Optie 1';

    beforeEach(() => {
        mountCheckbox({
            name: 'options',
            value: value,
            isSwitch: false,
        });
    });

    it('should mount', () => {
        cy.get('vl-checkbox-next');
    });

    it('should be checked', () => {
        shouldCheckWithClick('.vl-checkbox__label');

        cy.get('vl-checkbox-next').invoke('attr', 'checked', '');
        cy.get('vl-checkbox-next')
            .shadow()
            .find('.vl-checkbox__label')
            .find('.vl-checkbox__box')
            .shouldHaveComputedStyle({ pseudo: 'after', style: 'background-color', value: 'rgb(0, 85, 204)' });

        cy.get('vl-checkbox-next').should('have.attr', 'checked');
        cy.get('vl-checkbox-next').should('have.attr', 'value', value);
    });

    it('should be disabled', () => {
        shouldDisabledDefault();
    });

    it('should be error', () => {
        cy.get('vl-checkbox-next').invoke('attr', 'error', '');
        cy.get('vl-checkbox-next').should('have.attr', 'error');
        cy.get('vl-checkbox-next').shadow().find('.vl-checkbox').should('have.class', 'vl-checkbox--error');
        cy.get('vl-checkbox-next')
            .shadow()
            .find('i.vl-checkbox__box')
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'background-color', value: 'rgb(255, 255, 255)' })
            .shouldHaveComputedStyle({ pseudo: ':after', style: 'border-color', value: 'rgb(210, 55, 60)' });

        cy.get('vl-checkbox-next').invoke('attr', 'checked', '');

        cy.get('vl-checkbox-next')
            .shadow()
            .find('i.vl-checkbox__box')
            .shouldHaveComputedStyle({ pseudo: ':before', style: 'color', value: 'rgb(210, 55, 60)' });
    });
});

// TODO: testen migreren naar playgrounds-e2e
describe('component vl-checkbox-next - default in form', () => {
    it('should mount', () => {
        mountCheckboxInForm({});

        cy.get('vl-checkbox-next');
    });

    it('should be accessible', () => {
        mountCheckboxInForm({});

        cy.injectAxe();

        cy.checkA11y('vl-checkbox-next');
    });

    it('should be accessible on mobile', () => {
        mountCheckboxInForm({});

        cy.injectAxe();
        cy.viewport(320, 480);

        cy.checkA11y('vl-checkbox-next');
    });

    it('should validate', () => {
        mountCheckboxInForm({});

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
        cy.get('vl-checkbox-next').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });

    it('should validate with initial value', () => {
        mountCheckboxInForm({ checked: true });

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('vl-checkbox-next').click();
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
        cy.get('vl-checkbox-next').click();
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });

    it('should be disabled', () => {
        mountCheckboxInForm({});
        shouldDisabledDefault();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });

    it('should reset', () => {
        mountCheckboxInForm({});

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
        cy.get('button[type="reset"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });
});

describe('component vl-checkbox-next - switch', () => {
    const value = 'Optie 1';
    beforeEach(() => {
        mountCheckbox({
            name: 'options',
            value: value,
            isSwitch: true,
        });
    });

    it('should mount', () => {
        cy.get('vl-checkbox-next');
    });

    it('should be checked', () => {
        shouldCheckWithClick('.vl-checkbox__label');

        cy.get('vl-checkbox-next').invoke('attr', 'checked', '');
        cy.get('vl-checkbox-next')
            .shadow()
            .find('.vl-checkbox--switch__label')
            .shouldHaveComputedStyle({ style: 'background-color', value: 'rgb(0, 85, 204)' });

        cy.get('vl-checkbox-next').should('have.attr', 'checked');
        cy.get('vl-checkbox-next').should('have.attr', 'value', value);
    });

    it('should be disabled', () => {
        shouldDisabledSwitch();
    });

    it('should be error', () => {
        cy.get('vl-checkbox-next').invoke('attr', 'error', '');
        cy.get('vl-checkbox-next').should('have.attr', 'error');

        shouldHaveErrorStyleSwitch();

        cy.get('vl-checkbox-next').invoke('attr', 'checked', '');

        shouldHaveErrorStyleSwitch();
    });
});

// TODO: testen migreren naar playgrounds-e2e
describe('component vl-checkbox-next - switch in form', () => {
    it('should mount', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });

        cy.get('vl-checkbox-next');
    });

    it('should be accessible', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });

        cy.injectAxe();

        cy.checkA11y('vl-checkbox-next');
    });

    it('should be accessible on mobile', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });

        cy.injectAxe();
        cy.viewport(320, 480);

        cy.checkA11y('vl-checkbox-next');
    });

    it('should validate', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
        cy.get('vl-checkbox-next').click();
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });

    it('should validate with initial value', () => {
        mountCheckboxInForm({ checked: true, isSwitch: true, value: 'bevestig' });

        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('vl-checkbox-next').click();
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
    });

    it('should be disabled', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });
        shouldDisabledSwitch();

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });

    it('should reset', () => {
        mountCheckboxInForm({ isSwitch: true, value: 'bevestig' });

        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');

        cy.get('button[type="submit"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('be.visible');
        shouldHaveErrorStyleSwitch();

        cy.get('button[type="reset"]').click();
        cy.get('vl-error-message-next[input="confirmation"]').should('not.be.visible');
    });
});
