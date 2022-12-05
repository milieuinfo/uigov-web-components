import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';

export const layerArgTypes = {
    name: {
        name: 'data-vl-name',
        type: { summary: TYPES.STRING },
        description: 'Attribuut bepaalt de kaartlaag naam.',
        control: { disable: true },
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    hidden: {
        name: 'data-vl-hidden',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribuut bepaalt of de kaartlaag zichtbaar is.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: { disable: true },
    },
    minResolution: {
        name: 'data-vl-min-resolution',
        type: { summary: TYPES.NUMBER },
        description: '',
        table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 0 } },
        control: { disable: true },
    },
    maxResolution: {
        name: 'data-vl-max-resolution',
        type: { summary: TYPES.NUMBER },
        description: '',
        table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: Infinity } },
        control: { disable: true },
    },
};
