import { CATEGORIES, TYPES, defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { InputFieldDefaults } from '../vl-input-field.component';
import { action } from '@storybook/addon-actions';

export const inputFieldArgs: typeof defaultArgs & typeof InputFieldDefaults & { onVlInput: () => void } = {
    ...defaultArgs,
    ...InputFieldDefaults,
    onVlInput: action('vl-input'),
};

export const inputFieldArgTypes: ArgTypes<typeof inputFieldArgs> = {
    ...defaultArgTypes(true),
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.block },
        },
    },
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel leesbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.readonly },
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
    value: {
        name: 'value',
        description: 'De waarde van het input veld.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputFieldArgs.value },
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
