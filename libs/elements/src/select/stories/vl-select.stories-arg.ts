import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const selectArgs = {
    block: false,
    disabled: false,
    error: false,
    noMoreOptions: 'Geen resterende opties gevonden',
    searchNoResultsText: 'Geen resultaten gevonden',
    searchPlaceholder: 'Zoek item',
    select: false,
    selectDeletable: false,
    selectDisableSearch: false,
    selectSearch: false,
    selectSearchEmptyText: '',
    selectSearchNoResultLimit: false,
    selectSearchResultLimit: 4,
    success: false,
};

export const selectArgTypes: ArgTypes<typeof selectArgs> = {
    block: {
        name: 'data-vl-block',
        description:
            'Beeldt de textarea af als een block element en waardoor die de breedte van de parent zal aannemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.block },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Schakelt het select element uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.disabled },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Duidt aan dat het select element niet correct werd ingevuld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.error },
        },
    },
    noMoreOptions: {
        name: 'data-vl-no-more-options',
        description: 'De tekst die getoond wordt wanneer er geen keuzes meer zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.noMoreOptions },
        },
    },
    searchNoResultsText: {
        name: 'data-vl-search-no-results-text',
        description: 'De tekst die getoond wordt wanneer er geen resultaten zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.searchNoResultsText },
        },
    },
    searchPlaceholder: {
        name: 'data-vl-search-placeholder',
        description: 'De placeholder van het zoekveld.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.searchPlaceholder },
        },
    },
    select: {
        name: 'data-vl-select',
        description:
            'Activeert de uitgebreide select functionaliteit.<br>Maakt achterliggend gebruik van Choices.js.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.select },
        },
    },
    selectDeletable: {
        name: 'data-vl-select-deletable',
        description: 'Zorgt ervoor dat het geselecteerde verwijderd kan worden.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectDeletable },
        },
    },
    selectDisableSearch: {
        name: 'data-vl-select-disable-search',
        description: 'Deactiveert de zoek functionaliteit.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectDisableSearch },
        },
    },
    selectSearch: {
        name: 'data-vl-select-search',
        description: `[DEPRECATED]<br>Gebruik in de plaats het 'data-vl-select-disable-search' attribuut.<br>Activeert of deactiveert de zoek functionaliteit.<br>Dit attribuut is niet reactief.`,
        control: false,
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectSearch },
        },
    },
    selectSearchEmptyText: {
        name: 'data-vl-select-search-empty-text',
        description: `[DEPRECATED]<br>Gebruik in de plaats het 'data-vl-search-no-results-text' attribuut.<br>De tekst die getoond wordt wanneer er geen resultaten zijn.<br>Dit attribuut is niet reactief.`,
        control: false,
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectSearchEmptyText },
        },
    },
    selectSearchNoResultLimit: {
        name: 'data-vl-select-search-no-result-limit',
        description: 'Deactiveert het limiet voor het aantal resultaten.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectSearchNoResultLimit },
        },
    },
    selectSearchResultLimit: {
        name: 'data-vl-select-search-result-limit',
        description: 'Limiteert het aantal resultaten.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.selectSearchResultLimit },
        },
    },
    success: {
        name: 'data-vl-success',
        description: 'Duidt aan dat het select element correct werd ingevuld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.success },
        },
    },
};
