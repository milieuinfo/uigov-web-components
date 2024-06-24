import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgs, formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { radioGroupDefaults } from '../vl-radio-group.defaults';

type RadioGroupArgs = typeof formControlArgs &
    typeof radioGroupDefaults & { onVlChecked: () => void; onVlValid: () => void };

export const radioGroupArgs: RadioGroupArgs = {
    ...formControlArgs,
    ...radioGroupDefaults,
    onVlChecked: action('vl-checked'),
    onVlValid: action('vl-valid'),
};

export const radioGroupArgTypes: ArgTypes<RadioGroupArgs> = {
    ...formControlArgTypes,
    readonly: {
        name: 'readonly',
        description: 'Duidt aan dat het veld enkel leesbaar is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioGroupArgs.readonly },
        },
    },
    value: {
        name: 'value',
        description: 'De value van de radio.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioGroupArgs.value },
        },
    },
    onVlChecked: {
        name: 'vl-checked',
        description:
            'Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.',
        table: {
            type: { summary: '{ checked: boolean, value?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
    onVlValid: {
        name: 'vl-valid',
        description:
            'Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.',
        table: {
            type: { summary: '{ checked: boolean, value?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
