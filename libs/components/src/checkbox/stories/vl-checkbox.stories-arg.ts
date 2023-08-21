import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const checkboxArgs = {
    block: false,
    checked: false,
    disabled: false,
    error: false,
    label: 'Optie 1',
    name: 'options',
    single: false,
    // Suffix met 'Attr' omdat 'switch' een reserved keyword is.
    switchAttr: true,
    value: 'Optie 1',
};

export const checkboxArgTypes: ArgTypes<typeof checkboxArgs> = {
    block: {
        name: 'data-vl-block',
        description: 'Beeldt de checkbox af als een block element.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    checked: {
        name: 'data-vl-checked',
        description: 'Vinkt de checkbox aan of uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Schakelt de checkbox uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Beeldt de checkbox af in een error state.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Het label van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'De naam van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    single: {
        name: 'data-vl-single',
        description: 'Beeldt de checkbox af zonder label.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    switchAttr: {
        name: 'data-vl-switch',
        description: 'Beeldt de checkbox af als een switch.<br>Dit attribuut is niet reactief.',
        control: false,
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'De value van de checkbox.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
