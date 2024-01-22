import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { RadioGroupDefaults } from '../vl-radio-group.component';
import { inputFieldArgs } from '@domg-wc/form/next/input-field/stories/vl-input-field.stories-arg';
import { action } from '@storybook/addon-actions';

export const radioGroupArgs: typeof defaultArgs & typeof RadioGroupDefaults & { onVlChecked: () => void } = {
    ...defaultArgs,
    ...RadioGroupDefaults,
    onVlChecked: action('vl-checked'),
};

export const radioGroupArgTypes: ArgTypes<typeof radioGroupArgs> = {
    ...defaultArgTypes(true),
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioGroupArgs.block },
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
            'Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.',
        table: {
            type: { summary: '{ checked: boolean, value?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
