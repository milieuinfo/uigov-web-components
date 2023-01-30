import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const wmsLayerArgTypes = {
    url: {
        name: 'data-vl-url',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de WMS url. Verplicht.',
        control: { disable: true },
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    layers: {
        name: 'data-vl-layers',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de layers van de WMS. Verplicht.',
        control: { disable: true },
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    styles: {
        name: 'data-vl-styles',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de WMS stijlen.',
        control: { disable: true },
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    version: {
        name: 'data-vl-version',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de WMS versie.',
        table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '1.3.0' } },
        control: { disable: true },
    },
    opacity: {
        name: 'data-vl-opacity',
        type: { summary: TYPES.NUMBER },
        description: 'Attribuut bepaalt de WMS transparantie.',
        table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 1 } },
        control: { disable: true },
    },
};
