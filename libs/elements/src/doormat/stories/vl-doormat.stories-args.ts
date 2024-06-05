import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const doormatArgs = {
    alt: false,
    graphic: '',
};

export const doormatArgTypes: ArgTypes = {
    alt: {
        name: 'data-vl-alt',
        description: 'Changes the gray background of the doormat to white.',
        defaultValue: { summary: 'false' },
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: doormatArgs.alt },
        },
    },
    graphic: {
        name: 'data-vl-graphic',
        description: 'Default doormat with a large image above.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: doormatArgs.graphic },
        },
    },
};
