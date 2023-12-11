import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { SelectPosition, SelectDefaults } from '../index';
import { action } from '@storybook/addon-actions';

export const selectArgs: typeof SelectDefaults & { onSelect: () => void } = {
    ...SelectDefaults,
    onSelect: action('select'),
};

export const selectArgTypes: ArgTypes<typeof selectArgs> = {
    ...formControlArgTypes,
    placeholder: {
        name: 'placeholder',
        description: 'De placeholder tekst.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.placeholder },
        },
    },
    deletable: {
        name: 'deletable',
        description: 'Duidt aan dat de selectie verwijderbaar is.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.deletable },
        },
    },
    multiple: {
        name: 'multiple',
        description: 'Duidt aan dat je meerdere opties kan selecteren.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.multiple },
        },
    },
    search: {
        name: 'search',
        description:
            'Duidt aan dat je kan zoeken in de opties.<br>De zoekfunctie staat standaard aan als je de multiple select gebruikt.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.search },
        },
    },
    position: {
        name: 'position',
        description: 'De positie van de dropdown.<br>Dit attribuut is niet reactief.',
        control: { type: 'select', options: Object.values(SelectPosition) },
        table: {
            type: { summary: 'VlSelectPosition' },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.position },
        },
    },
    resultLimit: {
        name: 'result-limit',
        description: 'Het maximum aantal resultaten dat getoond wordt.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.resultLimit },
        },
    },
    noResultsText: {
        name: 'no-results-text',
        description: 'De tekst die getoond wordt als er geen resultaten zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.noResultsText },
        },
    },
    noChoicesText: {
        name: 'no-choices-text',
        description:
            'De tekst die getoond wordt als er geen resterende opties zijn.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.noChoicesText },
        },
    },
    searchPlaceholder: {
        name: 'search-placeholder',
        description: 'De placeholder tekst van het zoekveld.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: selectArgs.searchPlaceholder },
        },
    },
    options: {
        name: 'options',
        description: 'De opties die je kan selecteren.',
        table: {
            type: { summary: 'VlSelectOption' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: selectArgs.options },
        },
    },
    onSelect: {
        name: 'select',
        description:
            'Event dat afgevuurd wordt als je een optie selecteert of verwijderdt.<br>Bij de multiselect worden de opties gescheiden door een ;.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
