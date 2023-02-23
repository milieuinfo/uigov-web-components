import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const mapSideSheetArgs = {
    right: false,
    enableSwipe: false,
    title: '',
    href: '#',
    defaultSlot: '<div>Plaats hier je zijpaneel inhoud</div>',
};

export const mapSideSheetArgTypes: ArgTypes<typeof mapSideSheetArgs> = {
    right: {
        name: 'data-vl-right',
        description: 'Het zijpaneel wordt aan de rechterrand gepositioneerd.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    enableSwipe: {
        name: 'data-vl-enable-swipe',
        description: 'Het zijpaneel kan gesloten worden door te swipen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'De titel van het menu item.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: 'Terug' },
        },
    },
    href: {
        name: 'data-vl-href',
        description: 'De link van het menu item.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.CHILD_ATTRIBUTES,
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'Element dat afgebeeld wordt in het zijpaneel.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
};
