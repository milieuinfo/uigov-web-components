import { CATEGORIES, TYPES, defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { CheckboxDefaults } from '../vl-checkbox.component';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';
import { action } from '@storybook/addon-actions';

export const checkboxArgs: typeof defaultArgs &
    typeof CheckboxDefaults & { contentSlot: string; onVlChecked: () => void } = {
    ...defaultArgs,
    ...CheckboxDefaults,
    contentSlot: '',
    onVlChecked: action('vl-checked'),
};

export const checkboxArgTypes: ArgTypes<typeof checkboxArgs> = {
    ...defaultArgTypes(true),
    ...formControlArgTypes,
    block: {
        name: 'block',
        description: 'Duidt aan dat de component de volledige breedte van zijn parent mag innemen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.block },
        },
    },
    value: {
        name: 'value',
        description: 'De value van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.value },
        },
    },
    checked: {
        name: 'checked',
        description: 'Vinkt de checkbox aan of uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.checked },
        },
    },
    isSwitch: {
        name: 'switch',
        description: 'Beeldt de checkbox af als een switch.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.isSwitch },
        },
    },
    contentSlot: {
        name: 'content',
        description: 'De content van de checkbox.',
        table: {
            category: CATEGORIES.SLOTS,
            type: { summary: TYPES.HTML },
            defaultValue: { summary: checkboxArgs.contentSlot },
        },
    },
    onVlChecked: {
        name: 'vl-checked',
        description:
            'Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.',
        table: {
            type: { summary: '{ checked: boolean, value?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
