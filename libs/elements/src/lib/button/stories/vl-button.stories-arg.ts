import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

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

export const buttonArgTypes = {
    content: {
        name: 'content (for demo purposes)',
        type: { summary: TYPES.STRING },
    },
    disabled: {
        type: { summary: TYPES.BOOLEAN },
        description: 'Used to indicate to the user that the functionality is not active.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    secondary: {
        name: 'data-vl-secondary',
        type: { summary: TYPES.BOOLEAN },
        description: 'Used in conjunction with a regular button to provide alternate actions.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    tertiary: {
        name: 'data-vl-tertiary',
        type: { summary: TYPES.BOOLEAN },
        description: 'Used in conjunction with regular and secondary buttons to provide alternate actions.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    loading: {
        name: 'data-vl-loading',
        type: { summary: TYPES.BOOLEAN },
        description: 'Used to indicate to the user that their action is currently being processed.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    error: {
        name: 'data-vl-error',
        type: { summary: TYPES.BOOLEAN },
        description: 'Used to emphasize the importance or consequences of an action.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    block: {
        name: 'data-vl-block',
        type: { summary: TYPES.BOOLEAN },
        description:
            'Used to ensure that the button is shown as a block element and will therefore take the width of the parent.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    large: {
        name: 'data-vl-large',
        type: { summary: TYPES.BOOLEAN },
        description: "Used to grab the user's attention by increasing the font size.",
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    wide: {
        name: 'data-vl-wide',
        type: { summary: TYPES.BOOLEAN },
        description: 'Makes the button appear wider on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    narrow: {
        name: 'data-vl-narrow',
        type: { summary: TYPES.BOOLEAN },
        description: 'Causes the button to appear narrower on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
