import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const annotationArgs = {
    content: 'Inhoud',
    small: false,
};

export const annotationArgTypes: ArgTypes = {
    content: {
        name: 'content',
        description: 'Inhoud van de annotation.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'Zorgt ervoor zat de annotation klein getoond wordt.',
        table: {
            type: { summary: TYPES.BOOLEAN, required: false },
            defaultValue: { summary: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
