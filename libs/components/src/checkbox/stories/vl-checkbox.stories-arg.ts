import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const checkboxArgs = {
    ...defaultArgs,
    block: false,
    checked: false,
    disabled: false,
    error: false,
    label: '',
    name: 'checkbox',
    single: false,
    // Suffix met 'Attr' omdat 'switch' een reserved keyword is.
    switchAttr: true,
    value: '',
};

export const checkboxArgTypes: ArgTypes<typeof checkboxArgs> = {
    ...defaultArgTypes(),
    block: {
        name: 'data-vl-block',
        description: 'Beeldt de checkbox af als een block element.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.block },
        },
    },
    checked: {
        name: 'data-vl-checked',
        description: 'Vinkt de checkbox aan of uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.checked },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Schakelt de checkbox uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.disabled },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Beeldt de checkbox af in een error state.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.error },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Het label van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.label },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'De naam van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.name },
        },
    },
    single: {
        name: 'data-vl-single',
        description: 'Beeldt de checkbox af zonder label.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.single },
        },
    },
    switchAttr: {
        name: 'data-vl-switch',
        description: 'Beeldt de checkbox af als een switch.<br>Dit attribuut is niet reactief.',
        control: false,
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.switchAttr },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'De value van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: checkboxArgs.value },
        },
    },
};
