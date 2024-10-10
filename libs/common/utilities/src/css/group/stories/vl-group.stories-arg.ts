import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const vlGroupArgs = {
    column: false,
    row: false,
    bordered: false,
    spaceBetween: false,
    justifyStart: false,
    justifyCenter: false,
    justifyEnd: false,
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
    row: {
        name: 'vl-group--row',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een rij.',
    },
    bordered: {
        name: 'vl-group--bordered',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Voegt een scheidingslijn toe tussen items.',
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
    justifyStart: {
        name: 'vl-group--justify-start',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit naar het begin.',
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
};
