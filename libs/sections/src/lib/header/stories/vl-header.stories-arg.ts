import { action } from '@storybook/addon-actions';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const headerArgs = {
    authenticatedUserUrl: '',
    development: true,
    identifier: '59188ff6-662b-45b9-b23a-964ad48c2bfb',
    loginRedirectUrl: '',
    loginUrl: '',
    logoutUrl: '',
    simple: false,
    switchCapacityUrl: '',
    onReady: action('ready'),
};

export const headerArgTypes: ArgTypes<typeof headerArgs> = {
    authenticatedUserUrl: {
        name: 'data-vl-authenticated-user-url',
        description: 'De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/ingelogde_gebruiker' },
        },
    },
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
    loginRedirectUrl: {
        name: 'data-vl-login-redirect-url',
        description: 'De redirect url die gebruikt wordt bij het aanmelden.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/' },
        },
    },
    loginUrl: {
        name: 'data-vl-login-url',
        description: 'De url die gebruikt wordt bij het aanmelden.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/aanmelden' },
        },
    },
    logoutUrl: {
        name: 'data-vl-logout-url',
        description: 'De url die wordt opgeroepen wanneer men zich wil afmelden.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/afgemeld' },
        },
    },
    simple: {
        name: 'data-vl-simple',
        description: 'Indien true wordt het configureren van de sessie overgeslagen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    switchCapacityUrl: {
        name: 'data-vl-switch-capacity-url',
        description: 'De url die wordt opgeroepen wanneer men van organisatie wil wisselen.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/wissel_organisatie' },
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
