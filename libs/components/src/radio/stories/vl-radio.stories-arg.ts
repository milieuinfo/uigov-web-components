import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const radioArgs = {
    block: false,
    checked: false,
    disabled: false,
    error: false,
    label: '',
    name: '',
    single: false,
    value: '',
};

export const radioArgTypes = {
    block: {
        name: 'data-vl-block',
        description: 'Beeldt de checkbox af als een block element.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.block },
        },
    },
    checked: {
        name: 'data-vl-checked',
        description: 'Vinkt de radio standaard aan.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.checked },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Schakelt de radio uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.disabled },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Beeldt de radio af in een error state.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.error },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Het label van de radio.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.label },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'De naam van de radio.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.name },
        },
    },
    single: {
        name: 'data-vl-single',
        description: 'Beeldt de radio af zonder label.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.single },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'Bepaalt waarde van de radio.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: radioArgs.value },
        },
    },
};
