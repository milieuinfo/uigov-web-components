import { registerWebComponents } from '@domg-wc/common-utilities';
import { html } from 'lit';
import { VlSelect } from './vl-select.element';
import { SELECT_POSITION, SelectPosition } from './vl-select.model';

registerWebComponents([VlSelect]);

interface SelectArgs {
    block?: boolean;
    disabled?: boolean;
    error?: boolean;
    noMoreOptions?: string;
    position?: SelectPosition;
    searchNoResultsText?: string;
    searchPlaceholder?: string;
    select?: boolean;
    selectDeletable?: boolean;
    selectDisableSearch?: boolean;
    // selectSearch?: boolean; // DEPRECATED
    selectSearchEmptyText?: string | undefined;
    selectSearchNoResultLimit?: boolean;
    selectSearchResultLimit?: number;
    success?: boolean;
}

const defaultSelectArgs: SelectArgs = {
    block: false,
    disabled: false,
    error: false,
    noMoreOptions: 'Geen resterende opties gevonden',
    position: SELECT_POSITION.AUTO,
    searchNoResultsText: 'Geen resultaten gevonden',
    searchPlaceholder: 'Zoek item',
    select: false,
    selectDeletable: false,
    selectDisableSearch: false,
    // selectSearch: false, // DEPRECATED
    selectSearchEmptyText: '',
    selectSearchNoResultLimit: false,
    selectSearchResultLimit: 4,
    success: false,
};

const mountDefault = ({
    block,
    error,
    success,
    disabled,
    noMoreOptions,
    position,
    select,
    selectDisableSearch,
    selectSearchEmptyText,
    selectSearchResultLimit,
    selectSearchNoResultLimit,
    selectDeletable,
    searchPlaceholder,
    searchNoResultsText,
}: SelectArgs) => {
    return cy.mount(html`
        <select
            is="vl-select"
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-disabled=${disabled}
            data-vl-no-more-options=${noMoreOptions}
            data-vl-position=${position}
            ?data-vl-select=${select}
            ?data-vl-select-disable-search=${selectDisableSearch}
            ?data-vl-select-deletable=${selectDeletable}
            ?data-vl-select-search-no-result-limit=${selectSearchNoResultLimit}
            data-vl-select-search-result-limit=${selectSearchResultLimit}
            data-vl-select-search-empty-text=${selectSearchEmptyText}
            data-vl-search-no-results-text=${searchNoResultsText}
            data-vl-search-placeholder=${searchPlaceholder}
        >
            <option value="option1">België</option>
            <option value="option2">Nederland</option>
        </select>
    `);
};

describe('component vl-select - default', () => {
    it('should mount', () => {
        mountDefault({});

        cy.get('[data-cy-root]').within(() => {
            cy.get('select[is="vl-select"]').should('exist');
            cy.get('select[is="vl-multiselect"]').should('not.exist');
            cy.get('select').should('have.attr', 'is');
            cy.get('select').find('option').should('have.length', 2);
            cy.get('select').find('option').should('not.have.length', 3);
        });
    });
});

describe('component vl-select - attributes - pertaining state', () => {
    beforeEach(() => {
        mountDefault({ ...defaultSelectArgs, disabled: false, error: true, success: true });
    });

    it('should set <data-vl-error> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-error');
    });

    it('should set <data-vl-success> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-success');
    });

    it('should disable the select when <data-vl-disabled> is set', () => {
        mountDefault({ ...defaultSelectArgs, disabled: true });
        cy.get('select').should('be.disabled');
    });
});

describe('component vl-select - attributes - pertaining its placement (CSS)', () => {
    beforeEach(() => {
        mountDefault({
            ...defaultSelectArgs,
            select: true,
            block: true,
            position: SELECT_POSITION.BOTTOM,
        });
    });

    it('should set <data-vl-block> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-block');
    });

    it('should set <data-vl-position> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-position', 'bottom');
    });

    it('should position options for extended functionality above select element', () => {
        cy.get('select').parent().parent().click();
        cy.get('select').parent().parent().should('not.have.class', 'is-flipped');
    });
});

describe('component vl-select - attributes - pertaining its options', () => {
    beforeEach(() => {
        mountDefault({ ...defaultSelectArgs, noMoreOptions: 'TEST' });
    });

    it('should set <data-vl-no-more-options> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-no-more-options', 'TEST');
    });
});

describe('component vl-select - attributes - pertaining search', () => {
    beforeEach(() => {
        mountDefault({
            ...defaultSelectArgs,
            select: true,
            selectDisableSearch: true,
            selectDeletable: true,
            searchPlaceholder: 'TEST',
        });
    });

    it('should set <data-vl-select> when passed', () => {
        cy.get('select')
            .parent()
            .parent()
            .should('have.class', 'js-vl-select')
            .should('have.attr', 'aria-expanded', 'false')
            .click()
            .should('have.class', 'is-open')
            .should('have.attr', 'aria-expanded', 'true')
            .find('.vl-select__item')
            .contains('België');

        cy.get('select').parent().parent().find('.vl-select__item').should('not.contain', 'Duitsland');
    });

    it('should set <data-vl-select-deletable> when passed', () => {
        cy.get('select')
            .parent()
            .parent()
            .should('have.class', 'js-vl-select')
            .find('[data-vl-select-deletable]')
            .should('exist');
    });

    it('should set <data-vl-select-disable-search> when passed', () => {
        cy.get('select').parent().parent().find('input.vl-input-field').should('not.exist');
    });

    it('should set <data-vl-select-search-no-result-limit> when passed', () => {
        cy.get('select').should('have.attr', 'data-vl-select-search-result-limit', '4');
        cy.get('select').should('not.have.attr', 'data-vl-select-search-result-limit', '5');
    });
});
