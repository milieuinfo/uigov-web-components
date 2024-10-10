import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const vlGroupArgs = {
    column: false,
    justifyCenter: false,
    justifyEnd: false,
    separatorColumn: false,
    separatorRow: false,
    spaceBetween: false,
};

export const vlGroupArgTypes: ArgTypes<typeof vlGroupArgs> = {
    column: {
        name: 'vl-group--column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een kolom.',
    },
    justifyCenter: {
        name: 'vl-group--justify-center',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items centraal uit.',
    },
    justifyEnd: {
        name: 'vl-group--justify-end',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit naar het einde.',
    },
    separatorColumn: {
        name: 'vl-group--separator-column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Voegt horizontale scheidingslijnen toe boven en onder items.',
    },
    separatorRow: {
        name: 'vl-group--separator-row',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Voegt verticale scheidingslijnen toe links en rechts tussen items.',
    },
    spaceBetween: {
        name: 'vl-group--space-between',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description:
            'Het eerste item staat in het begin, het laatste op het einde,' +
            'de overige items staan verdeelt met gelijke ruimte ertussen.',
    },
};
