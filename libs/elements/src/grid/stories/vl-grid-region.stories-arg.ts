import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const gridRegionArgs = {
    content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?',
    alt: false,
    noSpace: false,
    noSpaceBottom: false,
    noSpaceTop: false,
    small: false,
    medium: false,
    bordered: false,
    overlap: true,
};

export const gridRegionArgTypes: ArgTypes<typeof gridRegionArgs> = {
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: TYPES.STRING },
        },
    },
    alt: {
        name: 'data-vl-alt',
        description: 'Maakt de achtergrond lichtgrijs.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpace: {
        name: 'data-vl-no-space',
        description: 'Gebruik geen marges.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpaceBottom: {
        name: 'data-vl-no-space-bottom',
        description: 'Gebruik geen marges onderaan.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpaceTop: {
        name: 'data-vl-no-space-top',
        description: 'Gebruik geen marges bovenaan.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    small: {
        name: 'data-vl-small',
        description: 'Gebruik kleinere marges.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    medium: {
        name: 'data-vl-medium',
        description: 'Gebruik middelgrote marges.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    bordered: {
        name: 'data-vl-bordered (deprecated?)',
        description: 'Teken een rand.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    overlap: {
        name: 'data-vl-overlap',
        description: 'Region overlap',
        control: {
            disable: true,
        },
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
