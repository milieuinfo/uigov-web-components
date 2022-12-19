import { CATEGORIES } from '@domg-wc/common-utilities';

export const headerArgs = {
    identifier: '59188ff6-662b-45b9-b23a-964ad48c2bfb',
    development: true,
    loginUrl: '/sso/aanmelden',
    loginRedirectUrl: '/',
    logoutUrl: '/sso/afgemeld',
    switchCapacityUrl: '/sso/wissel_organisatie',
    authenticatedUserUrl: '/sso/ingelogde_gebruiker',
};

export const headerArgTypes = {
    identifier: {
        name: 'data-vl-identifier',
        type: { summary: 'string' },
        description: 'De identifier die gebruikt wordt om bij AIV de footer op te halen.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '' },
        },
    },
    development: {
        name: 'data-vl-development',
        type: { summary: 'boolean' },
        description: 'Attribuut geeft aan dat de AIV ontwikkel servers gebruikt moeten worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    loginUrl: {
        name: 'data-vl-login-url',
        type: { summary: 'string' },
        description: 'De url die gebruikt wordt bij het aanmelden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/aanmelden' },
        },
    },
    loginRedirectUrl: {
        name: 'data-vl-login-redirect-url',
        type: { summary: 'string' },
        description: 'De redirect url die gebruikt wordt bij het aanmelden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/' },
        },
    },
    logoutUrl: {
        name: 'data-vl-logout-url',
        type: { summary: 'string' },
        description: 'De url die wordt opgeroepen wanneer men zich wil afmelden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/afgemeld' },
        },
    },
    switchCapacityUrl: {
        name: 'data-vl-switch-capacity-url',
        type: { summary: 'string' },
        description: 'De url die wordt opgeroepen wanneer men van organisatie wil wisselen.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/wissel_organisatie' },
        },
    },
    authenticatedUserUrl: {
        name: 'data-vl-authenticated-user-url',
        type: { summary: 'string' },
        description: 'De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '/sso/ingelogde_gebruiker' },
        },
    },
};
