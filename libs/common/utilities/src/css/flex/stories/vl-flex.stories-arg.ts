import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const vlFlexArgs = {
    column: false,
    row: false,
    spaceBetween: false,
    justifyStart: false,
    justifyCenter: false,
    justifyEnd: false,
};

export const vlFlexArgTypes: ArgTypes<typeof vlFlexArgs> = {
    column: {
        name: 'vl-flex--column',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een kolom.',
    },
    row: {
        name: 'vl-flex--row',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit in een rij.',
    },
    spaceBetween: {
        name: 'vl-flex--space-between',
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
        name: 'vl-flex--justify-start',
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
        name: 'vl-flex--justify-end',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'style',
            defaultValue: { summary: 'false' },
        },
        description: 'Lijnt de items uit naar het einde.',
    },
};
