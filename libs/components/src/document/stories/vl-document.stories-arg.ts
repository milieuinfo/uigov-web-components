import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const documentArgs = {
    ...defaultArgs,
    href: '#',
    type: '',
    title: '',
    metadata: '',
};

export const documentArgTypes: ArgTypes<typeof documentArgs> = {
    ...defaultArgTypes(),
    href: {
        name: 'data-vl-href',
        description: 'Attribuut wordt gebruikt om de download link te bepalen.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: documentArgs.href },
        },
    },
    type: {
        name: 'type',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: documentArgs.type },
        },
    },
    title: {
        name: 'title',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: documentArgs.title },
        },
    },
    metadata: {
        name: 'metadata',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: documentArgs.metadata },
        },
    },
};