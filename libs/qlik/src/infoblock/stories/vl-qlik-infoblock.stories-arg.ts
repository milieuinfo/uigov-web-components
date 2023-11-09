import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const qlikInfoblockArgs = {
    ...defaultArgs,
    title: '',
    icon: '',
    visuals: null,
    connection: null,
};

export const qlikInfoblockArgTypes: ArgTypes<typeof qlikInfoblockArgs> = {
    ...defaultArgTypes(),
    title: {
        name: 'title',
        description: 'Titel van het infoblock, zie ``vl-infoblock',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikInfoblockArgs.title },
        },
    },
    icon: {
        name: 'icon',
        description: 'Icoon van het infoblock, zie `vl-icon`',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: qlikInfoblockArgs.icon },
        },
    },
    visuals: {
        name: 'visuals',
        description: 'Het object dat de eigenlijke visualisatie config bevat',
        table: {
            type: { summary: 'InfoblockVisualization[][]' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikInfoblockArgs.visuals },
        },
    },
    connection: {
        name: 'connection',
        description: 'Het connectie object dat wordt aangemaakt door gebruik te maken van `@domg/qlik-lib`',
        table: {
            type: { summary: 'Qlik' },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: qlikInfoblockArgs.connection },
        },
    },
};
