import { CATEGORIES, CONTROLS, TYPES, getSelectControlOptions } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { SelectPosition, selectDefaults } from '../vl-select.component';
import { action } from '@storybook/addon-actions';

type SelectArgs = typeof formControlArgs &
    typeof selectDefaults & { onVlSelect: () => void; onVlSelectSearch: () => void; onVlValid: () => void };

export const selectArgs: SelectArgs = {
    ...formControlArgs,
    ...selectDefaults,
    onVlSelect: action('vl-select'),
    onVlSelectSearch: action('vl-select-search'),
    onVlValid: action('vl-valid'),
};

export const selectArgTypes: ArgTypes<SelectArgs> = {
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
        description: 'Duidt aan dat de selectie verwijderbaar is.',
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
        control: { type: CONTROLS.SELECT },
        options: Object.values(SelectPosition),
        table: {
            type: { summary: getSelectControlOptions(Object.values(SelectPosition)) },
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
            type: { summary: 'SelectOption' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: selectArgs.options },
        },
    },
    onVlSelect: {
        name: 'vl-select',
        description:
            'Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.<br>Bij de multiselect worden de waarden van de geselecteerde opties gescheiden door een `;`.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlSelectSearch: {
        name: 'vl-select-search',
        description: 'Event dat afgevuurd wordt als er een waarde ingegeven wordt in het zoekveld.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlValid: {
        name: 'vl-valid',
        description:
            'Event dat afgevuurd wordt als de select valid is.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.<br>Bij de multiselect worden de waarden van de geselecteerde opties gescheiden door een `;`.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
