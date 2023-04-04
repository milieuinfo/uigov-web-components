import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const layerArgs = {
    hidden: false,
    opacity: 1,
    maxResolution: null as number,
    minResolution: null as number,
    name: '',
};

export const layerArgTypes: ArgTypes<typeof layerArgs> = {
    hidden: {
        name: 'data-vl-hidden',
        description: 'Bepaalt of de kaartlaag zichtbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    opacity: {
        name: 'data-vl-opacity',
        description: 'De opacity van de kaartlaag. Getal tussen 0 en 1.',
        control: { type: 'range', min: 0, max: 1, step: 0.01 },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 1 },
        },
    },
    maxResolution: {
        name: 'data-vl-max-resolution',
        description:
            'De maximum resolutie (exclusief) waaronder de kaartlaag zichtbaar is.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: Infinity },
        },
    },
    minResolution: {
        name: 'data-vl-min-resolution',
        description:
            'De minimum resolutie (inclusief) waarboven de kaartlaag zichtbaar is.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.NUMBER },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 0 },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'De naam van de kaartlaag.<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
