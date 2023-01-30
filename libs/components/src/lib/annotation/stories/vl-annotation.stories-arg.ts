import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const annotationArgs = {
    content: 'Inhoud',
    small: false,
};

export const annotationArgTypes = {
    content: {
        name: 'content',
        type: { summary: TYPES.STRING, required: false },
        description: 'Inhoud van de annotation.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    small: {
        name: 'data-vl-small',
        type: { summary: TYPES.BOOLEAN, required: false },
        description: 'Zorgt ervoor zat de annotation klein getoond wordt.',
        table: {
            defaultValue: { summary: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
