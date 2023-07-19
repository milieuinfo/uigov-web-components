import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const cookieStatementArgs = {
    date: '3 maart 2021',
    disableBackLink: false,
    version: '1.0.0',
    onClickBack: action('vl-click-back'),
    headerSlot: '',
};

export const cookieStatementArgTypes: ArgTypes<typeof cookieStatementArgs> = {
    date: {
        name: 'data-vl-date',
        description: 'De datum waarop de pagina werd uitgegeven.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cookieStatementArgs.date },
        },
    },
    disableBackLink: {
        name: 'data-vl-disable-back-link',
        description: 'Zet de terug-link uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cookieStatementArgs.disableBackLink },
        },
    },
    version: {
        name: 'data-vl-version',
        description: 'De pagina versie.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cookieStatementArgs.version },
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
    headerSlot: {
        name: 'header',
        description: 'Hiermee kan je de standaard functional header vervangen door een header naar keuze.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: cookieStatementArgs.headerSlot,
        },
    },
};
