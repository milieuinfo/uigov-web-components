import { CAPTION_FORMAT, GROUP_BY } from '../vl-autocomplete.model';
import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';
import { DEFAULT_CAPTION_FORMAT, DEFAULT_MAX_MATCHES, DEFAULT_MIN_CHARS } from '../vl-autocomplete.component';

export const complexItems = [
    { title: 'Gent', subtitle: 'Gemeente', value: '1' },
    { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
    { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
    { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
    { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
    { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
];

export const autocompleteArgs = {
    placeholder: 'Hint: typ Gent',
    minChars: 1,
    maxSuggestions: 5,
    captionFormat: CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL,
    groupBy: '',
    items: complexItems,
};

export const autocompleteArgTypes = {
    placeholder: {
        name: 'placeholder',
        type: { summary: TYPES.STRING, required: false },
        description: 'Attribuut wordt gebruikt om de placeholder te bepalen.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    minChars: {
        name: 'data-vl-min-chars',
        type: { summary: TYPES.NUMBER, required: false },
        description:
            'Attribuut wordt gebruikt om te bepalen hoeveel karakters de gebruiker moet ingeven alvorens de suggesties getoond worden.',
        control: { type: 'range', min: 1, max: 10, step: 1 },
        table: {
            defaultValue: { summary: DEFAULT_MIN_CHARS },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    maxSuggestions: {
        name: 'data-vl-max-suggestions',
        type: { summary: TYPES.NUMBER, required: false },
        description: 'Attribuut wordt gebruikt om het maximum aantal suggesties dat moet getoond worden te bepalen.',
        control: { type: 'range', min: 1, max: 20, step: 1 },
        table: {
            defaultValue: { summary: DEFAULT_MAX_MATCHES },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    captionFormat: {
        name: 'data-vl-caption-format',
        type: {
            summary: `${CAPTION_FORMAT.TITLE} | ${CAPTION_FORMAT.SUBTITLE} | ${CAPTION_FORMAT.VALUE}
        | ${CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL} | ${CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL}
        | ${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}`,
            required: false,
        },
        description: 'Attribuut bepaalt wat er hoe moet getoond worden voor ieder item in de suggestielijst.',
        control: {
            type: 'select',
            options: [
                CAPTION_FORMAT.TITLE,
                CAPTION_FORMAT.SUBTITLE,
                CAPTION_FORMAT.VALUE,
                CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL,
                CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL,
                CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL,
            ],
        },
        table: {
            defaultValue: { summary: DEFAULT_CAPTION_FORMAT },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    groupBy: {
        name: 'data-vl-group-by',
        type: {
            summary: `${GROUP_BY.TITLE} | ${GROUP_BY.SUBTITLE}`,
            required: false,
        },
        description: 'Attribuut bepaalt hoe de items in de lijst gegroepeerd moeten worden.',
        control: {
            type: 'select',
            options: [GROUP_BY.TITLE, GROUP_BY.SUBTITLE],
        },
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    items: {
        description: 'Use this property when you want to use a static list of items.',
        type: { summary: 'array' },
        table: {
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: '[]' },
        },
    },
    search: {
        name: 'search',
        description:
            'This custom event is triggered when the user enters characters in de textbox while the component has no items specified. ' +
            'Use this event when you want to fill the suggestion list with items from an api call. Check out the WithInputAndApiCall story for more details.',
        table: { category: CATEGORIES.EVENTS },
    },
};
