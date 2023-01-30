import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const sideSheetArgs = { title: 'Terug naar resultaten', href: '/' };

export const sideSheetArgTypes = {
    title: {
        name: 'data-vl-title',
        type: { summary: TYPES.STRING },
        description: 'Attribuut wordt gebruikt als titel van een menu item.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'Terug' },
        },
    },
    href: {
        name: 'data-vl-href',
        type: { summary: TYPES.STRING },
        description: 'Attribuut wordt gebruikt om via het href attribuut de link te koppelen aan een menu item.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '#' },
        },
    },
};
