import { CATEGORIES, CONTROLS, getSelectControlOptions, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const linkBaseArgs = {
    block: false,
    error: false,
    content: 'Terug naar overzicht',
    inline: false,
    small: false,
    large: false,
    bold: false,
};

export const linkDefaultArgs = {
    href: '#',
};

export const linkIconArgs = {
    type: 'before',
    icon: 'arrow-right-fat',
};

export const linkBaseArgTypes: ArgTypes<typeof linkBaseArgs> = {
    block: {
        name: 'data-vl-block',
        description: 'A link that is displayed as a block element, will take the width of the parent container.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Use the error link to emphasize the importance or the consequence of an action.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    inline: {
        name: 'data-vl-inline',
        description: 'A link that is displayed as an inline element, will follow the original flow of content.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'The smaller variant of a link.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    large: {
        name: 'data-vl-large',
        description: 'The larger variant of a link.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    bold: {
        name: 'data-vl-bold',
        description: 'The bold variant of a link.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.PROPERTIES,
        },
    },
};

export const linkDefaultArgTypes = {
    href: {
        name: 'href (for demo purposes)',
        table: {
            category: CATEGORIES.PROPERTIES,
        },
    },
};

export const linkIconArgTypes = {
    type: {
        name: 'type (for demo purposes)',
        control: { type: CONTROLS.SELECT },
        options: ['before', 'after'],
        table: {
            category: CATEGORIES.PROPERTIES,
            type: { summary: getSelectControlOptions(['before', 'after']) },
        },
    },
    icon: {
        name: 'icon (for demo purposes)',
        type: 'select',
        control: { type: CONTROLS.SELECT },
        options: ['arrow-right-fat', 'external'],
        table: {
            category: CATEGORIES.PROPERTIES,
            type: { summary: getSelectControlOptions(['arrow-right-fat', 'external']) },
        },
    },
};
