import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { CheckboxDefaults } from '../index';
import { formControlArgTypes } from '../../form-control/stories/form-control.stories-arg';

export const checkboxArgs: typeof CheckboxDefaults & { contentSlot: string } = {
    ...CheckboxDefaults,
    contentSlot: '',
};

export const checkboxArgTypes: ArgTypes<typeof checkboxArgs> = {
    ...formControlArgTypes,
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
    value: {
        name: 'value',
        description: 'De value van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.value },
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
};
