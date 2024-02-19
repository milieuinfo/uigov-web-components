import {
    CATEGORIES,
    CONTROLS,
    defaultArgs,
    defaultArgTypes,
    logStorybookEvent,
    TYPES,
} from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const selectLocationArg = {
    ...defaultArgs,
    placeholder: 'Zoeken op kaart',
    searchEmptyText: 'Geen adres gevonden',
    searchNoResultsText: 'Geen adres gevonden',
    searchPlaceholder: 'Zoeken op adres of coördinaat',
    selectDeletable: false,
    selectSearchResultLimit: null,
    onChange: logStorybookEvent('change'),
    onSearch: logStorybookEvent('search'),
};

export const selectLocationArgTypes: ArgTypes<typeof selectLocationArg> = {
    ...defaultArgTypes(),
    placeholder: {
        name: 'data-vl-placeholder',
        description: 'De placeholder van het select element.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.placeholder },
        },
    },
    searchEmptyText: {
        name: 'data-vl-search-empty-text',
        description: 'De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.searchEmptyText },
        },
    },
    searchNoResultsText: {
        name: 'data-vl-search-no-results-text',
        description: 'De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.searchNoResultsText },
        },
    },
    searchPlaceholder: {
        name: 'data-vl-search-placeholder',
        description: 'De placeholder van het input element.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.searchPlaceholder },
        },
    },
    selectDeletable: {
        name: 'data-vl-select-deletable',
        description: 'Het geselecteerde adres kan verwijderd worden.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.selectDeletable },
        },
    },
    selectSearchResultLimit: {
        name: 'data-vl-select-search-result-limit',
        description: 'Limiteert het aantal zoekresultaten.<br>Dit attribuut is niet reactief.',
        control: { type: CONTROLS.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectLocationArg.selectSearchResultLimit },
        },
    },
    onChange: {
        name: 'change',
        description:
            'Afgevuurd als er een adres geselecteerd wordt.<br>Het detail object van het event bevat het geselecteerde adres.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onSearch: {
        name: 'search',
        description:
            'Afgevuurd als de gebruiker een karakter ingeeft in de zoekbalk.<br>Het detail object van het event bevat de input van de zoekbalk en het aantal resultaten.',
        table: {
            type: { summary: '{ value: string, resultCount: number }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
