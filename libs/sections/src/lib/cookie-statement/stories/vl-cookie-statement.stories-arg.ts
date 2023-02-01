import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const cookieStatementArgs = {
    date: '',
    disableBackLink: false,
    version: '',
    onClickBack: action('vl-click-back'),
};

export const cookieStatementArgTypes: ArgTypes<typeof cookieStatementArgs> = {
    date: {
        name: 'data-vl-date',
        description: 'De datum waarop de pagina werd uitgegeven.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"3 maart 2021"' },
        },
    },
    disableBackLink: {
        name: 'data-vl-disable-back-link',
        description: 'Zet de terug-link uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    version: {
        name: 'data-vl-version',
        description: 'De pagina versie.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"1.0.0"' },
        },
    },
    onClickBack: {
        name: 'vl-click-back',
        description: 'Afgevuurd na het klikken op de terug-link.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
