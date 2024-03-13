import { action } from '@storybook/addon-actions';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const headerArgs = {
    authenticatedUserUrl: '/sso/ingelogde_gebruiker',
    skeleton: false,
    development: false,
    identifier: '',
    loginRedirectUrl: '/',
    loginUrl: '/sso/aanmelden',
    logoutUrl: '/sso/afgemeld',
    simple: false,
    switchCapacityUrl: '/sso/wissel_organisatie',
    applicationLinks: [],
    onReady: action('ready'),
};

export const headerArgTypes: ArgTypes<typeof headerArgs> = {
    skeleton: {
        name: 'data-vl-skeleton',
        description: 'Geeft aan of de header een skeleton mag tonen voordat het rendert.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.skeleton },
        },
    },
    authenticatedUserUrl: {
        name: 'data-vl-authenticated-user-url',
        description: 'De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.authenticatedUserUrl },
        },
    },
    development: {
        name: 'data-vl-development',
        description: 'Geeft aan dat de AIV ontwikkel servers gebruikt moeten worden.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.development },
        },
    },
    identifier: {
        name: 'data-vl-identifier',
        description: 'De identifier die gebruikt wordt om bij AIV de footer op te halen.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.identifier },
        },
    },
    loginRedirectUrl: {
        name: 'data-vl-login-redirect-url',
        description:
            'De redirect url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van DV opnieuw aangeroepen.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.loginRedirectUrl },
        },
    },
    loginUrl: {
        name: 'data-vl-login-url',
        description:
            'De url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van DV opnieuw aangeroepen.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.loginUrl },
        },
    },
    logoutUrl: {
        name: 'data-vl-logout-url',
        description:
            'De url die wordt opgeroepen wanneer men zich wil afmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van DV opnieuw aangeroepen.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.logoutUrl },
        },
    },
    simple: {
        name: 'data-vl-simple',
        description: 'Indien true wordt het configureren van de sessie overgeslagen.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.simple },
        },
    },
    switchCapacityUrl: {
        name: 'data-vl-switch-capacity-url',
        description:
            'De url die wordt opgeroepen wanneer men van organisatie wil wisselen.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van DV opnieuw aangeroepen.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: headerArgs.switchCapacityUrl },
        },
    },
    applicationLinks: {
        name: 'applicationLinks',
        description: 'De links die getoond worden in de header.<br/>Zie de documentatie pagina voor meer informatie.',
        table: {
            type: { summary: 'ApplicationLink[]' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: '[]' },
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
