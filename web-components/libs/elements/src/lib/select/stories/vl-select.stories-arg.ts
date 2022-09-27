export const selectArgs = {
    block: false,
    error: false,
    success: false,
    disabled: false,
    select: false,
    selectSearch: false,
    selectSearchEmptyText: '',
    selectSearchResultLimit: 0,
    selectSearchNoResultLimit: 0,
    selectDeletable: false,
    searchPlaceholder: '',
    searchNoResultsText: '',
    noMoreOptions: '',
};

export const selectArgTypes = {
    block: {
        name: 'data-vl-block',
        type: { summary: 'Boolean' },
        description:
            'Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    error: {
        name: 'data-vl-error',
        type: { summary: 'Boolean' },
        description:
            'Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    success: {
        name: 'data-vl-success',
        type: { summary: 'Boolean' },
        description: 'Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        type: { summary: 'Boolean' },
        description:
            'Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    select: {
        name: 'data-vl-select',
        type: { summary: 'Boolean' },
        description: 'Attribuut zorgt ervoor dat de zoek functionaliteit geïnitialiseerd wordt.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    selectSearch: {
        name: 'data-vl-select-search',
        type: { summary: 'Boolean' },
        description: 'Attribuut om de zoek functionaliteit te activeren of deactiveren.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    selectSearchEmptyText: {
        name: 'data-vl-select-search-empty-text',
        type: { summary: 'String' },
        description: 'Attribuut bepaalt de tekst die getoond wordt wanneer er geen resultaten gevonden zijn.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    selectSearchResultLimit: {
        name: 'data-vl-select-search-result-limit',
        type: { summary: 'Number' },
        description: 'Attribuut om het aantal resultaten te limiteren.',
        table: {
            defaultValue: { summary: 0 },
            category: 'Attributes',
        },
    },
    selectSearchNoResultLimit: {
        name: 'data-vl-select-search-no-result-limit',
        type: { summary: 'Number' },
        description: 'Attribuut om het aantal resultaten te limiteren.',
        table: {
            defaultValue: { summary: 0 },
            category: 'Attributes',
        },
    },
    selectDeletable: {
        name: 'data-vl-select-deletable',
        type: { summary: 'Boolean' },
        description: 'Attribuut om te activeren of deactiveren dat het geselecteerde kan verwijderd worden.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    searchPlaceholder: {
        name: 'data-vl-search-placeholder',
        type: { summary: 'String' },
        description: 'Attribuut bepaalt de placeholder van het zoek adres input element.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    searchNoResultsText: {
        name: 'data-vl-search-no-results-text',
        type: { summary: 'String' },
        description: 'Attribuut bepaalt de tekst wanneer er geen zoekresultaten meer zijn.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    noMoreOptions: {
        name: 'data-vl-no-more-options',
        type: { summary: 'String' },
        description: 'Attribuut bepaalt de tekst wanneer er geen keuzes meer mogelijk zijn.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
};
