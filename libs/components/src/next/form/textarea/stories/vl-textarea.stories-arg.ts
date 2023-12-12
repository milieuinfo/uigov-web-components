import { CATEGORIES, TYPES, defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { action } from '@storybook/addon-actions';
import { TextareaDefaults } from '../vl-textarea.component';

export const textareaArgs: typeof defaultArgs & typeof TextareaDefaults & { onVlInput: () => void } = {
    ...defaultArgs,
    ...TextareaDefaults,
    onVlInput: action('vl-input'),
};

export const textareaArgTypes: ArgTypes<typeof textareaArgs> = {
    ...defaultArgTypes(true),
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.block },
        },
    },
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld `readonly` is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: textareaArgs.readonly },
        },
    },
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
    onVlInput: {
        name: 'vl-input',
        description:
            'Event dat afgevuurd wordt als de waarde van het input veld verandert.<br>Het detail object van het event bevat de ingegeven waarde.',
        table: {
            type: { summary: '{ value: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
