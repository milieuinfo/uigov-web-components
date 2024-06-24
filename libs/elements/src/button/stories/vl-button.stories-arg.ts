import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const buttonArgs = {
    content: 'button',
    disabled: false,
    secondary: false,
    tertiary: false,
    loading: false,
    error: false,
    block: false,
    large: false,
    wide: false,
    narrow: false,
};

export const buttonArgTypes: ArgTypes<typeof buttonArgs> = {
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: TYPES.STRING },
        },
    },
    disabled: {
        description: 'Used to indicate to the user that the functionality is not active.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    secondary: {
        name: 'data-vl-secondary',
        description: 'Used in conjunction with a regular button to provide alternate actions.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    tertiary: {
        name: 'data-vl-tertiary',
        description: 'Used in conjunction with regular and secondary buttons to provide alternate actions.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    loading: {
        name: 'data-vl-loading',
        description: 'Used to indicate to the user that their action is currently being processed.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Used to emphasize the importance or consequences of an action.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    block: {
        name: 'data-vl-block',
        description:
            'Used to ensure that the button is shown as a block element and will therefore take the width of the parent.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    large: {
        name: 'data-vl-large',
        description: "Used to grab the user's attention by increasing the font size.",
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    wide: {
        name: 'data-vl-wide',
        description: 'Makes the button appear wider on the screen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    narrow: {
        name: 'data-vl-narrow',
        description: 'Causes the button to appear narrower on the screen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
