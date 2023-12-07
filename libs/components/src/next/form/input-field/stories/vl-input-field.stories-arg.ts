import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';

export const inputFieldArgs = {
    ...formControlArgs,
    value: '',
    type: 'text',
    minLength: null,
    maxLength: null,
    min: null,
    max: null,
    pattern: '',
};

export const inputFieldArgTypes: ArgTypes<typeof inputFieldArgs> = {
    ...formControlArgTypes,
    value: {
        name: 'value',
        description: 'De waarde van het input veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.value },
        },
    },
    type: {
        name: 'type',
        description: 'Het type van het input veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.type },
        },
    },
    minLength: {
        name: 'min-length',
        description: 'Het minimum aantal karakters dat je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.minLength },
        },
    },
    maxLength: {
        name: 'max-length',
        description: 'Het maximum aantal karakters dat je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.maxLength },
        },
    },
    min: {
        name: 'min',
        description: 'De minimum waarde die je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.min },
        },
    },
    max: {
        name: 'max',
        description: 'De maximum waarde die je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.max },
        },
    },
    pattern: {
        name: 'pattern',
        description: 'Het patroon dat je moet volgen bij het ingeven van een waarde.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.pattern },
        },
    },
};
