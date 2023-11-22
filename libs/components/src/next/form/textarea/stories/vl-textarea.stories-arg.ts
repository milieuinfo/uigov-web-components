import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';

export const textareaArgs = {
    ...formControlArgs,
    value: '',
    minLength: null,
    maxLength: null,
    rows: null,
    cols: null,
};

export const textareaArgTypes: ArgTypes<typeof textareaArgs> = {
    ...formControlArgTypes,
    value: {
        name: 'value',
        description: 'De waarde van het textarea veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.value },
        },
    },
    minLength: {
        name: 'min-length',
        description: 'Het minimum aantal karakters dat je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.minLength },
        },
    },
    maxLength: {
        name: 'max-length',
        description: 'Het maximum aantal karakters dat je kan ingeven.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.maxLength },
        },
    },
    rows: {
        name: 'rows',
        description: 'Het aantal rijen van het textarea veld.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.rows },
        },
    },
    cols: {
        name: 'cols',
        description: 'Het aantal kolommen van het textarea veld.',
        control: { type: 'number' },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.cols },
        },
    },
};
