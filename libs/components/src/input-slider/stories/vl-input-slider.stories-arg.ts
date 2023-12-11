import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const inputSliderArgs = {
    ...defaultArgs,
    maxValue: 100,
    minValue: 0,
    value: 0,
    onChangeValue: action('vl-change-value'),
};

export const inputSliderArgTypes: ArgTypes<typeof inputSliderArgs> = {
    ...defaultArgTypes(),
    maxValue: {
        name: 'data-vl-max-value',
        description: 'De maximumwaarde die geselecteerd kan worden.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputSliderArgs.maxValue },
        },
    },
    minValue: {
        name: 'data-vl-min-value',
        description: 'De minimumwaarde die geselecteerd kan worden.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputSliderArgs.minValue },
        },
    },
    value: {
        name: 'data-vl-value',
        description:
            'De waarde van de input. Wordt gecorrigeerd indien deze zich onder de minValue of boven de maxValue begeeft.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: inputSliderArgs.value },
        },
    },
    onChangeValue: {
        name: 'vl-change-value',
        description: 'Afgevuurd na het aanpasssen van de waarde.<br>Het event bevat de huidige waarde.',
        table: {
            type: { summary: '{ value: number }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
