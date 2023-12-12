import { html } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlSelectComponent } from './vl-select.component';
import { SelectOption } from './index';

registerWebComponents([VlSelectComponent]);

describe('component vl-select-next - single select', () => {
    const options: SelectOption[] = [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' },
    ];

    it('should mount', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('select');
    });

    it('should set id', () => {
        cy.mount(html`<vl-select-next id="test-id" label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.id', 'test-id');
        cy.get('vl-select-next').shadow().find('select').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-select-next name="test-name" label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'name', 'test-name');
        cy.get('vl-select-next').shadow().find('select').should('have.attr', 'name', 'test-name');
    });

    it('should set label', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'label', 'geboorteplaats');
        cy.get('vl-select-next').shadow().find('select').should('have.attr', 'aria-label', 'geboorteplaats');
    });

    it('should set required', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" required .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'required');
        cy.get('vl-select-next').shadow().find('select').should('have.attr', 'required');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" disabled .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'disabled');
        cy.get('vl-select-next').should('be.disabled');
        cy.get('vl-select-next').shadow().find('select').should('have.class', 'vl-select--disabled');
        cy.get('vl-select-next').shadow().find('select').should('be.disabled');
    });

    it('should set error', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" error .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'error');
        cy.get('vl-select-next').shadow().find('select').should('have.class', 'vl-select--error');
        cy.get('vl-select-next').shadow().find('select').should('have.attr', 'error');
    });

    it('should set success', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" success .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'success');
        cy.get('vl-select-next').shadow().find('select').should('have.class', 'vl-select--success');
    });

    it('should set placeholder', () => {
        cy.mount(
            html`<vl-select-next
                label="geboorteplaats"
                placeholder="Selecteer je geboorteplaats"
                .options=${options}
            ></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'placeholder', 'Selecteer je geboorteplaats');
        cy.get('vl-select-next').shadow().find('.vl-select__placeholder').contains('Selecteer je geboorteplaats');
    });

    it('should set deletable', () => {
        cy.mount(
            html`<vl-select-next
                label="geboorteplaats"
                deletable
                .options=${[{ label: 'Hasselt', value: 'hasselt', selected: true }]}
            ></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'deletable');
        cy.get('vl-select-next').shadow().find('.vl-pill__close');
    });

    it('should set search', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" search .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'search');
        cy.get('vl-select-next').shadow().find('input.vl-input-field.vl-input-field-cloned');
    });

    it('should set position', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" position="top" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'position', 'top');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.js-vl-select.is-flipped');
    });

    it('should set result limit', () => {
        cy.mount(
            html`<vl-select-next label="geboorteplaats" result-limit="1" search .options=${options}></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'result-limit', 1);
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('input').type('a');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').should('have.length', 1);
        cy.checkA11y('vl-select-next');
    });

    it('should set no results text', () => {
        cy.mount(
            html`<vl-select-next
                label="geboorteplaats"
                no-results-text="Geen geboorteplaatsen gevonden"
                search
                .options=${options}
            ></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'no-results-text', 'Geen geboorteplaatsen gevonden');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('input').type('gibberish');
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item.has-no-results')
            .contains('Geen geboorteplaatsen gevonden');

        // Hack om de select dropdown te sluiten zodat de a11y check slaagt
        // TODO: Dit komt omdat Choices.js het aria-activedescendant attribuut niet weghaalt van het input veld als er geen opties zijn, kijk of er een betere oplossing is.
        cy.get('body').click(0, 0);
        cy.checkA11y('vl-select-next');
    });

    it('should set no choices text', () => {
        cy.mount(
            html`<vl-select-next
                label="geboorteplaats"
                no-choices-text="Geen resterende geboorteplaatsen gevonden"
                search
            ></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'no-choices-text', 'Geen resterende geboorteplaatsen gevonden');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item.has-no-choices')
            .contains('Geen resterende geboorteplaatsen gevonden');

        // Hack om de select dropdown te sluiten zodat de a11y check slaagt
        // TODO: Dit komt omdat Choices.js het aria-activedescendant attribuut niet weghaalt van het input veld als er geen opties zijn, kijk of er een betere oplossing is.
        cy.get('body').click(0, 0);
        cy.checkA11y('vl-select-next');
    });

    it('should set search placeholder', () => {
        cy.mount(
            html`<vl-select-next
                label="geboorteplaats"
                search-placeholder="Zoek geboorteplaats"
                search
                .options=${options}
            ></vl-select-next>`
        );
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'search-placeholder', 'Zoek geboorteplaats');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('input').should('have.attr', 'placeholder', 'Zoek geboorteplaats');
        cy.checkA11y('vl-select-next');
    });

    it('should search', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" search .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').should('have.attr', 'search');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('input').type('Hasselt');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Hasselt');
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item')
            .contains('Turnhout')
            .should('not.exist');
        cy.checkA11y('vl-select-next');
    });

    it('should disable option', () => {
        const options: SelectOption[] = [
            { label: 'Hasselt', value: 'hasselt', disabled: true },
            { label: 'Turnhout', value: 'turnhout' },
            { label: 'Knokke-Heist', value: 'knokke-heist' },
            { label: 'Waregem', value: 'waregem' },
            { label: 'Lier', value: 'lier' },
            { label: 'Rio Piedras', value: 'rio piedras' },
        ];

        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item.vl-select__item--disabled')
            .contains('Hasselt');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Hasselt').click();
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item')
            .contains('Turnhout')
            .click();
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Hasselt').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Turnhout');
        cy.checkA11y('vl-select-next');
    });

    it('should use groups', () => {
        const options: SelectOption[] = [
            {
                label: 'België',
                value: '',
                choices: [
                    { label: 'Hasselt', value: 'hasselt' },
                    { label: 'Turnhout', value: 'turnhout' },
                    { label: 'Knokke-Heist', value: 'knokke-heist' },
                    { label: 'Waregem', value: 'waregem' },
                    { label: 'Lier', value: 'lier' },
                ],
            },
            {
                label: 'Puerto Rico',
                value: '',
                choices: [{ label: 'Rio Piedras', value: 'rio piedras' }],
            },
        ];

        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__group').contains('België');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__group').contains('Puerto Rico');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Hasselt');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Turnhout');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Knokke-Heist');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Waregem');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Lier');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Rio Piedras');

        // Hack om de select dropdown te sluiten zodat de a11y check slaagt
        // TODO: Dit komt omdat Choices.js het role="treeitem" attribuut zet op opties bij het gebruik van groups ipv role="option", kijk of er een betere oplossing is.
        cy.get('body').click(0, 0);
        cy.checkA11y('vl-select-next');
    });

    it('should dispatch select event on select and on delete', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" deletable .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.createStubForEvent('vl-select-next', 'vl-select');
        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Hasselt').click();
        cy.get('@vl-select')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { value: 'hasselt' });
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-input-field')
            .find('.vl-select__item')
            .find('.vl-pill__close')
            .click();
        cy.get('@vl-select')
            .should('have.been.calledTwice')
            .its('secondCall.args.0.detail')
            .should('deep.equal', { value: '' });
        cy.checkA11y('vl-select-next');
    });

    it('should select value', () => {
        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Hasselt').click();
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Hasselt');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Turnhout').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Knokke-Heist').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Waregem').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Lier').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Rio Piedras').should('not.exist');
        cy.checkA11y('vl-select-next');
    });

    it('should select value programmatically', () => {
        const options: SelectOption[] = [
            { label: 'Hasselt', value: 'hasselt', selected: true },
            { label: 'Turnhout', value: 'turnhout' },
            { label: 'Knokke-Heist', value: 'knokke-heist' },
            { label: 'Waregem', value: 'waregem' },
            { label: 'Lier', value: 'lier' },
            { label: 'Rio Piedras', value: 'rio piedras' },
        ];

        cy.mount(html`<vl-select-next label="geboorteplaats" .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Hasselt');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Turnhout').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Knokke-Heist').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Waregem').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Lier').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Rio Piedras').should('not.exist');
        cy.checkA11y('vl-select-next');
    });
});

describe('component vl-select-next - multiple select', () => {
    const options: SelectOption[] = [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
    ];

    it('should mount', () => {
        cy.mount(html`<vl-select-next label="hobby's" multiple .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('select');
    });

    it('should search', () => {
        cy.mount(html`<vl-select-next label="hobby's" multiple .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('input').type('Padel');
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Padel');
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-select__list')
            .find('.vl-select__item')
            .contains('Dans')
            .should('not.exist');
        cy.checkA11y('vl-select-next');
    });

    it('should dispatch select event on select and on delete', () => {
        cy.mount(html`<vl-select-next label="hobby's" multiple deletable .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.createStubForEvent('vl-select-next', 'vl-select');
        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Padel').click();
        cy.get('@vl-select')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { value: 'padel' });
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Dans').click();
        cy.get('@vl-select')
            .should('have.been.calledTwice')
            .its('secondCall.args.0.detail')
            .should('deep.equal', { value: 'padel;dans' });
        cy.get('vl-select-next')
            .shadow()
            .find('.vl-input-field')
            .find('.vl-select__item[data-value="padel"]')
            .find('.vl-pill__close')
            .click();
        cy.get('@vl-select').its('callCount').should('eq', 3);
        cy.get('@vl-select').its('lastCall.args.0.detail').should('deep.equal', { value: 'dans' });
        cy.checkA11y('vl-select-next');
    });

    it('should select multiple values', () => {
        cy.mount(html`<vl-select-next label="hobby's" multiple .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('.vl-select__inner').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Padel').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Dans').click();
        cy.get('vl-select-next').shadow().find('.vl-select__list').find('.vl-select__item').contains('Drummen').click();
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Padel');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Dans');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Drummen');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Zwemmen').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Boardgames').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Fietsen').should('not.exist');
        cy.checkA11y('vl-select-next');
    });

    it('should select multiple values programmatically', () => {
        const options: SelectOption[] = [
            { label: 'Padel', value: 'padel', selected: true },
            { label: 'Dans', value: 'dans', selected: true },
            { label: 'Drummen', value: 'drummen', selected: true },
            { label: 'Zwemmen', value: 'zwemmen' },
            { label: 'Boardgames', value: 'boardgames' },
            { label: 'Fietsen', value: 'fietsen' },
        ];

        cy.mount(html`<vl-select-next label="hobby's" multiple .options=${options}></vl-select-next>`);
        cy.injectAxe();

        cy.checkA11y('vl-select-next');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Padel');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Dans');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Drummen');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Zwemmen').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Boardgames').should('not.exist');
        cy.get('vl-select-next').shadow().find('select').find('option').contains('Fietsen').should('not.exist');
        cy.checkA11y('vl-select-next');
    });
});
