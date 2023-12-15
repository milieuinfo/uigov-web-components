import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { qlikDashboardArgs } from '../../dashboard/stories/vl-qlik-dashboard.stories-arg';

export const qlikDashboardPageArgs = {
    ...defaultArgs,
    title: '',
    url: '',
    appId: '',
    exportId: '',
    selectedView: '',
    filters: null,
    views: null,
};

export const qlikDashboardPageArgTypes: ArgTypes<typeof qlikDashboardPageArgs> = {
    ...defaultArgTypes(true),
    title: {
        name: 'title',
        description: 'Titel van de dashboard pagina',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.title },
        },
    },
    url: {
        name: 'url',
        description: 'URL om te connecteren met Qlik',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.url },
        },
    },
    appId: {
        name: 'app-id',
        description: 'De id van de publieke app die aangesproken kan worden op Qlik',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.appId },
        },
    },
    exportId: {
        name: 'export-id',
        description: 'De id van het object dat de export data bevat',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.exportId },
        },
    },
    selectedView: {
        name: 'selected-view',
        description: 'De initieel geselecteerde view die getoond moet worden.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.selectedView },
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
    views: {
        name: 'views',
        description:
            'Het object dat de eigenlijke visualisatie config bevat, al dan niet onderverdeeld in views. Deze visuals worden doorgegeven aan de `vl-qlik-dashboard` component intern.',
        table: {
            type: { summary: 'Views | DashboardVisualization[][]' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardPageArgs.views },
        },
    },
};
