import { ArgTypes } from '@storybook/web-components';
import {CATEGORIES, TYPES} from '@domg-wc/common-storybook';

export const qlikInfoblockArgs = {
    title: '',
    icon: '',
    visuals: null,
    connection: null
};

export const qlikInfoblockArgTypes: ArgTypes<typeof qlikInfoblockArgs> = {
    title: {
        name: 'title',
        description: '',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikInfoblockArgs.title },
        },
    },
    icon: {
        name: 'icon',
        description:
            '',
        table: {
            type: { summary:  TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikInfoblockArgs.icon },
        },
    },
    visuals: {
        name: 'visuals',
        description:
            '',
        table: {
            type: { summary: 'Array<Array<InfoblockVisualization>>' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikInfoblockArgs.visuals },
        },
    },
    connection: {
        name: 'connection',
        description:
            '',
        table: {
            type: { summary: 'Qlik' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikInfoblockArgs.connection },
        },
    }
};
