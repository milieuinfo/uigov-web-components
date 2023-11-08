import { ArgTypes } from '@storybook/web-components';
import {CATEGORIES, TYPES} from '@domg-wc/common-storybook';
import {qlikDashboardArgs} from "../../dashboard/stories/vl-qlik-dashboard.stories-arg";

export const qlikDashboardPageArgs = {
    title: '',
    url: '',
    appId: '',
    exportId: '',
    selectedView: '',
    filters: null,
    views: null,
};

export const qlikDashboardPageArgTypes: ArgTypes<typeof qlikDashboardPageArgs> = {
    title: {
        name: 'title',
        description: '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.title },
        },
    },
    url: {
        name: 'url',
        description:
            '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.url },
        },
    },
    appId: {
        name: 'app-id',
        description:
            '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.appId },
        },
    },
    exportId: {
        name: 'export-id',
        description:
            '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.exportId },
        },
    },
    selectedView: {
        name: 'selected-view',
        description:
            '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikDashboardPageArgs.selectedView },
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
    views: {
        name: 'views',
        description:
            '',
        table: {
            type: { summary:  'Views | Array<Array<DashboardVisualization>>'},
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikDashboardPageArgs.views },
        },
    }
};
