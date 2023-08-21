import { CAPTION_FORMAT, GROUP_BY } from '../vl-autocomplete.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { DEFAULT_CAPTION_FORMAT, DEFAULT_MAX_MATCHES, DEFAULT_MIN_CHARS } from '../vl-autocomplete.component';
import { ArgTypes } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

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
    initialValue: '',
    label: '',
    labelSmall: false,
    minChars: DEFAULT_MIN_CHARS,
    maxSuggestions: DEFAULT_MAX_MATCHES,
    captionFormat: CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL,
    groupBy: '',
    showClear: false,
    disableLoading: false,
    clearTooltip: 'Wissen',
    noMatchesText: 'Geen resultaat',
    items: complexItems,
    search: action('search'),
};

export const autocompleteArgTypes: ArgTypes<typeof autocompleteArgs> = {
    placeholder: {
        name: 'placeholder',
        description: 'Attribuut wordt gebruikt om de placeholder te bepalen.',
        table: {
            defaultValue: { summary: autocompleteArgs.placeholder },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING, required: false },
        },
    },
    initialValue: {
        name: 'data-vl-initial-value',
        description: 'Attribuut wordt gebruikt om de initiële waarde te bepalen.',
        table: {
            defaultValue: { summary: autocompleteArgs.initialValue },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING, required: false },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Attribuut wordt gebruikt om de label te bepalen.',
        table: {
            defaultValue: { summary: autocompleteArgs.label },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING, required: false },
        },
    },
    labelSmall: {
        name: 'data-vl-label-small',
        description: 'Attribuut wordt gebruikt om de label kleiner te maken.',
        table: {
            defaultValue: { summary: autocompleteArgs.labelSmall },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN, required: false },
        },
    },
    minChars: {
        name: 'data-vl-min-chars',
        description:
            'Attribuut wordt gebruikt om te bepalen hoeveel karakters de gebruiker moet ingeven alvorens de suggesties getoond worden.',
        control: { type: 'range', min: 1, max: 10, step: 1 },
        table: {
            type: { summary: TYPES.NUMBER, required: false },
            defaultValue: { summary: autocompleteArgs.minChars },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    maxSuggestions: {
        name: 'data-vl-max-suggestions',
        description: 'Attribuut wordt gebruikt om het maximum aantal suggesties dat moet getoond worden te bepalen.',
        control: { type: 'range', min: 1, max: 20, step: 1 },
        table: {
            defaultValue: { summary: autocompleteArgs.maxSuggestions },
            type: { summary: TYPES.NUMBER, required: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    captionFormat: {
        name: 'data-vl-caption-format',
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
            type: {
                summary: `${CAPTION_FORMAT.TITLE} | ${CAPTION_FORMAT.SUBTITLE} | ${CAPTION_FORMAT.VALUE}
        | ${CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL} | ${CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL}
        | ${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}`,
                required: false,
            },
        },
    },
    groupBy: {
        name: 'data-vl-group-by',

        description: 'Attribuut bepaalt hoe de items in de lijst gegroepeerd moeten worden.',
        control: {
            type: 'select',
            options: [GROUP_BY.TITLE, GROUP_BY.SUBTITLE],
        },
        table: {
            defaultValue: { summary: autocompleteArgs.groupBy },
            category: CATEGORIES.ATTRIBUTES,
            type: {
                summary: `${GROUP_BY.TITLE} | ${GROUP_BY.SUBTITLE}`,
                required: false,
            },
        },
    },
    showClear: {
        name: 'data-vl-show-clear',
        description: 'Attribuut wordt gebruikt te bepalen of het clear icoon moet tevoorschijn komen.',
        table: {
            defaultValue: { summary: autocompleteArgs.showClear },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN, required: false },
        },
    },
    disableLoading: {
        name: 'data-vl-disable-loading',
        description: 'Bepaalt of loading animatie getoond wordt.',
        table: {
            defaultValue: { summary: autocompleteArgs.disableLoading },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN, required: false },
        },
    },
    clearTooltip: {
        name: 'data-vl-clear-tooltip',
        description: 'Attribuut wordt gebruikt de tekst te bepalen die getoond moet worden bij hover van clear icon.',
        table: {
            defaultValue: { summary: autocompleteArgs.clearTooltip },
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.STRING, required: false },
        },
    },
    noMatchesText: {
        name: 'data-vl-no-matches-text',
        description:
            'Attribuut wordt gebruikt de tekst te bepalen die getoond moet worden als er geen suggesties zijn.',
        table: {
            defaultValue: { summary: autocompleteArgs.noMatchesText },
            type: { summary: TYPES.STRING, required: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    items: {
        description: 'Use this property when you want to use a static list of items.',
        table: {
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: autocompleteArgs.items },
            type: { summary: TYPES.ARRAY },
        },
    },
    search: {
        name: 'search',
        description:
            'This custom event is triggered when the user enters characters in de textbox while the component has no items specified. ' +
            'Use this event when you want to fill the suggestion list with items from an api call. Check out the WithInputAndApiCall story for more details.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
