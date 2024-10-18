import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const vlGroupArgs = {
    group: true,
    collapseL: false,
    collapseM: false,
    collapseS: false,
    collapseXS: false,
    column: false,
    justifyCenter: false,
    justifyEnd: false,
    separatorColumn: false,
    separatorRow: false,
    spaceBetween: false,
};

export const vlGroupArgTypes: ArgTypes<typeof vlGroupArgs> = {
    group: {
        name: 'vl-group-next',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'block style',
            defaultValue: { summary: 'false' },
        },
        description: 'Verplichte root style.',
    },
    collapseL: {
        name: 'vl-group--collapse-l',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items verticaal uit op een groot scherm (>1023px).',
    },
    collapseM: {
        name: 'vl-group--collapse-m',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items verticaal uit op een gemiddeld scherm (<1023px).',
    },
    collapseS: {
        name: 'vl-group--collapse-s',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items verticaal uit op een klein scherm (<767px).',
    },
    collapseXS: {
        name: 'vl-group--collapse-xs',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items verticaal uit op een extra klein scherm (<500px).',
    },
    column: {
        name: 'vl-group--column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een kolom.',
    },
    justifyCenter: {
        name: 'vl-group--justify-center',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items centraal uit.',
    },
    justifyEnd: {
        name: 'vl-group--justify-end',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit naar het einde.',
    },
    separatorColumn: {
        name: 'vl-group--separator-column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Voegt horizontale scheidingslijnen toe boven en onder items.',
    },
    separatorRow: {
        name: 'vl-group--separator-row',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description: 'Voegt verticale scheidingslijnen toe links en rechts tussen items.',
    },
    spaceBetween: {
        name: 'vl-group--space-between',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'modifier style',
            defaultValue: { summary: 'false' },
        },
        description:
            'Het eerste item staat in het begin, het laatste op het einde,' +
            'de overige items staan verdeelt met gelijke ruimte ertussen.',
    },
};
