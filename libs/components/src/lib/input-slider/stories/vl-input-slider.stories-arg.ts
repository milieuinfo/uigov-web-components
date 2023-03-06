import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const inputSliderArgs = {
    initialValue: 0,
    maxValue: 100,
    minValue: 0,
    onChangeValue: action('vl-change-value'),
};

export const inputSliderArgTypes: ArgTypes<typeof inputSliderArgs> = {
    initialValue: {
        name: 'data-vl-initial-value',
        description: 'De initiële waarde van de input.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 0 },
        },
    },
    maxValue: {
        name: 'data-vl-max-value',
        description: 'De maximumwaarde die geselecteerd kan worden.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 100 },
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
    onChangeValue: {
        name: 'vl-change-value',
        description: 'Afgevuurd na het aanpasssen van de waarde.<br>Het event bevat de huidige waarde.',
        table: {
            type: { summary: '{ value: number }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
