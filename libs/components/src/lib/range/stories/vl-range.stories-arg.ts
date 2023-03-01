import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const rangeArgs = {
    maxLabel: '',
    maxValue: 0,
    minLabel: '',
    minValue: 0,
};

export const rangeArgTypes: ArgTypes<typeof rangeArgs> = {
    maxValue: {
        name: 'data-vl-max-value',
        description: 'De maximumwaarde die geselecteerd kan worden.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 999 },
        },
    },
    maxLabel: {
        name: 'data-vl-max-label',
        description: 'Het label van de maximumwaarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'Tot' },
        },
    },
    minLabel: {
        name: 'data-vl-min-label',
        description: 'Het label van de minimumwaarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'Van' },
        },
    },
    minValue: {
        name: 'data-vl-min-value',
        description: 'De minimumwaarde die geselecteerd kan worden.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 0 },
        },
    },
};
