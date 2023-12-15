import { ArgTypes } from '@storybook/web-components';
import {
    CATEGORIES,
    defaultArgs,
    defaultArgTypes,
    logStorybookEvent
} from '@domg-wc/common-storybook';

export const qlikDashboardArgs = {
    ...defaultArgs,
    visuals: null,
    filters: null,
    connection: null,
    connected: logStorybookEvent('connected'),
    initialized: logStorybookEvent('initialized'),
};

export const qlikDashboardArgTypes: ArgTypes<typeof qlikDashboardArgs> = {
    ...defaultArgTypes(true),
    visuals: {
        name: 'visuals',
        description: 'Het object dat de eigenlijke visualisatie config bevat',
        table: {
            type: { summary: 'DashboardVisualization[][]' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardArgs.visuals },
        },
    },
    filters: {
        name: 'filters',
        description: 'De filters die toegepast moeten worden op het Qlik object',
        table: {
            type: { summary: 'Filter[]' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardArgs.filters },
        },
    },
    connection: {
        name: 'connection',
        description: 'Het connectie object dat wordt aangemaakt door gebruik te maken van `@domg/qlik-lib`',
        table: {
            type: { summary: 'Qlik' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardArgs.connection },
        },
    },
    connected: {
        name: 'connected',
        description: 'Afgevuurd wanneer de achterliggende connectie met Qlik is opgezet.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
    initialized: {
        name: 'initialized',
        description: 'Afgevuurd wanneer de connectie is opgezet en de filters geladen zijn.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
