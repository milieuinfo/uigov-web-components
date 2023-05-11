import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const breadcrumbItemArgs = {
    href1: '',
    href2: '',
    href3: '',
    href4: '',
};

export const breadcrumbItemArgTypes: ArgTypes<typeof breadcrumbItemArgs> = {
    href1: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #1.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: breadcrumbItemArgs.href1 },
        },
    },
    href2: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #2.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: breadcrumbItemArgs.href2 },
        },
    },
    href3: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #3.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: breadcrumbItemArgs.href3 },
        },
    },
    href4: {
        name: 'data-vl-href',
        description: 'Url voor bread-crumb-item #4.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: breadcrumbItemArgs.href3 },
        },
    },
};
