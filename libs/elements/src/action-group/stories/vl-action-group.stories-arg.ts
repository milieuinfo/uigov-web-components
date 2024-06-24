import { CATEGORIES, CONTROLS, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const actionGroupArgs = {
    align: '',
    spaceBetween: false,
    bordered: false,
    collapseL: false,
    collapseM: false,
    collapseS: false,
    collapseXs: false,
};

export const actionGroupArgTypes: ArgTypes<typeof actionGroupArgs> = {
    align: {
        name: 'data-vl-align',
        control: { type: CONTROLS.SELECT },
        options: ['left', 'center', 'right'],
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'left' },
        },
        description: 'Sets the alignment of the action group',
    },
    spaceBetween: {
        name: 'data-vl-space-between',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        description: 'Sets an equal space between its children.',
    },
    bordered: {
        name: 'data-vl-bordered',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        control: {
            disable: true,
        },
        description: 'Adds a line between each link in the action group.',
    },
    collapseL: {
        name: 'data-vl-collapse-l',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseM: {
        name: 'data-vl-collapse-m',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseS: {
        name: 'data-vl-collapse-s',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
    collapseXs: {
        name: 'data-vl-collapse-xs',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
        description:
            'Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other.',
    },
};
