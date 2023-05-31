import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const infoTileArgs = {
    autoOpen: false,
    toggleable: false,
    contentSlot: '',
    subtitleSlot: '',
    titleSlot: '',
};

export const infoTileArgTypes: ArgTypes<typeof infoTileArgs> = {
    autoOpen: {
        name: 'data-vl-auto-open',
        description:
            'Opent de info-tile automatisch bij de eerste render.<br>Alleen bruikbaar indien data-vl-toggleable aanstaat.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: infoTileArgs.autoOpen },
        },
    },
    toggleable: {
        name: 'data-vl-toggleable',
        description: 'Maakt de info-tile openklapbaar.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: infoTileArgs.toggleable },
        },
    },
    contentSlot: {
        name: 'content',
        description: 'De content van de info-tile.',
        table: {
            category: CATEGORIES.SLOTS,
            type: { summary: TYPES.HTML },
            defaultValue: { summary: infoTileArgs.contentSlot },
        },
    },
    subtitleSlot: {
        name: 'subtitle',
        description: 'De subtitel van de info-tile.',
        table: {
            category: CATEGORIES.SLOTS,
            type: { summary: TYPES.HTML },
            defaultValue: { summary: infoTileArgs.subtitleSlot },
        },
    },
    titleSlot: {
        name: 'title',
        description: 'De titel van de info-tile.',
        table: {
            category: CATEGORIES.SLOTS,
            type: { summary: TYPES.HTML },
            defaultValue: { summary: infoTileArgs.titleSlot },
        },
    },
};
