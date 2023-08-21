import { action } from '@storybook/addon-actions';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const footerArgs = {
    development: true,
    identifier: '0337f8dc-3266-4e7a-8f4a-95fd65189e5b',
    onReady: action('ready'),
};

export const footerArgTypes: ArgTypes<typeof footerArgs> = {
    development: {
        name: 'data-vl-development',
        description: 'Geeft aan dat de AIV ontwikkel servers gebruikt moeten worden.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    identifier: {
        name: 'data-vl-identifier',
        description: 'De identifier die gebruikt wordt om bij AIV de footer op te halen.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    onReady: {
        name: 'ready',
        description: 'Afgevuurd nadat de widget toegevoegd is aan de DOM.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
