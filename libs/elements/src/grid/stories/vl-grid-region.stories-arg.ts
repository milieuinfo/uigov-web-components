import '../vl-grid.element';
import { CATEGORIES } from '@domg-wc/common-storybook';

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

export const gridRegionArgTypes = {
    content: {
        name: 'content (for demo purposes)',
        type: { summary: 'string' },
    },
    alt: {
        name: 'data-vl-alt',
        type: { summary: 'boolean' },
        description: 'Maakt de achtergrond lichtgrijs.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpace: {
        name: 'data-vl-no-space',
        type: { summary: 'boolean' },
        description: 'Gebruik geen marges.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpaceBottom: {
        name: 'data-vl-no-space-bottom',
        type: { summary: 'boolean' },
        description: 'Gebruik geen marges onderaan.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    noSpaceTop: {
        name: 'data-vl-no-space-top',
        type: { summary: 'boolean' },
        description: 'Gebruik geen marges bovenaan.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    small: {
        name: 'data-vl-small',
        type: { summary: 'boolean' },
        description: 'Gebruik kleinere marges.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    medium: {
        name: 'data-vl-medium',
        type: { summary: 'boolean' },
        description: 'Gebruik middelgrote marges.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    bordered: {
        name: 'data-vl-bordered (deprecated?)',
        type: { summary: 'boolean' },
        description: 'Teken een rand.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    overlap: {
        name: 'data-vl-overlap',
        type: { summary: 'boolean' },
        description: 'Region overlap',
        control: {
            disable: true,
        },
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
