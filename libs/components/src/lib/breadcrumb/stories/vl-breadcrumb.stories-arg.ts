import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const breadcrumbItemArgs = {
    href1: '#',
    href2: '#',
    href3: '#',
    href4: '#',
}

export const breadcrumbItemArgTypes = {
    href1: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #1 naar toe zal navigeren.',
        type: { summary: TYPES.STRING },
        table: {
            defaultValue: { summary: '#' },
            category: CATEGORIES.CHILD_ATTRIBUTES,
        },
    },
    href2: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #2 naar toe zal navigeren.',
        type: { summary: TYPES.STRING },
        table: {
            defaultValue: { summary: '#' },
            category: CATEGORIES.CHILD_ATTRIBUTES,
        },
    },
    href3: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #3 naar toe zal navigeren.',
        type: { summary: TYPES.STRING },
        table: {
            defaultValue: { summary: '#' },
            category: CATEGORIES.CHILD_ATTRIBUTES,
        },
    },
    href4: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #4 naar toe zal navigeren.',
        type: { summary: TYPES.STRING },
        table: {
            defaultValue: { summary: '#' },
            category: CATEGORIES.CHILD_ATTRIBUTES,
        },
    },
}
