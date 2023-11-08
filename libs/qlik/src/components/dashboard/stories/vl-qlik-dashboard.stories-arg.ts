import { ArgTypes } from '@storybook/web-components';
import {CATEGORIES, logStorybookEvent} from '@domg-wc/common-storybook';

export const qlikDashboardArgs = {
    visuals: null,
    filters: null,
    connection: null,
    connected: logStorybookEvent('connected'),
    initialized: logStorybookEvent('initialized')
};

export const qlikDashboardArgTypes: ArgTypes<typeof qlikDashboardArgs> = {
    visuals: {
        name: 'visuals',
        description: '',
        table: {
            type: { summary: 'Array<Visual>' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardArgs.visuals },
        },
    },
    filters: {
        name: 'filters',
        description:
            '',
        table: {
            type: { summary:  'Array<Filter>'},
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardArgs.filters },
        },
    },
    connection: {
        name: 'connection',
        description:
            '',
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
            type: {summary: '-'},
            category: CATEGORIES.EVENTS,
        },
    },
    initialized: {
        name: 'initialized',
        description: 'Afgevuurd wanneer de connectie is opgezet en de filters geladen zijn.',
        table: {
            type: {summary: '-'},
            category: CATEGORIES.EVENTS,
        },
    }
};
