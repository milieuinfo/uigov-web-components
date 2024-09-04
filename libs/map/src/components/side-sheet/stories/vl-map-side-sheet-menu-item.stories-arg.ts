import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const mapSideSheetMenuItemArgs = {
    ...defaultArgs,
    href: '#',
    title: 'Terug',
    defaultSlot: '',
};

export const mapSideSheetMenuItemArgTypes: ArgTypes<typeof mapSideSheetMenuItemArgs> = {
    ...defaultArgTypes(),
    href: {
        name: 'data-vl-href',
        description: 'De link van het menu item.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetMenuItemArgs.href },
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'De titel van het menu item.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapSideSheetMenuItemArgs.title },
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'De inhoud van het menu item.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
};
